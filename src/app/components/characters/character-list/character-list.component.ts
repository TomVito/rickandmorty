import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UIDataService } from 'src/app/services/uidata.service';
import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})

export class CharacterListComponent implements OnInit {

  public characters : any = [];
  public charactersInfo : any = [];
  public page : number = 1;
  public errors: any;

  public searchOptions = {
    'name' : '',
    'status' : '',
    'gender' : ''
  }

  constructor(
    private _characterService: CharacterService,
    private _uiDataService: UIDataService
    ) { }

  ngOnInit(): void {
    this._uiDataService.getCharactersPage().subscribe((data: number) => {
      this.page = data;
      this.getCharacters();
    });
  }

  filterCharacters(name : string) {

    this.searchOptions.name = name;
    this.getCharacters();
    
  }

  getCharacters(name? : string) {

    this._characterService.getCharacters(this.page, this.searchOptions.name)
    .subscribe((data : any) => {

    this.characters = data.results;
    this.charactersInfo = data.info;
    },
    (error: any) => {

      
      if (error.status == '404') {
        
          this.errors = error;
          this.characters = [];
          this.charactersInfo.count = 0;
          this.charactersInfo.pages = 0;
          
        } 

      }

    );

  }

}
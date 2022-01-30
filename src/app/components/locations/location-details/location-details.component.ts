import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LocationService } from 'src/app/services/location.service';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {

  public location? : any;
  public characters : [] = [];
  public charactersIds : any = [];
  private id : string | null;

  constructor( 
    private route: ActivatedRoute, private _locationService: LocationService, private _characterService: CharacterService) {
    this.id = this.route.snapshot.paramMap.get("id");

   }

  ngOnInit(): void {

    this._locationService.getLocation(this.id).subscribe((data : any) => {
      this.location = data;

      this.getCharacters();

    });
    
  }

  getCharacters() {

    if(this.location) {

      for(let i = 0; i < this.location.residents.length; i++) {
      
        let temp : string = this.location.residents[i].replace("https://rickandmortyapi.com/api/character/", "");

        this.charactersIds.push(temp);

      }

      this._characterService.getCharacter(this.charactersIds).subscribe((data: any) => {
        
        this.characters = data;

      });

    }

  }

}
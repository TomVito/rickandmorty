import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CharacterService } from '../../../services/character.service';
import { EpisodeService } from '../../../services/episode.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {

  public episode? : any;
  public characters : [] = [];
  public charactersIds : any = [];
  private id : string | null;

  constructor(
    private route: ActivatedRoute, private _episodeService: EpisodeService, private _characterService: CharacterService) { 
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {

    this._episodeService.getEpisode(this.id).subscribe((data : any)  => {
      this.episode = data;

      this.getCharacters();

    });

  }

  getCharacters() {

    if(this.episode) {

      for(let i = 0; i < this.episode.characters.length; i++) {
      
        let temp : string = this.episode.characters[i].replace("https://rickandmortyapi.com/api/character/", "");

        this.charactersIds.push(temp);

      }

      this._characterService.getCharacter(this.charactersIds).subscribe((data: any) => {
        
        this.characters = data;

      });

    }

  }

}

import { Component, OnInit, Input } from '@angular/core';
import { EpisodeService } from '../../../services/episode.service';

@Component({
  selector: 'app-character-episodes-list',
  templateUrl: './character-episodes-list.component.html',
  styleUrls: ['./character-episodes-list.component.scss']
})
export class CharacterEpisodesListComponent implements OnInit {

  @Input() character : any;

  constructor(
    private _episodeService: EpisodeService,
  ) { }

  ngOnInit(): void {
  }

}

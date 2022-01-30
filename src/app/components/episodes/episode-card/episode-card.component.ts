import { Component, OnInit, Input } from '@angular/core';
import { EpisodeService } from '../../../services/episode.service';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {

  @Input() episodeUrl : any;
  public episode : any;

  constructor(
    private _episodeService: EpisodeService
  ) {}

  ngOnInit(): void {

    this._episodeService.getEpisodeByUrl(this.episodeUrl).subscribe(data => {
      this.episode = data;

    });

  }

}

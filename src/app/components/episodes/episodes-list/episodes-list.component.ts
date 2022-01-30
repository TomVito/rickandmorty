import { Component, OnInit, Input } from '@angular/core';
import { EpisodeService } from '../../../services/episode.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {

  public episodes : any = [];
  public episodesInfo : any = [];
  public page : number = 1;
  public errors: any;

  public searchOptions = {
    'name' : '',
    'episode' : ''
  }

  constructor(
    private _episodeService: EpisodeService
  ) { }

  ngOnInit(): void {

      this.getEpisodes();

  }

  filterEpisodes(name : string) {

    this.searchOptions.name = name;
    this.getEpisodes();
    
  }

  getEpisodes(name? : string){
    
    this._episodeService.getEpisodes(this.page, this.searchOptions.name)
      .subscribe((data: any) => {
        
      this.episodes = data.results;
      this.episodesInfo = data.info;

    },
    (error: any) => {

      if (error.status == '404') {
        
          this.errors = error;
          this.episodes = [];
          this.episodesInfo.count = 0;
          this.episodesInfo.pages = 0;
          
        } 

      }

    );

  }

  previousPage() {
    
    if(this.page > 1) {
      this.page--;
    }

    this.getEpisodes();

  }

  nextPage() {

    if(this.page < this.episodesInfo.pages) {
    this.page++;
    } 

    this.getEpisodes();

  }

}

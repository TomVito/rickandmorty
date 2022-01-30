import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent implements OnInit {

  public locations : any = [];
  public locationsInfo : any = [];
  public page : number = 1;
  public errors: any;

  public searchOptions = {
    'name' : '',
    'type' : '',
    'dimension' : ''
  }

  constructor(
    private _locationService: LocationService
  ) { }

  ngOnInit(): void {

    this.getLocations();

  }

  filterLocations(name : string) {

    this.searchOptions.name = name;
    this.getLocations();
    
  }

  getLocations() {

    this._locationService.getLocations(this.page, this.searchOptions.name).subscribe((data: any) => {
      this.locations = data.results;
      this.locationsInfo = data.info;

    },

    (error: any) => {

      if (error.status == '404') {
        
          this.errors = error;
          this.locations = [];
          this.locationsInfo.count = 0;
          this.locationsInfo.pages = 0;
          
        } 

      }

    );

  }

  previousPage() {
    
    if(this.page > 1) {
      this.page--;
    }

    this.getLocations();

  }

  nextPage() {

    if(this.page < this.locationsInfo.pages) {
    this.page++;
    } 

    this.getLocations();

  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {

  public location : any = [];
  private id : string | null;

  constructor(
    private route: ActivatedRoute, private _locationService: LocationService) {
      this.id = this.route.snapshot.paramMap.get("id");
    }

    ngOnInit(): void {

      this._locationService.getLocation(this.id).subscribe(data => {
        this.location = data;
  
      });
  
    }

}
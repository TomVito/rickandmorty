import { Component, OnInit } from '@angular/core';
import { UIDataService } from 'src/app/services/uidata.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  private page = 1;

  constructor(private _uiDataService: UIDataService) { }

  ngOnInit(): void {
    this._uiDataService.getCharactersPage().subscribe((data : number) => {
    this.page = data;
    });
  }

  previousPage() {
    
    if(this.page > 1) {

      this.page--;
      this._uiDataService.setCharactersPage(this.page)

    }
    
  }

  nextPage() {

    this.page++;
    this._uiDataService.setCharactersPage(this.page);

  }

}
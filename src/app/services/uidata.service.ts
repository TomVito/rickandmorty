import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIDataService {
  
  private pageSubject = new BehaviorSubject(1);

  constructor() {

   }

   getCharactersPage() : BehaviorSubject<number> {
    return this.pageSubject;
   }

   setCharactersPage(page : number) {
    this.pageSubject.next(page);
   }

}

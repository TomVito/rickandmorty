import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CharacterService {
  
  private url: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters(page : number, name ?: string) {

    let params = new HttpParams();
      
    params = params.append('page', page)

    if(name) {
      params = params.append('name', name);
    }
      
    let data = this.http.get(this.url, {params});
    
    return data;

  }

  getCharacter(id: string | null) {

    let data = this.http.get(this.url + "/" + id);

    return data;

  }

}

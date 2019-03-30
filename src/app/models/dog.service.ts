import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  // Note2: here there are no classes but still use Observable. Fetch the JSON on this url.
  getRandomDog(): Observable<any> {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }
}

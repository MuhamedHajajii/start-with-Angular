import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }
  getPosts():Observable <any>
  {
     return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
  }
}

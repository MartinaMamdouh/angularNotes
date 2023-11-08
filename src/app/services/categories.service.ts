import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
  viewCategory(categoryid: number):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/viewAll/${categoryid}`)
  }
}

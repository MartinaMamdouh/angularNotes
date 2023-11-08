import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notes } from '../models/notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
private apiURL='http://localhost:3000/categories/updateNoteCategory'
  constructor(private http: HttpClient) { }

  updateNote(notes:any): Observable<any>{
    return this.http.patch(this.apiURL,notes);
    
  }
}

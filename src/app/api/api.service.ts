import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Note , NoteAdapter } from '../models/note'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private noteAdapter: NoteAdapter) { }

  getNotes(): Observable<Note[]> {
    return this.httpClient
      .get<Note[]>('http://localhost:8080/api/notes')
      .pipe(map((data) => data.map(item => this.noteAdapter.adapt(item))))
  }

  addNote(title: string, body: string): Observable<Note> {
    return this.httpClient
      .post<any>('http://localhost:8080/api/notes', {title: title, content: body})
      .pipe(map(resp => this.noteAdapter.adapt(resp)))
  }

  editNote(id: number, title: string, body: string): Observable<any> {
    return this.httpClient
      .put<any>('http://localhost:8080/api/notes/' + id, {title: title, content: body})
      .pipe(map(resp => this.noteAdapter.adapt(resp)))
  }

  deleteNote(id: number): Observable<any> {
    return this.httpClient
      .delete('http://localhost:8080/api/notes/' + id)
      .pipe(map(resp => resp))
  }
}
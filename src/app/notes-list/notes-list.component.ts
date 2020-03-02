import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from '../api.service';
import { Note } from '../model/note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})

export class NotesListComponent implements OnInit {

  note: Note;
  notes: Note[];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getNotes().subscribe({
      next: data => {
        this.notes = data;
        this.note = data[0];
      },
      error: error => {
        console.log(error.message);
      }
    });
  }

  showNote(noteShow: Note){
    this.note = noteShow;
  }

  editNote(noteEdit: Note){
    this.router.navigate(['notes/edit'], {state: {data: {noteEdit}}})
  }

  deleteNote(deleteId){
    this.router.navigate(['notes/delete'], {state: {data: {deleteId}}})
  }

}

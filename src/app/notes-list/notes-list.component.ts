import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'
import { Note, ViewNote } from '../model/note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})

export class NotesListComponent implements OnInit {

  notes: Note[]

  constructor(private apiService: ApiService, private router: Router, private viewNote: ViewNote) { }

  ngOnInit() {
    this.apiService.getNotes().subscribe({
      next: data => {
        this.notes = data
        if(this.viewNote.getCurrentNote() == null) {
          this.viewNote.setNewNote(data[0])
        }
      },
      error: error => {
        console.log(error.message)
      }
    })
  }

  ngOnDestroy() {

  }

  showNote(noteShow: Note){
    this.viewNote.setNewNote(noteShow)
  }

  createNote() {
    this.router.navigate(['notes/create'])
  }

}

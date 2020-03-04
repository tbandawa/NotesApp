import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { Note, ViewNote } from '../model/note'

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent implements OnInit {

  note: Note

  constructor(private router: Router, private viewNote: ViewNote) {

    this.viewNote.getNewNote().subscribe(
      note => {
        this.note = note
      }
    )

    if(this.viewNote.getCurrentNote() != null) {
      this.note = this.viewNote.getCurrentNote()
    }
    
  }

  ngOnInit() {}

  editNote(noteEdit: Note){
    this.router.navigate(['notes/edit'], {state: {data: {noteEdit}}})
  }

  deleteNote(noteDelete){
    this.router.navigate(['notes/delete'], {state: {data: {noteDelete}}})
  }

}

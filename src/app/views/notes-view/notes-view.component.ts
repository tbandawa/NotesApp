import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { Note, CurrentNote } from 'src/app/models/note'

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent implements OnInit {

  note!: Note

  constructor(
    private router: Router,
    private currentNote: CurrentNote
  ) {
    this.currentNote.getNote().subscribe(
      note => {
        this.note = note
      }
    )
  }

  ngOnInit() {}

  editNote(noteEdit: Note){
    this.router.navigate(['notes/edit'], {state: {data: {noteEdit}}})
  }

  deleteNote(noteDelete: Note){
    this.router.navigate(['notes/delete'], {state: {data: {noteDelete}}})
  }
}

import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ApiService } from 'src/app/api/api.service'
import { Errors } from 'src/app/models/errors'
import { Note, CurrentNote } from 'src/app/models/note'

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent  implements OnInit {

  notes!: Note[] | null
  activeNote!: Note

  constructor(
    private apiService: ApiService,
    private router: Router,
    private currentNote: CurrentNote,
    private errors: Errors
  ) {
    this.currentNote.getNote().subscribe(
      note => {
        this.activeNote = note
      }
    )
  }

  ngOnInit() {
    this.apiService.getNotes().subscribe({
      next: data => {
        this.notes = data
        this.currentNote.setNote(data[0])
      },
      error: error => {
        this.errors.setError(error.message)
      }
    })
  }

  showNote(noteShow: Note){
    this.currentNote.setNote(noteShow)
  }

  createNote() {
    this.router.navigate(['notes/create']).then(() => {})
  }
}

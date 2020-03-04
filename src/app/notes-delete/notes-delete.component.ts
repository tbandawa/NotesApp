import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ApiService } from '../api.service'
import { Note, ViewNote } from '../model/note'

@Component({
  selector: 'app-notes-delete',
  templateUrl: './notes-delete.component.html',
  styleUrls: ['./notes-delete.component.css']
})
export class NotesDeleteComponent implements OnInit {

  noteDelete: Note

  constructor(private router: Router, private apiService: ApiService, private viewNote: ViewNote) { }

  ngOnInit() {
    this.noteDelete = history.state.data.noteDelete
  }

  deleteClick() {
    this.apiService.deleteNote(this.noteDelete.id).subscribe({
      next: resp => { 
        console.log(resp)
        this.viewNote.setNewNote(null)
        this.router.navigate([''])
      },
      error: err => console.log(err.message)
    })
  }

  cancelClick() {
    this.router.navigate([""])
  }

}

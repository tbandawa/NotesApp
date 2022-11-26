import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ApiService } from 'src/app/api/api.service'
import { Errors } from 'src/app/models/errors'
import { ErrorResponse, Note } from 'src/app/models/note'

@Component({
  selector: 'app-notes-delete',
  templateUrl: './notes-delete.component.html',
  styleUrls: ['./notes-delete.component.css']
})
export class NotesDeleteComponent implements OnInit {

  noteDelete!: Note
  errorResponse!: ErrorResponse

  constructor(private router: Router, private apiService: ApiService, private errors: Errors) { }

  ngOnInit() {
    this.noteDelete = history.state.data.noteDelete
  }

  deleteClick() {
    this.apiService.deleteNote(this.noteDelete.id).subscribe({
      next: resp => {
        console.log(resp)
        this.router.navigate([''])
      },
      error: error => {
        this.errorResponse = error.error
        this.errors.setError(this.errorResponse.message)
      }
    })
  }

  cancelClick() {
    this.router.navigate([""])
  }
}

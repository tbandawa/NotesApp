import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router'
import { ApiService } from 'src/app/api/api.service'
import { Errors } from 'src/app/models/errors'
import {ErrorResponse, Note} from 'src/app/models/note'

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent implements OnInit {

  note!: Note
  noteTitle!: string
  noteBody!: string
  errorResponse!: ErrorResponse

  title = new FormControl('', [Validators.required])
  body = new FormControl('', [Validators.required])

  editForm: FormGroup = this.formBuilder.group({
    title: this.title,
    body: this.body
  })

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private errors: Errors
  ) {}

  ngOnInit() {
    this.note = history.state.data.noteEdit

    this.noteTitle = this.note.title
    this.noteBody = this.note.content
  }

  onEdit() {
    this.apiService.editNote(this.note.id, <string>this.title.value, <string>this.body.value).subscribe({
      next: data => {
        console.log(data)
        this.router.navigate([""])
      },
      error: error => {
        this.errorResponse = error.error
        this.errors.setError(this.errorResponse.message)
      }
    })
  }

  cancelClick() {
    this.router.navigate([''])
  }
}

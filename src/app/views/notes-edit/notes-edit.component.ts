import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { ApiService } from 'src/app/api/api.service'
import { Errors } from 'src/app/models/errors'
import { Note } from 'src/app/models/note'

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent implements OnInit {

  note!: Note
  title!: string
  body!: string
  editForm: FormGroup

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private errors: Errors
  ) {
    this.editForm = this.formBuilder.group({
      title: '',
      body: ''
    })
  }

  ngOnInit() {
    this.note = history.state.data.noteEdit
    this.title = this.note.title
    this.body = this.note.content
  }

  onEdit() {
    if (this.editForm.get('title') == null || this.editForm.get('body') == null) {
      this.errors.setError("Enter note title and body")
      return
    }
    this.apiService.editNote(this.note.id, this.editForm.get('title')?.value, this.editForm.get('body')?.value).subscribe({
      next: data => {
        console.log(data)
        this.router.navigate([""])
      },
      error: error => {
        this.errors.setError(error.message)
      }
    })
  }

  cancelClick() {
    this.router.navigate([''])
  }
}

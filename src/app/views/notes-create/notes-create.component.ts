import { Component } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router'
import { ApiService } from 'src/app/api/api.service'
import { Errors } from 'src/app/models/errors'
import { Note } from 'src/app/models/note'

@Component({
  selector: 'app-notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.css']
})
export class NotesCreateComponent {

  note!: Note
  value!: String

  title = new FormControl('', [Validators.required])
  body = new FormControl('', [Validators.required])

  createForm: FormGroup = this.formBuilder.group({
    title: this.title,
    body: this.body
  })

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private errors: Errors
  ) {}

  onCreate() {
    this.apiService.addNote(<string>this.title.value, <string>this.body.value).subscribe({
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
    this.router.navigate([""])
  }
}

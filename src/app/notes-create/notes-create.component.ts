import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ApiService } from '../api.service'
import { Note } from '../model/note'
import { Errors } from '../model/errors'

@Component({
  selector: 'app-notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.css']
})
export class NotesCreateComponent implements OnInit {

  note: Note
  value: String

  constructor(private router: Router, private apiService: ApiService, private errors: Errors) { }

  ngOnInit() { }

  onCreate(formData) {
    this.errors.setError(null)
    this.apiService.addNote(formData.title, formData.body).subscribe({
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

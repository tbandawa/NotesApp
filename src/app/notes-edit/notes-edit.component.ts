import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Note } from '../model/note'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }

  note: Note
  title: string
  body: string

  ngOnInit() {
    this.note = history.state.data.noteEdit
    this.title = this.note.title
    this.body = this.note.content
  }

  onEdit(formData) {
    this.apiService.editNote(this.note.id, formData.title, formData.body).subscribe({
      next: data => {
        console.log(data)
        this.router.navigate([""])
      },
      error: error => {
        console.log(error.message)
      }
    })
  }

  cancelClick() {
    this.router.navigate([''])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Note } from '../model/note';

@Component({
  selector: 'app-notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.css']
})
export class NotesCreateComponent implements OnInit {

  note: Note;
  value: String;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() { }

  onCreate(formData) {
    this.apiService.addNote(formData.title, formData.body).subscribe({
      next: data => {
        console.log(data);
        this.router.navigate([""]);
      },
      error: error => {
        console.log(error.message);
      }
    });
  }

  cancelClick() {
    this.router.navigate([""]);
  }

}

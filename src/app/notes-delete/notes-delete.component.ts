import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-notes-delete',
  templateUrl: './notes-delete.component.html',
  styleUrls: ['./notes-delete.component.css']
})
export class NotesDeleteComponent implements OnInit {

  noteId: number;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.noteId = history.state.data.deleteId;
  }

  deleteClick() {
    this.apiService.deleteNote(this.noteId).subscribe({
      next: resp => { 
        console.log(resp);
        this.router.navigate(['']);
      },
      error: err => console.log(err.message)
    })
  }

  cancelClick() {
    this.router.navigate([""]);
  }

}

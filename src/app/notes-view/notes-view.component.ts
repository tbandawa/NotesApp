import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { Note } from '../model/note';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent implements OnInit {

  @Input() note: Note;

  constructor(private router: Router) {}

  ngOnInit() {
    if(history.state.data.noteHistory){
      console.log("last note", history.state.data.noteHistory);
    } else {
      console.log("history is empty");
    }
  }

  editNote(noteEdit: Note){
    this.router.navigate(['notes/edit'], {state: {data: {noteEdit}}})
  }

  deleteNote(deleteId){
    this.router.navigate(['notes/delete'], {state: {data: {deleteId}}})
  }

}

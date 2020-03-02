import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../model/note';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent implements OnInit {

  @Input() note: Note;

  constructor() {}

  ngOnInit() {
    //console.log(this.note)
  }

}

import { Component } from '@angular/core'
import { Errors } from './model/errors'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'NotesApp'
  error: String

  constructor(private errors: Errors) {

    this.errors.getError().subscribe(
      error => {
        this.error = error
      }
    )
    
  }

}

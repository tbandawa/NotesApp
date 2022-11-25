import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DatePipe } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotesEditComponent } from './views/notes-edit/notes-edit.component';
import { NotesListComponent } from './views/notes-list/notes-list.component';
import { NotesViewComponent } from './views/notes-view/notes-view.component';
import { NotesDeleteComponent } from './views/notes-delete/notes-delete.component';
import { NotesCreateComponent } from './views/notes-create/notes-create.component'

@NgModule({
  declarations: [
    AppComponent,
    NotesEditComponent,
    NotesListComponent,
    NotesViewComponent,
    NotesDeleteComponent,
    NotesCreateComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  exports: [NotesListComponent, NotesViewComponent, NotesEditComponent, NotesCreateComponent, NotesDeleteComponent]
})
export class AppModule { }

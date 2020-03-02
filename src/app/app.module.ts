import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { NotesEditComponent } from './notes-edit/notes-edit.component';
import { NotesCreateComponent } from './notes-create/notes-create.component';
import { NotesDeleteComponent } from './notes-delete/notes-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NotesViewComponent,
    NotesEditComponent,
    NotesCreateComponent,
    NotesDeleteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NotesListComponent, NotesViewComponent, NotesEditComponent, NotesCreateComponent, NotesDeleteComponent]
})
export class AppModule { }

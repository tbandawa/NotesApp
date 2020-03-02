import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesEditComponent } from './notes-edit/notes-edit.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { NotesCreateComponent } from './notes-create/notes-create.component';
import { NotesDeleteComponent } from './notes-delete/notes-delete.component';

const routes: Routes = [
  { path: "", component: NotesListComponent },
  { path: "notes/edit", component: NotesEditComponent },
  { path: "notes/view", component: NotesViewComponent },
  { path: "notes/create", component: NotesCreateComponent },
  { path: "notes/delete", component: NotesDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

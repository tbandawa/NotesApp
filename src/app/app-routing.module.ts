import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './views/notes-list/notes-list.component';
import { NotesEditComponent } from './views/notes-edit/notes-edit.component';
import { NotesViewComponent } from './views/notes-view/notes-view.component';
import { NotesCreateComponent } from './views/notes-create/notes-create.component';
import { NotesDeleteComponent } from './views/notes-delete/notes-delete.component';

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

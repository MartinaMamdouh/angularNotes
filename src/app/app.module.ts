import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ViewCategoriesComponent } from './components/view-categories/view-categories.component';
import { GeneralComponent } from './components/general/general.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ViewNotesComponent } from './components/view-notes/view-notes.component';
import {provideClientHydration} from '@angular/platform-browser';
import { ChecklistComponent } from './components/checklist/checklist.component';

const routes: Routes = [
  { path: 'app-note-editor', component: NoteEditorComponent },
  {path: 'app-view-categories', component: ViewCategoriesComponent },
  {path: 'app-list', component: ListComponent },

 
];
@NgModule({
  declarations: [
    AppComponent,
    NoteEditorComponent,
    ViewCategoriesComponent,
    GeneralComponent,
    ListComponent,
    ViewNotesComponent,
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})

  ],
  providers: [
     provideClientHydration()
    ],
  bootstrap: [AppComponent],
  exports:[
    RouterModule
  ]
})
export class AppModule { }

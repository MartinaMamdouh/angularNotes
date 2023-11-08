import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent {
  // id = new FormControl('', [Validators.required,]);
  // title = new FormControl('');
  // body = new FormControl('');
  // categoryId = new FormControl('', [Validators.required,]);

  // notesForm = new FormGroup({
  //   id: this.id,
  //   title: this.title,
  //   body: this.body,
  //   categoryId: this.categoryId,

  // })


  notesForm = new FormGroup({
    id: new FormControl('', [Validators.required,]),
    title: new FormControl(''),
    body: new FormControl(''),
    categoryId: new FormControl('', [Validators.required,]),
  });

  constructor(private noteService: NotesService, private location: Location) { }

  updateNote(): void {

    console.log("hhhhh");

    if (this.notesForm.valid) {
      const note = {
        // id: this.id.value ? Number(this.id.value) : null,
        // title: this.title.value || '',
        // body: this.body.value || '',
        // categoryId: this.categoryId.value ? Number(this.categoryId.value) : null

        id: Number(this.notesForm.getRawValue().id),
        title: this.notesForm.getRawValue().title,
        body: this.notesForm.getRawValue().body,
        categoryId: Number(this.notesForm.getRawValue().categoryId),
      }

      console.log(this.notesForm.get('id')?.value);

      this.noteService.updateNote(note).subscribe({
        next: (updateNote) => {
          console.log(updateNote);
          alert('Note updated successfully');
        },
        error: (err) => {
          console.error(err);
          alert('Error updating note');
        }
      }
      )
    }

    // window.location.reload();
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-selector',
  templateUrl: './note-selector.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class NoteSelectorComponent {
  @Output() noteAjoutee = new EventEmitter<Note>();

  notes: Note[] = [
    { nom: 'Do', position: 40, type: 'noire' },
    { nom: 'Ré', position: 30, type: 'noire' },
    { nom: 'Mi', position: 20, type: 'noire' },
    { nom: 'Fa', position: 10, type: 'noire' },
    { nom: 'Sol', position: 0, type: 'noire' },
    { nom: 'La', position: -10, type: 'noire' },
    { nom: 'Si', position: -20, type: 'noire' }
  ];

  selectedNote?: Note;

  
  ajouterNote() {
    console.log('== AJOUTER NOTE ==');
    console.log('selectedNote', this.selectedNote);
    if (this.selectedNote) {
      this.noteAjoutee.emit(this.selectedNote);
      console.log('Note émise');
      this.selectedNote = undefined;
    } else {
      console.warn('Aucune note sélectionnée');
    }
  }
  ajouter10Random() {
    console.log('== AJOUTER 10 NOTES ==');
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * this.notes.length);
      const note = this.notes[randomIndex];
      console.log('Note sélectionnée : ', note);
      this.noteAjoutee.emit(note);
    }
    console.log('10 notes émises');
  }
}

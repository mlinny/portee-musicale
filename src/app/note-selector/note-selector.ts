import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note, NoteDegree, NoteType, NoteValeur } from '../../models/note.model';

@Component({
  selector: 'app-note-selector',
  templateUrl: './note-selector.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class NoteSelectorComponent {
  @Output() noteAjoutee = new EventEmitter<Note>();

  notes: Note[] = [
    { nom: NoteValeur.Do, degree: NoteDegree.Medium, type: NoteType.Noire },
    { nom: NoteValeur.Re, degree: NoteDegree.Medium, type: NoteType.Noire },
    { nom: NoteValeur.Mi, degree: NoteDegree.Medium, type: NoteType.Noire },
    { nom: NoteValeur.Fa, degree: NoteDegree.Medium, type: NoteType.Noire },
    { nom: NoteValeur.Sol, degree: NoteDegree.Medium, type: NoteType.Noire },
    { nom: NoteValeur.La, degree: NoteDegree.Medium, type: NoteType.Noire },
    { nom: NoteValeur.Si, degree: NoteDegree.Medium, type: NoteType.Noire }
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
  vider() {
    this.noteAjoutee.emit(undefined);
    this.selectedNote = undefined;
  }
}

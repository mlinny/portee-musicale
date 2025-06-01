import { Component } from '@angular/core';
import { PorteeComponent } from './portee/portee';
import { NoteSelectorComponent } from './note-selector/note-selector';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PorteeComponent, NoteSelectorComponent],
  template: `
    <app-portee [notes]="notes"></app-portee>
    <app-note-selector (noteAjoutee)="onNoteAjoutee($event)"></app-note-selector>
  `
})
export class AppComponent {
  notes: Note[] = [];

  onNoteAjoutee(note: Note) {
    // Évite les doublons si besoin
    console.log('== NOTE REÇUE ==', note);
    this.notes = [...this.notes, note];
  }
}

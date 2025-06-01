import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/note.model';
//import { NoteSelectorComponent } from '../note-selector/note-selector';

@Component({
  selector: 'app-portee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portee.html',
  styleUrls: ['./portee.css']
})
export class PorteeComponent {
  /*public notesAjoutees: Note[] = [];*/
  @Input() notes: Note[] = [];


  //ajouterNote(note: Note) {
  //  this.notesAjoutees.push(note);
  //}

  getPositionLeft(index: number): number {
    return 130 + index * 30; // Décalage horizontal
  }
}

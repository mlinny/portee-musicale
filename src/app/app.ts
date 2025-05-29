import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // important pour ngModel

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],    // Importer FormsModule ici pour ngModel
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  notes = ['Do', 'Ré', 'Mi', 'Fa', 'Sol', 'La', 'Si', 'Do aigu'];
  selectedNote: string = '';
  notePosition: number = 0;

  updateNotePosition() {
    const positions: { [key: string]: number } = {
      'Do': 110,
      'Ré': 100,
      'Mi': 90,
      'Fa': 80,
      'Sol': 70,
      'La': 60,
      'Si': 50,
      'Do aigu': 40
    };
    this.notePosition = positions[this.selectedNote] ?? 0;
  }
}

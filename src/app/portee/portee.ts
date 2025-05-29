import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portee',
  templateUrl: './portee.html',
  styleUrls: ['./portee.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PorteeComponent {
  public notes = [
    { nom: 'Do', position: 100 },
    { nom: 'Ré', position: 90 },
    { nom: 'Mi', position: 80 },
    { nom: 'Fa', position: 70 },
    { nom: 'Sol', position: 60 },
    { nom: 'La', position: 50 },
    { nom: 'Si', position: 40 }
  ];

  noteSelectionnee?: { nom: string, position: number } | null = null;
}

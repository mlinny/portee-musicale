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
    { nom: 'Do', position: 40 },
    { nom: 'Ré', position: 30 },
    { nom: 'Mi', position: 20 },
    { nom: 'Fa', position: 10 },
    { nom: 'Sol', position: 0 },
    { nom: 'La', position: -10 },
    { nom: 'Si', position: -20 }
  ];

  noteSelectionnee?: { nom: string, position: number } | null = null;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note-svg',
  standalone: true,
  templateUrl: './note-svg.component.html'
})
export class NoteSvgComponent {
  @Input() type: string = 'ronde'; // ronde, blanche, noire, etc.
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/note.model';
import { PORTEE_CONSTANTES } from './portee.constantes';

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
  readonly constantes = PORTEE_CONSTANTES;

  //ajouterNote(note: Note) {
  //  this.notesAjoutees.push(note);
  //}

  getPositionLeft(index: number): number {
    const nbBarres = Math.floor(index / 4);
    return 130 + index * (PORTEE_CONSTANTES.NOTE_HEIGHT * 2) + nbBarres * 10; // Décalage horizontal
  }

  getLignesSupplementaires(note: Note): { top: number, left: number }[] {
    // Position des lignes de la portée (de 0 à 4) : 40, 60, 80, 100, 120 (exemple)
    // Ici, la première ligne (en bas) est à position 40 (Do), puis chaque ligne est espacée de 20px
    // Les notes sous la portée : position > 80
    // Les notes au-dessus : position < 0
    console.log('traitement de la note : ', note)
    const lignes: { top: number, left: number }[] = [];
    const positionNote = PORTEE_CONSTANTES.POSITION_SOL - note.position; // même calcul que pour la note
    const premiereLigne = PORTEE_CONSTANTES.POSITION_SOL - PORTEE_CONSTANTES.ESPACEMENT_LIGNE; // ligne de mi
    const derniereLigne = PORTEE_CONSTANTES.POSITION_SOL + 4 * PORTEE_CONSTANTES.ESPACEMENT_LIGNE; // position de la 5ème ligne
    console.log('premiere ligne :', premiereLigne, 'dernière ligne : ', derniereLigne);

    // Lignes sous la portée
    if (positionNote > derniereLigne) {
      console.log(positionNote, '>', derniereLigne);
      // Chaque 10px au-dessous de la dernière ligne = une ligne d’appoint
      let n = Math.floor((positionNote - derniereLigne) / PORTEE_CONSTANTES.ESPACEMENT_LIGNE);
      console.log('n lignes sous la portée', n, positionNote, derniereLigne);
      for (let i = 1; i <= n; i++) {
        lignes.push({ top: derniereLigne + i * PORTEE_CONSTANTES.ESPACEMENT_LIGNE - positionNote + 8, left: -4 });
      }
    }

    // Lignes au-dessus de la portée
    if (positionNote < premiereLigne) {
      console.log(positionNote, '<', derniereLigne);
      let n = Math.floor((premiereLigne - positionNote) / PORTEE_CONSTANTES.ESPACEMENT_LIGNE);
      console.log('n lignes au-dessus de la portée', n, positionNote, premiereLigne);
      for (let i = 1; i <= n; i++) {
        lignes.push({ top: premiereLigne - i * PORTEE_CONSTANTES.ESPACEMENT_LIGNE - positionNote + 8, left: -4 });
      }
    }

    return lignes;
  }

}

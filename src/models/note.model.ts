export enum NoteType {
  Ronde = 'ronde',
  Blanche = 'blanche',
  Noire = 'noire',
  Croche = 'croche',
  DoubleCroche = 'double-croche'
}
export enum NoteValeur {
  Do = 'Do',
  Re = 'Ré',
  Mi = 'Mi',
  Fa = 'Fa',
  Sol = 'Sol',
  La = 'La',
  Si = 'Si'
}

export enum NoteDegree {
  Grave = 'grave',
  Medium = 'medium',
  Aigu = 'aigu'
}

export class NoteDegreeTools {
  public static getPosition(degree: NoteDegree, Note: NoteValeur): number {
    let modificateur: number;
    modificateur = NoteDegreeTools.getModificateurFromDegree(degree);

    switch (Note) {
      case NoteValeur.Do:
        return 40 + modificateur;
      case NoteValeur.Re:
        return 30 + modificateur;
      case NoteValeur.Mi:
        return 20 + modificateur;
      case NoteValeur.Fa:
        return 10 + modificateur;
      case NoteValeur.Sol:
        return 0 + modificateur;
      case NoteValeur.La:
        return -10 + modificateur;
      case NoteValeur.Si:
        return -20 + modificateur;
      default:
        throw new Error('Note non reconnue: ' + Note);
    }
  }
  
  private static getModificateurFromDegree(degree: NoteDegree): number {
    switch (degree) {
      case NoteDegree.Grave:
        return -70;
      case NoteDegree.Medium:
        return 0;
      case NoteDegree.Aigu:
        return 70;
      default:
        throw new Error('Degré de note non reconnu: ' + degree);
    }
  }

}

export interface Note {
  nom: NoteValeur;
  degree: NoteDegree;
  type: NoteType;
}


export interface Note {
  nom: string;
  position: number;
  type: 'ronde' | 'blanche' | 'noire' | 'croche' | 'double-croche';
}

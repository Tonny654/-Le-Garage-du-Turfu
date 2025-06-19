export class Vehicule {
  constructor(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
  }

  afficherDetail() {
    console.log(`Véhicule: ${this.marque} ${this.modele} (${this.annee})`);
  }
}

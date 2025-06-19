export class Voiture {
  #couleur;

  constructor(marque, modele, annee, couleur) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.#couleur = couleur;
  }

  get couleur() {
    return this.#couleur;
  }

  set couleur(nouvelleCouleur) {
    this.#couleur = nouvelleCouleur;
  }

  afficherDetail() {
    console.log(`Voiture: ${this.marque} ${this.modele} (${this.annee}) - Couleur: ${this.#couleur}`);
  }
}

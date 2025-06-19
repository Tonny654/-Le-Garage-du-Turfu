import { Vehicule } from "./vehicule.js";

export class Voiture extends Vehicule {
  #couleur;

  constructor(marque, modele, annee, couleur) {
    super(marque, modele, annee);
    this.#couleur = couleur;
  }

  get couleur() {
    return this.#couleur;
  }

  set couleur(nouvelleCouleur) {
    this.#couleur = nouvelleCouleur;
  }

  afficherDetail() {
    // Redéfinit la méthode pour inclure la couleur
    console.log(`Voiture: ${this.marque} ${this.modele} (${this.annee}) - Couleur: ${this.#couleur}`);
  }
}


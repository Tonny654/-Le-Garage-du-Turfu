/*-- Créer une Class--*/

class Voiture {

    #marque;
    #modele;

    constructor(marque, modele, annee, couleur) {
        this.#marque = marque;
        this.#modele = modele;
        this.annee = annee;
        this.couleur = couleur;
    }
    afficherDetail() {
    console.log(`Marque: ${this.marque}, Modèle: ${this.modele}, Annee: ${this.annee}`);
    console.log(`Couleur: ${this.couleur}`);
}
}

changerCouleur(nouvelleCouleur) {
    this.couleur = nouvelleCouleur;
    console.log(`La couleur a été changée en ${this.couleur}.`);
  }



   // --- Getters ---
  getMarque() {
    return this.#marque;
  }

  getModele() {
    return this.#modele;
  }

  getAnnee() {
    return this.annee;
  }

  getCouleur() {
    return this.couleur;
  }

  // --- Setters ---
  setMarque(nouvelleMarque) {
    this.#marque = nouvelleMarque;
  }

  setModele(nouveauModele) {
    this.#modele = nouveauModele;
  }

  setAnnee(nouvelleAnnee) {
    this.annee = nouvelleAnnee;
  }

  setCouleur(nouvelleCouleur) {
    this.couleur = nouvelleCouleur;
  }
}

// Créer une instance de la classe Voiture//

const maVoiture = new Voiture("Toyota", "corolla", 2020, "rouge");
const maVoiture2 = new Voiture("Peugeot", "308", 2020, "rouge");
const maVoiture3 = new Voiture("Renault", "Modus", 2020, "Gris");




maVoiture3.afficherDetail();
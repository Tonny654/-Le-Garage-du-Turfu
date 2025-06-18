/*-- Créer une Class--*/

class Voiture {
    constructor(marque, modele, annee, couleur) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.couleur = couleur;
    }
    afficherDetail() {
    console.log(`Marque: ${this.marque}, Modèle: ${this.modele}, Annee: ${this.annee}`);
    console.log(`Couleur: ${this.couleur}`);
}
}

// Créer une instance de la classe Voiture//

const maVoiture = new Voiture("Toyota", "corolla", 2020, "rouge");
const maVoiture2 = new Voiture("Peugeot", "308", 2020, "rouge");
const maVoiture3 = new Voiture("Renault", "Modus", 2020, "Gris");




maVoiture3.afficherDetail();
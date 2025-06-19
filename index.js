import { Animal } from "./animal.js";
import { Chien } from "./chien.js";
import { Chat } from "./chat.js";
import { Voiture } from "./voiture.js";

// ===== Formulaire ANIMAL =====
const formAnimal = document.getElementById("form-animal");
const listeAnimaux = document.getElementById("liste-animaux");

formAnimal.addEventListener("submit", (e) => {
  e.preventDefault();
  const nom = document.getElementById("nom-animal").value.trim();
  const type = document.getElementById("type-animal").value;

  let animal;
  switch (type) {
    case "chien": animal = new Chien(nom); break;
    case "chat": animal = new Chat(nom); break;
    default: animal = new Animal(nom);
  }

  animal.faireDuBruit(); // Affiche dans la console

  const div = document.createElement("div");
  div.textContent = `🐾 ${animal.nom} (${type})`;
  listeAnimaux.appendChild(div);

  formAnimal.reset();
});

// ===== Formulaire VOITURE =====
const formVoiture = document.getElementById("form-voiture");
const listeVoitures = document.getElementById("liste-voitures");

formVoiture.addEventListener("submit", (e) => {
  e.preventDefault();

  const marque = document.getElementById("marque").value.trim();
  const modele = document.getElementById("modele").value.trim();
  const annee = parseInt(document.getElementById("annee").value);
  const couleur = document.getElementById("couleur").value.trim();

  const voiture = new Voiture(marque, modele, annee, couleur);

  console.log("Nouvelle voiture créée :");
  voiture.afficherDetail();

  const div = document.createElement("div");
  div.textContent = `🚗 ${voiture.marque} ${voiture.modele} (${voiture.annee}) - Couleur : ${voiture.couleur}`;
  listeVoitures.appendChild(div);

  formVoiture.reset();
});

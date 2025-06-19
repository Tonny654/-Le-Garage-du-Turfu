## 🧑‍🔧  Modélisation orientée objet : Le Garage du Turfu

📜 ``Description``
Ton agence de développement logiciel a été sollicitée par le Garage du Turfu, un atelier spécialisé dans la maintenance de véhicules intelligents et compagnons robotiques.

Le directeur, un vieux briscard un peu geek, souhaite moderniser leur système de gestion interne en modélisant les différents objets du quotidien du garage grâce à la programmation orientée objet. Tu devras représenter les voitures, les animaux de compagnie robotisés et d’autres entités via un code structuré, maintenable et réutilisable.

``📦 Référentiels``
Développeur Web et Web Mobile – Bloc 3 (Programmation orientée objet)

``📘 Contexte du projet``
Le Garage du Turfu veut un prototype technique permettant de :

Créer des objets Voiture avec leurs caractéristiques
Garantir la sécurité des données internes (encapsulation)
Structurer les objets de façon hiérarchique (héritage)
Simuler des interactions avec des objets polymorphes (animaux robots)
Pour ce faire, tu devras suivre la roadmap suivante :

``Étape 1`` — Base du modèle : Classe Voiture
Créer une classe Voiture avec :

marque, modele, annee, couleur
Méthode : afficherDetails() → affiche les infos

Créer une instance de Voiture et afficher ses détails

``Étape 2`` — Sécurité des données : Encapsulation
Rendre les attributs privés (#marque, etc.)
Ajouter les getters et setters pour chaque attribut
Tester la modification de la couleur via un setter

``Étape 3 ``— Organisation de la flotte : Héritage
Créer une superclasse Vehicule avec :

marque, modele, annee
Faire hériter Voiture de Vehicule

Ajouter couleur dans Voiture uniquement

``Étape 4`` — IA embarquée : Polymorphisme
Créer une classe Animal avec méthode faireDuBruit()
Créer Chien(Animal) et Chat(Animal) qui redéfinissent faireDuBruit
Stocker des animaux dans une liste et appeler faireDuBruit() pour chacun
📦 Objectifs pédagogiques
Maîtriser la création de classes et d’objets
Comprendre l’encapsulation (attributs privés, getters/setters)
Implémenter de l’héritage entre classes
Utiliser le polymorphisme via des méthodes redéfinies

🎓 ``Modalités pédagogiques``
Travail En binôme, selon les consignes du formateur
Langage : JavaScript
Environnement : Node.js recommandé
Durée indicative : ** 2 journées**
Modalités d’évaluation
Revue de code par le formateur (qualité, propreté, architecture)
📂 Livrables attendus
Un dépôt GitHub bien structuré, contenant :

Les fichiers JS séparés (vehicule.js, voiture.js, etc.)
Un fichier principal index.js de démonstration
Un fichier README.md expliquant la structure, les classes et la logique
✅ Critères de performance

🔹 ``Niveau Essentiel``

* ✅ La classe Voiture est correctement définie avec ses 4 attributs
* ✅ La méthode afficherDetails() affiche toutes les infos d’un objet
* ✅ Le fichier principal (index.js) permet de créer une instance et d’afficher ses détails
🔸 Niveau Attendu
* ✅ Les attributs sont privés et manipulés via des getters/setters
* ✅ La classe Vehicule existe et Voiture hérite correctement d’elle
* ✅ Le polymorphisme est correctement mis en œuvre avec Animal, Chien, Chat
* ✅ Une collection d’animaux est parcourue et faireDuBruit() est appelé sur chacun
* ✅ Code clair, indenté, commenté, bien structuré
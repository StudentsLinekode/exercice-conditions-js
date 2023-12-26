// Exercice 1
// Déclarez deux variables numériques. Utilisez une instruction conditionnelle
// pour afficher dans la console "Plus grand" si le premier nombre est supérieur au deuxième,
// et "Plus petit ou égal" sinon.

let premierNombre = parseInt(prompt("Entrez le premier nombre :"));
let deuxiemeNombre = parseInt(prompt("Entrez le deuxième nombre :"));

if (premierNombre > deuxiemeNombre) {
    console.log("Plus grand");
} else {
    console.log("Plus petit ou égal");
}

/* ---------------------------------------------------------------------- */

// Exercice 2
// Déclarez deux variables de chaîne de caractères représentant des prénoms.
// Utilisez une instruction conditionnelle pour afficher dans la console
// "Les prénoms sont identiques" si les prénoms sont égaux, et "Les prénoms sont différents" sinon.

let prenom1 = prompt("Entrez le premier prénom :");
let prenom2 = prompt("Entrez le deuxième prénom :");

if (prenom1 === prenom2) {
    console.log("Les prénoms sont identiques");
} else {
    console.log("Les prénoms sont différents");
}

/* ---------------------------------------------------------------------- */

// Exercice 3
// Déclarez une variable numérique représentant un âge.
// Utilisez une instruction conditionnelle (if-else) pour afficher dans la console
// "Majeur" si l'âge est supérieur ou égal à 18, et "Mineur" sinon.

let age = parseInt(prompt("Entrez l'âge :"));

if (age >= 18) {
    console.log("Majeur");
} else {
    console.log("Mineur");
}

/* ---------------------------------------------------------------------- */

// Exercice 4
// Déclarez deux variables numériques représentant des notes.
// Utilisez des conditions imbriquées pour afficher dans la console
// "Très bien" si la note est supérieure ou égale à 18, "Bien" si elle est entre 14 et 17,
// "Moyen" si elle est entre 10 et 13, et "Insuffisant" sinon.

let note = parseInt(prompt("Entrez la note :"));

if (note >= 18) {
    console.log("Très bien");
} else if (note >= 14) {
    console.log("Bien");
} else if (note >= 10) {
    console.log("Moyen");
} else {
    console.log("Insuffisant");
}

/* ---------------------------------------------------------------------- */

// Exercice 5
// Déclarez une variable numérique représentant la température en Celsius.
// Utilisez une série de conditions pour afficher dans la console
// "Très chaud" si la température est supérieure à 35, "Chaud" si elle est entre 25 et 35,
// "Agréable" si elle est entre 15 et 24, et "Froid" si elle est inférieure à 15.

let temperature = parseInt(prompt("Entrez la température en Celsius :"));

if (temperature > 35) {
    console.log("Très chaud");
} else if (temperature >= 25) {
    console.log("Chaud");
} else if (temperature >= 15) {
    console.log("Agréable");
} else {
    console.log("Froid");
}

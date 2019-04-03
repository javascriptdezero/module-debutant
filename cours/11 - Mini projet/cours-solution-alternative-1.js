/* Mini projet : valider un rendez-vous */
// Retrouvez chaque version du projet dans cours-1.js, cours-2.js etc.

// Solution alternative 1 : utiliser le nombre total de minutes
// pour comparer les horaires

// Début du RDV : 15h40
let debutRdvHeures = 15;
let debutRdvMinutes = 40;

// Fin de journée : 16h30
let finJourneeHeures = 16;
let finJourneeMinutes = 30;

// Durée du RDV : 25 minutes
let duree = 25;

// ETAPE 1 : Calcul de la fin du RDV
let finRdvHeures = debutRdvHeures;
let finRdvMinutes = debutRdvMinutes + duree;

// ETAPE 1.1 : Gestion du cas particulier où les minutes sont >= 60
if (finRdvMinutes >= 60) {
  finRdvHeures = finRdvHeures + 1;
  finRdvMinutes = finRdvMinutes - 60;
}

// ETAPE 1.2 Calcul des minutes totales pour comparaison
let finRdvTotalMinutes = finRdvHeures * 60 + finRdvMinutes;
let finJourneeTotalMinutes = finJourneeHeures * 60 + finJourneeMinutes;

// ETAPE 2 : Est-ce que la fin du RDV est avant la fin de la journée ?
if (finRdvTotalMinutes < finJourneeTotalMinutes) {
  console.log("RDV OK");
} else {
  console.log("RDV impossible");
}

// ETAPE 3 : Affichage de l'heure de fin du RDV au format HHhMM
if (finRdvMinutes < 10) {
  console.log("Le RDV se terminera à " + finRdvHeures + "h0" + finRdvMinutes);
} else {
  console.log("Le RDV se terminera à " + finRdvHeures + "h" + finRdvMinutes);
}
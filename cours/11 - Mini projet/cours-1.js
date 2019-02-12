/* Mini projet : valider un rendez-vous */
// Retrouvez chaque version du projet dans cours-1.js, cours-2.js etc.

// Version 1 : pour une durée de RDV de 15 minutes

// Début du RDV : 15h40
let debutRdvHeures = 15;
let debutRdvMinutes = 40;

// Fin de journée : 16h30
let finJourneeHeures = 16;
let finJourneeMinutes = 30;

// Durée du RDV : 15 minutes
let duree = 15;

// Calcul de la fin du RDV
let finRdvHeures = debutRdvHeures;
let finRdvMinutes = debutRdvMinutes + duree;

// Est-ce que la fin du RDV est avant la fin de la journée ?
if (finRdvHeures < finJourneeHeures) {
  console.log("RDV OK");
} else {
  console.log("RDV impossible");
}

console.log("Le RDV se terminera à " + finRdvHeures + "h" + finRdvMinutes);

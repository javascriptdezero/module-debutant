
/* Mini projet : valider un rendez-vous */

// Exemple 3 : pour une durée de RDV de 90 minutes

// Début du RDV : 15h40

// Fin de journée : 16h30

function validerRdv(debutRdvHeures, debutRdvMinutes, finJourneeHeures, finJourneeMinutes, duree) {
  // ETAPE 1 : Calcul de la fin du RDV
  let finRdvHeures = debutRdvHeures;
  let finRdvMinutes = debutRdvMinutes + duree;

  // ETAPE 1.1 : Gestion du cas particulier où les minutes sont >= 60
  while (finRdvMinutes >= 60) {
    finRdvHeures = finRdvHeures + 1;
    finRdvMinutes = finRdvMinutes - 60;
  }

  // ETAPE 2 : Est-ce que la fin du RDV est avant la fin de la journée ?
  let rdvOk = (finRdvHeures < finJourneeHeures
    || (finRdvHeures === finJourneeHeures && finRdvMinutes < finJourneeMinutes));

  // ETAPE 3 : Affichage de l'heure de fin du RDV
  if (finRdvMinutes < 10) {
    if (rdvOk) {
      console.log(duree + " min, RDV OK, Le RDV se terminera à " + finRdvHeures + "h0" + finRdvMinutes);
    } else {
      console.log(duree + " min, RDV Impossible, Le RDV se terminera à " + finRdvHeures + "h0" + finRdvMinutes);
    }
  } else {
    if (rdvOk) {
      console.log(duree + " min, RDV OK, Le RDV se terminera à " + finRdvHeures + "h" + finRdvMinutes);
    } else {
      console.log(duree + " min, RDV Impossible, Le RDV se terminera à " + finRdvHeures + "h" + finRdvMinutes);
    }
  }
}

// calcul rdv début de rdv 14h30, fin de journee 18h, duree 40
validerRdv(14, 30, 18, 00, 40);

// calcul rdv début de rdv 16h30, fin de journee 20h, duree 400
validerRdv(16, 30, 20, 00, 400);

for (let duree = 1; duree <= 400; duree = duree + 1) {
  validerRdv(16, 30, 20, 00, duree);
}


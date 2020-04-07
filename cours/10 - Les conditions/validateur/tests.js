/*
 * N'hésitez pas à jeter un oeil 👁 sur ce code et à me prévenir
 * si vous rencontrez un bogue !
 *
 * Vous pouvez me joindre par email sur jeremy@javascriptdezero.com.
 *
 * Merci 👍
 */

/* globals enonces,initialiserEnonces,historiqueConsole,fonctionConsoleLog,formaterPourLeHtml */
/* globals window,limiteAge,limitePoids,limiteAgeEnfant,limitePoidsEnfant */

const reponsesEnonces = [];

function ajouterReponse(reponse, idExercice, ageDuClient, poidsDuClient) {
  if (arguments.length === 4) {
    reponsesEnonces.push({
      idExercice,
      reponse,
      ageDuClient,
      poidsDuClient,
    });
    // Teste l'exercice en appelant la fonction exerciceN() avec les arguments
    window[`exercice${idExercice}`](ageDuClient, poidsDuClient);
  } else {
    reponsesEnonces.push({
      idExercice,
      reponse,
    });
    // Teste l'exercice en appelant la fonction exerciceN()
    window[`exercice${idExercice}`]();
  }
}

// Adultes
const ageInferieur = limiteAge - 1;
const ageSuperieur = limiteAge + 24;
const poidsInferieur = limitePoids - 60;
const poidsSuperieur = limitePoids + 10;
// Enfants
const ageInferieurEnfant = limiteAgeEnfant - 3;
const ageSuperieurEnfant = limiteAgeEnfant + 3;
const poidsInferieurEnfant = limitePoidsEnfant - 1;
const poidsSuperieurEnfant = limitePoidsEnfant + 20;

// Exercice 0
ajouterReponse('Vous ne pouvez pas monter dans ce manège', 0, ageInferieur, poidsInferieur);
ajouterReponse('Vous ne pouvez pas monter dans ce manège', 0, ageInferieur, limitePoids);
ajouterReponse('Vous ne pouvez pas monter dans ce manège', 0, ageInferieur, poidsSuperieur);
ajouterReponse('Vous pouvez monter dans ce manège', 0, limiteAge, poidsInferieur);
ajouterReponse('Vous ne pouvez pas monter dans ce manège', 0, limiteAge, limitePoids);
ajouterReponse('Vous ne pouvez pas monter dans ce manège', 0, limiteAge, poidsSuperieur);
ajouterReponse('Vous pouvez monter dans ce manège', 0, ageSuperieur, poidsInferieur);
ajouterReponse('Vous ne pouvez pas monter dans ce manège', 0, ageSuperieur, limitePoids);
ajouterReponse('Vous ne pouvez pas monter dans ce manège', 0, ageSuperieur, poidsSuperieur);
// Exercice 1
ajouterReponse('Bienvenue dans ce nouveau manège pour les enfants !', 1, ageInferieurEnfant, poidsInferieurEnfant);
ajouterReponse('Bienvenue dans ce nouveau manège pour les enfants !', 1, ageInferieurEnfant, limitePoidsEnfant);
ajouterReponse('Bienvenue dans ce nouveau manège pour les enfants !', 1, ageInferieurEnfant, poidsSuperieurEnfant);
ajouterReponse('Bienvenue dans ce nouveau manège pour les enfants !', 1, limiteAgeEnfant, poidsInferieurEnfant);
ajouterReponse('Bienvenue dans ce nouveau manège pour les enfants !', 1, limiteAgeEnfant, limitePoidsEnfant);
ajouterReponse('Bienvenue dans ce nouveau manège pour les enfants !', 1, limiteAgeEnfant, poidsSuperieurEnfant);
ajouterReponse('Bienvenue dans ce nouveau manège pour les enfants !', 1, ageSuperieurEnfant, poidsInferieurEnfant);
ajouterReponse('Désolé mais tu es trop grand pour monter dans ce manège.', 1, ageSuperieurEnfant, limitePoidsEnfant);
ajouterReponse('Désolé mais tu es trop grand pour monter dans ce manège.', 1, ageSuperieurEnfant, poidsSuperieurEnfant);
// Exercice 2
ajouterReponse('Vous ne pouvez pas monter : ce manège est réservé aux adultes.', 2, ageInferieur, poidsInferieur);
ajouterReponse('Vous devriez vite arrêter de manger des frites !', 2, ageInferieur, limitePoids);
ajouterReponse('Vous devriez vite arrêter de manger des frites !', 2, ageInferieur, poidsSuperieur);
ajouterReponse('Bienvenue dans le manège !', 2, limiteAge, poidsInferieur);
ajouterReponse('Vous ne pouvez pas monter : les sièges ne supporteraient pas votre poids.', 2, limiteAge, limitePoids);
ajouterReponse('Vous ne pouvez pas monter : les sièges ne supporteraient pas votre poids.', 2, limiteAge, poidsSuperieur);
ajouterReponse('Bienvenue dans le manège !', 2, ageSuperieur, poidsInferieur);
ajouterReponse('Vous ne pouvez pas monter : les sièges ne supporteraient pas votre poids.', 2, ageSuperieur, limitePoids);
ajouterReponse('Vous ne pouvez pas monter : les sièges ne supporteraient pas votre poids.', 2, ageSuperieur, poidsSuperieur);
// Chassez le bogue 0
ajouterReponse('La variable zero vaut bien zéro', 3);
// Chassez le bogue 1
ajouterReponse('La réponse est 42', 4);
// Chassez le bogue 2
ajouterReponse("Seule cette ligne devrait s'afficher", 5);


// On réutilise la fonction console.log de base sans le proxy (pour déboguer)
/* eslint-disable-next-line no-console */
console.log = fonctionConsoleLog;

switch (historiqueConsole.length) {
  case 0:
    initialiserEnonces();
    break;
  default: {
    let valeurConsole = historiqueConsole.shift();
    let reponseAttendue = reponsesEnonces.shift();

    while (valeurConsole !== undefined && reponseAttendue !== undefined) {
      // Si on est dans un exercice simple
      if (reponseAttendue.ageDuClient === undefined) {
        if (valeurConsole === reponseAttendue.reponse) {
          enonces.definirSucces(enonces.liste[reponseAttendue.idExercice], reponseAttendue.reponse);
        } else {
          const valeurRecue = formaterPourLeHtml(valeurConsole);
          const reponseComplete = { valeurRecue, valeurAttendue: reponseAttendue.reponse };
          enonces.definirEchec(enonces.liste[reponseAttendue.idExercice], reponseComplete);
          break;
        }
      } else {
        if (valeurConsole === reponseAttendue.reponse) {
          // On est dans un exercice complexe avec une fonction pour tester
          enonces.definirSucces(enonces.liste[reponseAttendue.idExercice], 'Tous les tests ont été réussis !');
        } else {
          const valeurRecue = `${formaterPourLeHtml(valeurConsole)}<br>(pour un âge de <code>${reponseAttendue.ageDuClient}</code> ans et un poids de <code>${reponseAttendue.poidsDuClient}</code> kg)`;
          const reponseComplete = { valeurRecue, valeurAttendue: reponseAttendue.reponse };
          enonces.definirEchec(enonces.liste[reponseAttendue.idExercice], reponseComplete);
          break;
        }
      }

      valeurConsole = historiqueConsole.shift();
      reponseAttendue = reponsesEnonces.shift();
    }
    break;
  }
}

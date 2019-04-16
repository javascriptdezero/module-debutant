/*
 * N'hésitez pas à jeter un oeil 👁 sur ce code et à me prévenir
 * si vous rencontrez un bogue !
 *
 * Vous pouvez me joindre par email sur jeremy@javascriptdezero.com
 * ou via Slack : https://javascriptdezero.slack.com
 *
 * Merci 👍
 */

/* globals enonces,initialiserEnonces,historiqueConsole,fonctionConsoleLog,formaterPourLeHtml */
/* globals window,limiteAge,limitePoids,limiteAgeEnfant,limitePoidsEnfant */

const reponsesEnonces = [];

function ajouterReponse(reponse, idExercice, donnees) {
  let donneesSimples = donnees;
  if (typeof donnees !== 'number') {
    donneesSimples = donnees.poids ? [...donnees.poids] : [...donnees];
  }
  // Teste l'exercice en appelant la fonction exerciceN() avec les arguments
  let tailleHistorique = historiqueConsole.length;
  window[`exercice${idExercice}`](donnees);
  let nombreAppelsConsoleLog = historiqueConsole.length - tailleHistorique;
  reponsesEnonces.push({
    idExercice,
    reponse,
    donneesSimples,
    nombreAppelsConsoleLog,
  });
}

// Gestion du poids des prochains clients
class Client {
  constructor(poids) {
    this.poids = [...poids];
  }

  mesurerPoids() {
    if (this.poids.length === 0) {
      return 0;
    }
    return this.poids.shift();
  }
}

// Exercice 0
ajouterReponse(['42 kg'], 0, new Client([42]));

// Exercice 1
let poidsExercice1 = [42, 70];
ajouterReponse([...poidsExercice1], 1, new Client(poidsExercice1));

// Exercice 2
let poidsExercice2 = [42, 70, 54, 89];
ajouterReponse([...poidsExercice2], 2, new Client(poidsExercice2));
poidsExercice2 = [67, 99, 21];
ajouterReponse([...poidsExercice2], 2, new Client(poidsExercice2));

// Exercice 3
let nombreDeTours = 3;
ajouterReponse("00h36", 3, nombreDeTours);
nombreDeTours = 0;
ajouterReponse("00h00", 3, nombreDeTours);
nombreDeTours = 5;
ajouterReponse("01h00", 3, nombreDeTours);
nombreDeTours = 10;
ajouterReponse("02h00", 3, nombreDeTours);
nombreDeTours = 1;
ajouterReponse("00h12", 3, nombreDeTours);
nombreDeTours = 23;
ajouterReponse("04h36", 3, nombreDeTours);

// Exercice 4
for (longueurGuirlande = 1; longueurGuirlande < 7; longueurGuirlande++) {
  ajouterReponse('*'.repeat(longueurGuirlande), 4, longueurGuirlande);
}

// Exercice 5
let guirlandeExercice5 = "";
for (let longueurGuirlande = 1; longueurGuirlande < 30; longueurGuirlande++) {
  guirlandeExercice5 += longueurGuirlande % 2 ? "*" : "o";
  ajouterReponse(guirlandeExercice5, 5, longueurGuirlande);
}

// Chassez le bogue ! 0
let largeurTriangle = 1;
ajouterReponse(
['*'], 6, largeurTriangle);
largeurTriangle = 3;
ajouterReponse(
['***',
'*'], 6, largeurTriangle);
largeurTriangle = 5;
ajouterReponse(
['*****',
'***',
'*'], 6, largeurTriangle);
largeurTriangle = 7;
ajouterReponse(
['*******',
'*****',
'***',
'*'], 6, largeurTriangle);

// Chassez le bogue ! 1
largeurTriangle = 1;
ajouterReponse(
['*'], 7, largeurTriangle);
largeurTriangle = 3;
ajouterReponse(
['*',
'***',
'*'], 7, largeurTriangle);
largeurTriangle = 5;
ajouterReponse(
['*',
'***',
'*****',
'***',
'*'], 7, largeurTriangle);
largeurTriangle = 7;
ajouterReponse(
['*',
'***',
'*****',
'*******',
'*****',
'***',
'*'], 7, largeurTriangle);

// Exercice 8
let poidsExerciceBonus = [80, 92, 102, 76, 120, 88, 95, 45, 98, 107, 96];
ajouterReponse("3 tours", 8, new Client(poidsExerciceBonus));
// Cas particulier quand la somme atteint pile 500 kg 2 fois de suite
poidsExerciceBonus = [80, 92, 102, 76, 120, 30, 88, 95, 45, 98, 107, 67];
ajouterReponse("2 tours", 8, new Client(poidsExerciceBonus));
// Cas particulier quand la somme atteint 500 kg puis 501 kg
poidsExerciceBonus = [80, 92, 102, 76, 120, 30, 88, 95, 45, 98, 107, 68];
ajouterReponse("3 tours", 8, new Client(poidsExerciceBonus));
// Cas particulier quand la somme fait moins de 500 kg
poidsExerciceBonus = [80, 92, 102, 76];
ajouterReponse("1 tour", 8, new Client(poidsExerciceBonus));
// Cas particulier quand il n'y a pas de clients
poidsExerciceBonus = [];
ajouterReponse("0 tour", 8, new Client(poidsExerciceBonus));

function nomDonneesExercice(idExercice) {
  switch(idExercice) {
    case 0: return "le poids du client";
    case 3: return "le nombre de tours";
    case 4: // idem case 5
    case 5: return "la longueur de la guirlande";
    case 6: // idem case 7
    case 7: return "la largeur de triangle";
    case 1: // idem case 8
    case 2: // idem case 8
    case 8: return "la file d'attente suivante";
    default: return undefined;
  }
}

// On réutilise la fonction console.log de base sans le proxy (pour déboguer)
/* eslint-disable-next-line no-console */
console.log = fonctionConsoleLog;

switch (historiqueConsole.length) {
  case 0:
    initialiserEnonces();
    break;
  default: {
    let reponseAttendue = reponsesEnonces.shift();
    let valeurConsole = historiqueConsole.shift();

    while (valeurConsole !== undefined && reponseAttendue !== undefined) {
      // Si on est dans un exercice complexe à ligne de sortie multiples
      if (Array.isArray(reponseAttendue.reponse)) {
        // Il faut récupérer toutes les lignes de la console pour cet exercice
        let nombreDeLignesManquantes = reponseAttendue.nombreAppelsConsoleLog - 1;
        valeurConsole += '\n';
        while (nombreDeLignesManquantes--) {
          valeurConsole += historiqueConsole.shift() + '\n';
        }
        let reponseMultiLigne = reponseAttendue.reponse.join('\n') + "\n";
        let exerciceReussi = valeurConsole === reponseMultiLigne;

        reponseMultiLigne = formaterPourLeHtml(reponseMultiLigne);

        if (exerciceReussi) {
          enonces.definirSucces(enonces.liste[reponseAttendue.idExercice], reponseMultiLigne);
        } else {
          const valeurRecue = formaterPourLeHtml(valeurConsole);
          let nomDonnees = nomDonneesExercice(reponseAttendue.idExercice);
          if (nomDonnees) {
            reponseMultiLigne = reponseMultiLigne + `<br>...pour ${nomDonnees} : <code>${Array.isArray(reponseAttendue.donneesSimples) ? reponseAttendue.donneesSimples.join(', ') : reponseAttendue.donneesSimples}</code>`;
          }
          const reponseComplete = { valeurRecue, valeurAttendue: reponseMultiLigne };
          enonces.definirEchec(enonces.liste[reponseAttendue.idExercice], reponseComplete);
          break;
        }
      } else {
        if (valeurConsole === reponseAttendue.reponse) {
          // On est dans un exercice simple
          enonces.definirSucces(enonces.liste[reponseAttendue.idExercice], reponseAttendue.reponse);
        } else {
          const valeurRecue = `${formaterPourLeHtml(valeurConsole)}`;

          // Construction d'une réponse utile pour l'étudiant avec la valeur d'entrée
          let nomDonnees = nomDonneesExercice(reponseAttendue.idExercice);
          let reponseUtile = reponseAttendue.reponse + `<br><br>...pour ${nomDonnees} : <code>${Array.isArray(reponseAttendue.donneesSimples) ? reponseAttendue.donneesSimples.join(', ') : reponseAttendue.donneesSimples}</code>`;
          
          const reponseComplete = { valeurRecue, valeurAttendue: reponseUtile };
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

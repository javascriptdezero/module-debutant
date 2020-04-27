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

function ajouterReponse(reponse, idExercice, nomDonnees, donnees) {
  let donneesSimples;
  if (typeof donnees === 'number') {
    donneesSimples = [donnees];
  } else {
    donneesSimples = donnees.poids ? [...donnees.poids] : [...donnees];
  }
  
  let tailleHistorique = historiqueConsole.length;
  // Teste l'exercice en appelant la fonction exerciceN() avec les arguments
  window[`exercice${idExercice}`](donnees);
  let nombreAppelsConsoleLog = historiqueConsole.length - tailleHistorique;
  
  reponsesEnonces.push({
    idExercice,
    reponse,
    nomDonnees,
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
let nomDonneesExercice0 = "le poids du client";
ajouterReponse(['42 kg'], 0, nomDonneesExercice0, new Client([42]));
ajouterReponse(['78 kg'], 0, nomDonneesExercice0, new Client([78]));

// Exercice 1
let poidsExercice1 = [42, 70];
let nomDonneesExercice1 = "la file d'attente suivante";
ajouterReponse([...poidsExercice1], 1, nomDonneesExercice1, new Client(poidsExercice1));

// Exercice 2
let poidsExercice2 = [42, 70, 54, 89];
ajouterReponse([...poidsExercice2], 2, nomDonneesExercice1, new Client(poidsExercice2));
poidsExercice2 = [67, 99, 21];
ajouterReponse([...poidsExercice2], 2, nomDonneesExercice1, new Client(poidsExercice2));

// Exercice 3
let nombreDeTours = 3;
let nomDonneesExercice3 = "le nombre de tours";
ajouterReponse(["00h36"], 3, nomDonneesExercice3, nombreDeTours);
nombreDeTours = 0;
ajouterReponse(["00h00"], 3, nomDonneesExercice3, nombreDeTours);
nombreDeTours = 5;
ajouterReponse(["01h00"], 3, nomDonneesExercice3, nombreDeTours);
nombreDeTours = 10;
ajouterReponse(["02h00"], 3, nomDonneesExercice3, nombreDeTours);
nombreDeTours = 1;
ajouterReponse(["00h12"], 3, nomDonneesExercice3, nombreDeTours);
nombreDeTours = 23;
ajouterReponse(["04h36"], 3, nomDonneesExercice3, nombreDeTours);

// Exercice 4
let nomDonneesExercice4 = "la longueur de guirlande";
for (longueurGuirlande = 1; longueurGuirlande < 7; longueurGuirlande++) {
  ajouterReponse(['*'.repeat(longueurGuirlande)], 4, nomDonneesExercice4, longueurGuirlande);
}

// Exercice 5
let guirlandeExercice5 = "";
for (let longueurGuirlande = 1; longueurGuirlande < 30; longueurGuirlande++) {
  guirlandeExercice5 += longueurGuirlande % 2 ? "*" : "o";
  ajouterReponse([guirlandeExercice5], 5, nomDonneesExercice4, longueurGuirlande);
}

// Chassez le bogue ! 0
let nomDonneesExercice6 = "la largeur de triangle";
let largeurTriangle = 1;
ajouterReponse(
['*'], 6, nomDonneesExercice6, largeurTriangle);
largeurTriangle = 3;
ajouterReponse(
['***',
'*'], 6, nomDonneesExercice6, largeurTriangle);
largeurTriangle = 5;
ajouterReponse(
['*****',
'***',
'*'], 6, nomDonneesExercice6, largeurTriangle);
largeurTriangle = 7;
ajouterReponse(
['*******',
'*****',
'***',
'*'], 6, nomDonneesExercice6, largeurTriangle);

// Chassez le bogue ! 1
largeurTriangle = 1;
ajouterReponse(
['*'], 7, nomDonneesExercice6, largeurTriangle);
largeurTriangle = 3;
ajouterReponse(
['*',
'***',
'*'], 7, nomDonneesExercice6, largeurTriangle);
largeurTriangle = 5;
ajouterReponse(
['*',
'***',
'*****',
'***',
'*'], 7, nomDonneesExercice6, largeurTriangle);
largeurTriangle = 7;
ajouterReponse(
['*',
'***',
'*****',
'*******',
'*****',
'***',
'*'], 7, nomDonneesExercice6, largeurTriangle);

// Exercice 8
let poidsExerciceBonus = [80, 92, 102, 76, 120, 88, 95, 45, 98, 107, 96];
ajouterReponse(["3 tours"], 8, nomDonneesExercice1, new Client(poidsExerciceBonus));
// Cas particulier quand la somme atteint pile 500 kg 2 fois de suite
poidsExerciceBonus = [80, 92, 102, 76, 120, 30, 88, 95, 45, 98, 107, 67];
ajouterReponse(["2 tours"], 8, nomDonneesExercice1, new Client(poidsExerciceBonus));
// Cas particulier quand la somme atteint 500 kg puis 501 kg
poidsExerciceBonus = [80, 92, 102, 76, 120, 30, 88, 95, 45, 98, 107, 68];
ajouterReponse(["3 tours"], 8, nomDonneesExercice1, new Client(poidsExerciceBonus));
// Cas particulier quand la somme fait moins de 500 kg
poidsExerciceBonus = [80, 92, 102, 76];
ajouterReponse(["1 tour"], 8, nomDonneesExercice1, new Client(poidsExerciceBonus));
// Cas particulier quand il n'y a pas de clients
poidsExerciceBonus = [];
ajouterReponse(["0 tour"], 8, nomDonneesExercice1, new Client(poidsExerciceBonus));

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
      // Il faut récupérer toutes les lignes de la console pour cet exercice
      let nombreDeLignesManquantes = reponseAttendue.nombreAppelsConsoleLog - 1;
      valeurConsole += '\n';
      while (nombreDeLignesManquantes > 0) {
        valeurConsole += historiqueConsole.shift() + '\n';
        nombreDeLignesManquantes--;
      }
      let reponseMultiLigne = reponseAttendue.reponse.join('\n') + "\n";
      let exerciceReussi = valeurConsole === reponseMultiLigne;

      reponseMultiLigne = formaterPourLeHtml(reponseMultiLigne);

      if (exerciceReussi) {
        enonces.definirSucces(enonces.liste[reponseAttendue.idExercice], reponseMultiLigne);
      } else {
        const valeurRecue = formaterPourLeHtml(valeurConsole);
        // Créons un message d'erreur utile pour l'étudiant
        reponseMultiLigne = reponseMultiLigne + `<br>...pour ${reponseAttendue.nomDonnees} : <code>${reponseAttendue.donneesSimples.join(', ')}</code>`;
        const reponseComplete = { valeurRecue, valeurAttendue: reponseMultiLigne };
        enonces.definirEchec(enonces.liste[reponseAttendue.idExercice], reponseComplete);
        break;
      }

      valeurConsole = historiqueConsole.shift();
      reponseAttendue = reponsesEnonces.shift();
    }
    break;
  }
}

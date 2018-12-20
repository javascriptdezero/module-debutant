/*
 * N'hésitez pas à jeter un oeil 👁 sur ce code et à me prévenir
 * si vous rencontrez un bogue !
 *
 * Vous pouvez me joindre par email sur jeremy@javascriptdezero.com
 * ou via Slack : https://javascriptdezero.slack.com
 *
 * Merci 👍
 */

// On récupère les blocs d'énoncés dans un tableau
reponsesEnonces.forEach((reponse, i) => {
  enonces.liste.push(document.getElementById(`enonce-${i}`));
});

// On stockera chaque appel à console.log dans ce tableau
const historiqueConsole = [];

// On initialise le statut des énoncés
function initialiserEnonces() {
  reponsesEnonces.forEach((reponse, i) => {
    enonces.definirAttente(enonces.liste[i]);
  });
}
initialiserEnonces();

/* eslint-disable no-console */
// On intercepte les appels vers console.log()
const proxyDeConsole = new Proxy(console.log, {
  apply(cible, leThis, listeArgs) {
    historiqueConsole.push(listeArgs.join(''));
  },
});

// On stocke l'ancienne méthode log() pour la réutiliser plus tard pour déboguer
/* eslint-disable-next-line no-unused-vars */
const fonctionConsoleLog = console.log;
console.log = proxyDeConsole;

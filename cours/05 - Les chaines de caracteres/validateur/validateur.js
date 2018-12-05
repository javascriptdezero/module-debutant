/*
 * N'hésitez pas à jeter un oeil 👁 sur ce code et à me prévenir
 * si vous rencontrez un bogue !
 *
 * Vous pouvez me joindre par email sur jeremy@javascriptdezero.com
 * ou via Slack : https://javascriptdezero.slack.com
 *
 * Merci 👍
 */

/* globals enonces,initialiserEnonces,reponsesEnonces,historiqueConsole,fonctionConsoleLog */

// On réutilise la fonction console.log de base sans le proxy (pour déboguer)
/* eslint-disable-next-line no-console */
console.log = fonctionConsoleLog;

switch (historiqueConsole.length) {
  case 0:
    initialiserEnonces();
    break;
  default:
    reponsesEnonces.forEach((reponse, i) => {
      if (reponsesEnonces.includes(historiqueConsole[i])) {
        enonces.definirSucces(enonces.liste[reponsesEnonces.indexOf(historiqueConsole[i])]);
      } else if (historiqueConsole[i] === undefined) {
        enonces.definirAttente(enonces.liste[i]);
      } else {
        // Conversion des caractères spéciaux en HTML pour un affichage correct dans la page Web
        const reponseFormatHTML = reponse.replace('\n', '<br/>');
        enonces.definirEchec(enonces.liste[i], {
          valeurRecue: historiqueConsole[i],
          valeurAttendue: reponseFormatHTML,
        });
      }
    });
    break;
}

/*
 * N'hésitez pas à jeter un oeil 👁 sur ce code et à me prévenir
 * si vous rencontrez un bogue !
 *
 * Vous pouvez me joindre par email sur jeremy@javascriptdezero.com.
 *
 * Merci 👍
 */

/* globals enonces,initialiserEnonces,reponsesEnonces,historiqueConsole,fonctionConsoleLog, formaterPourLeHtml */

// On réutilise la fonction console.log de base sans le proxy (pour déboguer)
/* eslint-disable-next-line no-console */
console.log = fonctionConsoleLog;

switch (historiqueConsole.length) {
  case 0:
    initialiserEnonces();
    break;
  default:
    reponsesEnonces.forEach((reponse, i) => {
      const estUneReponseBooleenne = typeof reponse === 'boolean';
      if (reponsesEnonces.includes(historiqueConsole[i])
      && (reponsesEnonces.indexOf(historiqueConsole[i]) === i
          || (estUneReponseBooleenne && reponse === historiqueConsole[i]))) {
        if (estUneReponseBooleenne) {
          enonces.definirSucces(enonces.liste[i], reponse);
        } else {
          enonces.definirSucces(enonces.liste[reponsesEnonces.indexOf(historiqueConsole[i])], reponsesEnonces[i]);
        }
      } else if (historiqueConsole[i] === undefined) {
        enonces.definirAttente(enonces.liste[i]);
      } else {
        // Conversion des caractères spéciaux en HTML pour un affichage correct dans la page Web
        const reponseFormatHtml = formaterPourLeHtml(reponse);
        const valeurRecueFormatHtml = formaterPourLeHtml(historiqueConsole[i]);
        enonces.definirEchec(enonces.liste[i], {
          valeurRecue: valeurRecueFormatHtml,
          valeurAttendue: reponseFormatHtml,
        });
      }
    });
    break;
}

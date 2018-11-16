
/* globals enonces,initialiserEnonces,reponsesEnonces,historiqueConsole,fonctionConsoleLog */

// On réutilise la fonction console.log de base sans le proxy (pour déboguer)
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
        enonces.definirEchec(
          enonces.liste[i],
          {
            valeurRecue: historiqueConsole[i],
            valeurAttendue: reponsesEnonces[i],
          },
        );
      }
    });
    break;
}

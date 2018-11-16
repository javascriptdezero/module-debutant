
/* eslint-disable no-unused-vars */
const classesCSS = {
  enonce: 'enonce',
  message: 'message',
  succes: 'succes',
  echec: 'echec',
};

const enonces = {
  attente: 'En attente de code à tester... À vous de jouer !',
  succes: 'Félicitations ! Vous avez réussi !',
  echec: "Ce n'est pas la bonne réponse... Réssayez !",

  extraireMessage(enonce) {
    return enonce.getElementsByClassName(classesCSS.message)[0];
  },
  definirAttente(enonce) {
    enonce.classList.remove(classesCSS.echec);
    enonce.classList.remove(classesCSS.succes);
    enonce.classList.add(classesCSS.enonce);
    const message = this.extraireMessage(enonce);
    message.classList = classesCSS.message;
    message.innerHTML = this.attente;
  },
  definirSucces(enonce) {
    enonce.classList.add(classesCSS.succes);
    const message = this.extraireMessage(enonce);
    message.classList.remove(classesCSS.echec);
    message.classList.add(classesCSS.succes);
    message.innerHTML = this.succes;
  },
  definirEchec(enonce, valeurs) {
    enonce.classList.add(classesCSS.echec);
    const message = this.extraireMessage(enonce);
    message.classList.remove(classesCSS.succes);
    message.classList.add(classesCSS.echec);
    message.innerHTML = this.echec;
    if (valeurs) {
      const { valeurRecue, valeurAttendue } = valeurs;
      message.innerHTML += `<br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valeur reçue: ${valeurRecue || 'Aucune (undefined)'}<br>
      Valeur attendue: ${valeurAttendue}`;
    }
  },
  liste: [],
};

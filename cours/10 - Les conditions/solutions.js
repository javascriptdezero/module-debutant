/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
if (ageDuClient >= limiteAge && poidsDuClient < limitePoids) {
  console.log("Vous pouvez monter dans ce manège");
} else {
  console.log("Vous ne pouvez pas monter dans ce manège");
}

// Exercice 1
if (ageDuClient <= limiteAgeEnfant || poidsDuClient < limitePoidsEnfant) {
  console.log("Bienvenue dans ce nouveau manège pour les enfants !");
} else {
  console.log("Désolé mais tu es trop grand pour monter dans ce manège.");
}

// Exercice 2
if (ageDuClient >= limiteAge && poidsDuClient < limitePoids) {
  console.log("Bienvenue dans le manège !");
} else {
  if (ageDuClient < limiteAge && poidsDuClient >= limitePoids) {
    console.log("Vous devriez vite arrêter de manger des frites !");
  } else {
    if (ageDuClient < limiteAge) {
      console.log("Vous ne pouvez pas monter : ce manège est réservé aux adultes.");
    } else {
      console.log("Vous ne pouvez pas monter : les sièges ne supporteraient pas votre poids.");
    }
  } 
}

// Chassez le bogue ! 0
let zero = 0;
if (zero === 0) {
  console.log("La variable zero vaut bien zéro");
} else {
  console.log("Oops ! Il semble y avoir un bogue !");
}

// Chassez le bogue 1
let reponse = 42;
let condition = false;

if (condition) {
  condition = true;
  reponse = 1337;
}
console.log("La réponse est " + reponse);

// Chassez le bogue 2
let reponse = 1337;
let condition = false;

if (condition) {
  reponse = 42;
  console.log("La réponse est toujours " + reponse);
}
console.log("Seule cette ligne devrait s'afficher"); 
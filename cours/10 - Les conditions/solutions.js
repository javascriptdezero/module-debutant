/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
/*
 * L'accès est autorisé si les clients ont 18 ans *OU PLUS* (>=) *ET* (&&) s'ils
 * font strictement moins de 120 kg (<).
 * limiteAge vaut 18 et limitePoids vaut 120. Ces variables sont déclarées tout
 * en haut du fichier exercices.js. Je les utilise dans les solutions pour
 * faciliter la lecture et la compréhension des conditions.
 */
if (ageDuClient >= limiteAge && poidsDuClient < limitePoids) {
  console.log("Vous pouvez monter dans ce manège");
} else {
  console.log("Vous ne pouvez pas monter dans ce manège");
}

// Exercice 1
/*
 * L'enfant doit faire strictement *MOINS* de 50 kg (<) *OU* (||) avoir 12 ans
 * *OU MOINS* (<=).
 * limiteAgeEnfant vaut 12 et limitePoidsEnfant vaut 50. Ces variables sont 
 * déclarées tout en haut du fichier exercices.js.
 */
if (ageDuClient <= limiteAgeEnfant || poidsDuClient < limitePoidsEnfant) {
  console.log("Bienvenue dans ce nouveau manège pour les enfants !");
} else {
  console.log("Désolé mais tu es trop grand pour monter dans ce manège.");
}

// Exercice 2
/*
 * La condition d'accès au manège est identique à celle de l'exercice 0 :
 * (ageDuClient >= limiteAge && poidsDuClient < limitePoids).
 * La suite des explications est indiquée dans le code ci-dessous.
 * (NOTE : on aurait pu utiliser le "else if" dans cet exercice, mais on ne
 * l'a pas encore vu dans les leçons, c'est pour ça que je ne l'utilise pas
 * dans cette solution et que j'imbrique des if / else simples.)
 */
if (ageDuClient >= limiteAge && poidsDuClient < limitePoids) {
  console.log("Bienvenue dans le manège !");
} else {
  // Si on entre dans le else, ça veut dire que le client est trop jeune OU
  // qu'il est trop lourd OU les 2 à la fois : trop jeune et trop lourd !

  // S'il est trop jeune *ET* (&&) trop lourd, on affiche le message
  if (ageDuClient < limiteAge && poidsDuClient >= limitePoids) {
    console.log("Vous devriez vite arrêter de manger des frites !");
  } else {
    // Sinon il est trop jeune OU il est trop lourd

    // S'il est trop jeune, on affiche le message correspondant
    if (ageDuClient < limiteAge) {
      console.log("Vous ne pouvez pas monter : ce manège est réservé aux adultes.");
    } else {
      // Sinon c'est qu'il est trop lourd, on affiche le message correspondant
      console.log("Vous ne pouvez pas monter : les sièges ne supporteraient pas votre poids.");
    }
  }
}

// Chassez le bogue ! 0
/*
 * Le problème vient de la condition if (zero = 0), on utilise l'opérateur "="
 * d'affectation au lieu de l'opérateur de comparaison "===" !
 * if (zero = 0) sera interprété comme if (0), 0 sera converti en booléen (false)
 * soit if (false) et donc on n'entre pas dans le code qui dit que la variable 
 * vaut zéro !
 */
let zero = 0;
if (zero === 0) {
  console.log("La variable zero vaut bien zéro");
} else {
  console.log("Oops ! Il semble y avoir un bogue !");
}

// Chassez le bogue 1
/*
 * Le problème ici vient de la non utilisation des accolades pour entourer les
 * instructions du if (condition). Seule la première instruction condition = true;
 * ne sera PAS exécutée (puisque condition vaut false).
 * reponse = 1337; ne faisant pas partie des instructions de la condition
 * if (condition) elle s'exécutera tout le temps, c'est comme si elle était
 * située juste après le bloc d'instructions du if (condition).
 * Conclusion : mettez toujours vos accolades après un if.
 */
let reponse = 42;
let condition = false;

if (condition) {
  condition = true;
  reponse = 1337;
}
console.log("La réponse est " + reponse);

// Chassez le bogue 2
/*
 * Le problème ici est presque le même que précédemment. Sans accolades, seule
 * la 1ère instruction suivante du if (condition), c'est-à-dire reponse = 42;
 * n'est PAS executée. Donc le code affichait encore "La réponse est toujours 1337".
 */
let reponse = 1337;
let condition = false;

if (condition) {
  reponse = 42;
  console.log("La réponse est toujours " + reponse);
}
console.log("Seule cette ligne devrait s'afficher"); 
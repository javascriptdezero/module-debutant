/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
function afficherAdresseClient(nom, numeroRue, nomRue, codePostal, ville) {
  console.log(nom);
  console.log(numeroRue + " " + nomRue);
  console.log(codePostal + " " + ville);
}

// Exercice 1
function formaterNumeroClient(numero) {
  // On traite en tout premier le cas particulier
  if (numero >= 5000 && numero < 7000) {
    // On peut retourner tout de suite la valeur en utilisant le mot-clé return
    return "PR" + numero;
  } else {
    // Ici on utilise l'astuce de ne pas utiliser de "else" pour évaluer chaque
    // condition les unes à la suite des autres, ajoutant autant de "0" qu'il
    // faudra au préfixe pour le numero donné.
    let prefixe = "CL";
    if (numero < 1000) {
      prefixe = prefixe + "0";
    }
    if (numero < 100) {
      prefixe = prefixe + "0";
    }
    if (numero < 10) {
      prefixe = prefixe + "0";
    }
    return prefixe + numero;
  }
}

// Exercice 2
// Code de Tom
let adresseMagiciensDuCode = `MagiciensDuCode
42 avenue de l'accolade ouvrante
1337 POINT-VIRGULE`;
let numeroClient = 5842;
afficherTitre("Notre adresse");
console.log(adresseMagiciensDuCode);
console.log("");
// En utilisant les fonctions et variables déclarées précédemment on peut écrire...
afficherTitre("Destinataire");
afficherAdresseClient(nom, numeroRue, nomRue, codePostal, ville);
console.log("");
afficherTitre("Vos références");
console.log("N° de client : " + formaterNumeroClient(numeroClient));

// Exercice 3
/*
 * Il faut se souvenir de l'exercice sur les guirlandes. La difficulté est
 * qu'on ajoute un certain nombre d'espaces passé en paramètres avant les étoiles.
 * Mais fondamentalement, c'est la même chose sauf qu'au lieu d'ajouter un
 * nombre dynamique d'étoiles, ici c'est un nombre d'espaces.
 * En répétant 3 fois de suite une boucle pour les espaces avec l'ajout de
 * deux étoiles "**" on arrive au résultat souhaité.
 */
function afficherLigneLogo(esp1, esp2, esp3) {
  let ligne = "";
  for (let i = 0; i < esp1; i = i + 1) {
    ligne += " ";
  }
  ligne += "**";
  for (let i = 0; i < esp2; i = i + 1) {
    ligne += " ";
  }
  ligne += "**";
  for (let i = 0; i < esp3; i = i + 1) {
    ligne += " ";
  }
  ligne += "**";
  console.log(ligne);
}

// Chassez le bogue ! 0
/*
 * Le code est relativement parlant, mais des erreurs se sont glissées
 * dans le code au niveau de la logique avec le symbole !== "*" au lieu
 * de symbole === "*" et dans la boucle for(let i...) de
 * construirePlusieursEspaces et la boucle pour l'affichage du tronc.
 * Enfin, les console.log(construirePlusieursEspaces(X) + construireLigneAvecBoules(Y)); 
 * étaient parfois faux !
 */
function construireLigneAvecBoules(longueurLigne) {
  let ligne = "";
  let symbole = "*";
  for (let i = 0; i < longueurLigne; i = i + 1) {
    ligne = ligne + symbole;
    if (symbole === "*") {
      symbole = "o";
    } else {
      symbole = "*";
    }
  }
  return ligne;
}

function construirePlusieursEspaces(nombre) {
  let ligne = "";
  for (let i = 0; i < nombre; i = i + 1) {
    ligne = ligne + " ";
  }
  return ligne;
}

console.log(construirePlusieursEspaces(5) + construireLigneAvecBoules(1));
console.log(construirePlusieursEspaces(4) + construireLigneAvecBoules(3));
console.log(construirePlusieursEspaces(3) + construireLigneAvecBoules(5));
console.log(construirePlusieursEspaces(2) + construireLigneAvecBoules(7));
console.log(construirePlusieursEspaces(1) + construireLigneAvecBoules(9));
console.log(construirePlusieursEspaces(0) + construireLigneAvecBoules(11));

// Affichage du tronc
for (let i = 0; i < 3; i = i + 1) {
  console.log(construirePlusieursEspaces(4) + "***");
}

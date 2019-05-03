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
  if (numero >= 5000 && numero < 7000) {
    // On peut retourner tout de suite la valeur en utilisant le mot-clé return
    return "PR" + numero;
  } else {
    let prefixe = "42";
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

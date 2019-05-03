/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
function maPremiereFonction() {
  console.log("Ma première fonction");
}
// Il manquait simplement l'appel de la fonction pour l'exécuter !
maPremiereFonction();

// Exercice 1
let adresseMagiciensDuCode = `MagiciensDuCode
42 avenue de l'accolade ouvrante
1337 POINT-VIRGULE`;

// Voici la fonction afficherTitre qu'il fallait rédiger
function afficherTitre(titre) {
  console.log("===[ " + titre + " ]===");
}

afficherTitre("Notre adresse");
console.log(adresseMagiciensDuCode);

// Exercice 2
// Des solutions alternatives plus lisibles et compactes sont proposées après !
function afficherNumeroClient(numero) {
  if (numero < 10) {
    console.log("N° de client : 42000" + numero);
  } else {
    if (numero < 100) {
      console.log("N° de client : 4200" + numero);
    } else {
      if (numero < 1000) {
        console.log("N° de client : 420" + numero);
      } else {
        console.log("N° de client : 42" + numero);
      }
    }
  }
}

// Exercice 2 - Solution alternative 1
// Pour éviter la répétition du texte "N° de client :..."
function afficherNumeroClient(numero) {
  let prefixe = "42";
  if (numero < 10) {
    prefixe = prefixe + "000";
  } else {
    if (numero < 100) {
      prefixe = prefixe + "00";
    } else {
      if (numero < 1000) {
        prefixe = prefixe + "0";
      }
    }
  }
  console.log("N° de client : " + prefixe + numero);
}

// Exercice 2 - Solution alternative 2
// Pour éviter la répétition du texte "N° de client :..." et les "else"
function afficherNumeroClient(numero) {
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
  console.log("N° de client : " + prefixe + numero);
}

// Exercice 3
function afficherEntete(numeroClient) {
  afficherTitre("Notre adresse");
  console.log(adresseMagiciensDuCode);
  console.log("");
  afficherTitre("Vos références");
  afficherNumeroClient(numeroClient);
}
afficherEntete(1337);

// Chassez le bogue ! 0
function afficherPlusieursEtoiles(nombre) {
  let ligne = "";
  for (let position = 0; position < nombre; position = position + 1) {
    ligne = ligne + "*";
  }
  console.log(ligne);
}
function afficherTriangleEtoile(longueurMax) {
  for (let position = 1; position <= longueurMax; position = position + 2) {
    afficherPlusieursEtoiles(position);
  }
  for (let position = longueurMax - 2; position > 0; position = position - 2) {
    afficherPlusieursEtoiles(position);
  }
}
afficherTriangleEtoile(7);
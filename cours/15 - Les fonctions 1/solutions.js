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
/*
 * Il faut utiliser la concaténation et des conditions pour afficher les
 * numéros client sur 6 caractères.
 * Attention à l'ordre des conditions ! Il faut commencer par numero < 10 et pas
 * par numero < 1000 par exemple car un numero < 10 est également < 1000 et
 * donc on rentrerait toujours dans la condition numero < 1000 !
 * C'est pourquoi on teste dans l'ordre < 10, < 100, puis enfin < 1000.
 */
function afficherNumeroClient(numero) {
  if (numero < 10) {
    console.log("N° de client : CL000" + numero);
  } else {
    if (numero < 100) {
      console.log("N° de client : CL00" + numero);
    } else {
      if (numero < 1000) {
        console.log("N° de client : CL0" + numero);
      } else {
        console.log("N° de client : CL" + numero);
      }
    }
  }
}

// Exercice 2 - Solution alternative 1
// Pour éviter la répétition du texte "N° de client :..."
function afficherNumeroClient(numero) {
  let prefixe = "CL";
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
/*
 * Ici on utilise le fait qu'un nombre < 10 est également < 1000 pour passer
 * à l'intérieur de toutes les conditions et ainsi ajouter plusieurs "0" de
 * suite comme l'exige l'énoncé. Sans la présence des "else", toutes les
 * conditions sont évaluées les unes à la suite des autres.
 */
function afficherNumeroClient(numero) {
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
/*
 * Ce code est très similaire à l'exercice des guirlandes de la leçon sur les
 * boucles. La fonction afficherPlusieursEtoiles(nombre) permet d'afficher une
 * guirlande d'une certaine longueur (nombre).
 * La fonction afficherTriangleEtoile(longueurMax) permet d'afficher le bon
 * nombre de lignes pour former le triangle.
 * 
 * À nouveau les erreurs étaient au niveau des for(let ...) 
 */
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

/* Les variables */

// Déclarer une variable
// Mot-clés : let (ES6+), var (< ES6)
// let maVariable;
// var maVariable;

// 'let' vient des mathématiques
// soit x égal 42...
// let x be 42...

/* Règles de nommage */

// Premier caractère du nom : '$' OU '_' OU lettre
// Reste : '$' OU '_' OU lettre OU chiffre
let distanceEnMètres;
let élèveStudieux;
let $vaRiaBlE;
let _autrevaleur42;
let $__abc$_over9000;
let _abc_$1337$;
let привет;
let صباحالخير;
let 你好;

// Exemple de mauvais nom
// let 100patates;
// let non aux espaces;
// let laPonctuation,C'estPasAutoriséNonPlus!;

// Nom !== mot-clés réservés : détecter un problème
let break;
let case;
let catch;
let continue;
let export;
let import;
let interface;
let public;
let super;

/* Convention et bonnes pratiques */

// Faciliter l'écriture de code dans le monde entier
// On n'utilise que [a-zA-Z0-9] dans les noms
// let élèveStudieux
// let caseàcocher

// La notation camelCase
// let cenomestassezdifficilealire;
// let ceNomEstBeaucoupPlusFacileALire;

// JavaScript est sensible à la casse
// let variable;
// let Variable;
// console.log("Ça marche :)");
// Console.log("Ça marche pas :(");

// Utilisez des noms qui ont du sens !
// let a;
// let ageDuClient;

/* Utilisation d'une variable */

// Lire la valeur d'une variable
// let maVariable;
// console.log(maVariable);

// Les valeurs undefined et null
// undefined
// null

/* Affectation de valeur */
let maVariable;
console.log(maVariable);
maVariable = 42;
console.log(maVariable);

// Affectation à la déclaration
let maVariable = 42;
console.log(maVariable);


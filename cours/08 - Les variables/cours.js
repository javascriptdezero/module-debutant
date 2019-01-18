
/* Les variables */

// Déclarer une variable
// Mot-clés : let (ES6+), var (< ES6)
// let maVariable;
// var maVariable;

// 'var' vient de 'variable'
// 'let' vient des mathématiques !
// soit x égal 42...
// let x be 42...

/* Règles de nommage */

// Caractères autorisés : '$' OU '_' OU lettre OU chiffre
// Mais chiffre interdit pour 1er caractère
// Interdit : espaces, signes de ponctuation etc.
// let élèveStudieux;
// let $__abc$_over9000;
// let _abc_$1337$;
// let привет;
// let صباحالخير;
// let 你好;

/* Convention de nommage */

// Pour faciliter l'écriture de code dans le monde entier
// On n'utilise que [a-zA-Z0-9] dans les noms de variables

/* Pièges à éviter */

// Nom !== mot-clés réservés : détecter un problème
// let break;
// let case;
// let catch;
// let continue;
// let export;
// let import;
// let interface;
// let public;
// let super;

// JavaScript est sensible à la casse
// let variable;
// let Variable;
// console.log("Ça marche :)");
// Console.log("Ça marche pas :(");

/* Bonnes pratiques */

// La notation camelCase
// let cenomestassezdifficilealire;
// let ceNomEstBeaucoupPlusFacileALire;

// Utilisez des noms qui ont du sens !
// let a;
// let ageDuClient;

/* Affectation d'une valeur : opérateur d'affectation '=' */

// let maVariable;
// maVariable = "bonjour";
// console.log(maVariable);

// Changer la valeur d'une variable
// maVariable = true;
// console.log(maVariable);
// maVariable = 42;
// console.log(maVariable);

// Affectation à la déclaration
// let maVariable = 42;
// console.log(maVariable);

/* Animation : que se passe-t-il dans la mémoire ? */

// Affectation d'une expression complexe
// let maVariable = 5 * 4;
// let resultat = "Le résultat est : " + (maVariable * 2 + 2);
// console.log(resultat);

// Affectation en utilisant la même variable !
// let maVariable = 42;
// maVariable = maVariable * 30 + 77;
// console.log(maVariable);

/* La valeur undefined */

// let maVariable;
// console.log(maVariable);

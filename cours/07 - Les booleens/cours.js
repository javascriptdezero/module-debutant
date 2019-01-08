
/* Les booléens */

// En anglais : true (vrai) / false (faux)
// console.log(true);
// console.log(false);

// À quoi servent les booléens ?
// Résultat de comparaisons : < > <= >= === !== (== !=)

// Opérateur "strictement inférieur" <
// console.log(16 < 42);
// console.log(42 < 42);
// console.log(42 < 16);

// Opérateur "strictement supérieur" >
// console.log(16 > 42);
// console.log(42 > 42);
// console.log(42 > 16);

// Opérateur "inférieur ou égal" <=
// console.log(16 <= 42);
// console.log(42 <= 42);
// console.log(42 <= 16);

// Opérateur "supérieur ou égal" >=
// console.log(16 >= 42);
// console.log(42 >= 42);
// console.log(42 >= 16);

// Opérateur "égalité stricte" (même type) ===
// console.log(16 === 16);
// console.log(16 === 42);

// Opérateur "inégalité stricte" (même type) !==
// console.log(16 !== 16);
// console.log(16 !== 42);

// Opérateurs d'égalité et d'inégalité == et !=
// Nombreuses règles de conversion de type

/* Combinaisons de comparaisons */

// Opérateurs logiques && (ET) || (OU) ! (NON)

// L'opérateur ET: &&
// console.log(false && false);
// console.log(false && true);
// console.log(true && false);
// console.log(true && true);

// L'opérateur OU: ||
// console.log(false || false);
// console.log(false || true);
// console.log(true || false);
// console.log(true || true);

// L'opérateur NON: !
// console.log(!false);
// console.log(!true);

// Réécriture de <= avec l'opérateur OU ||
// console.log(42 <= 42);
// console.log(42 < 42 || 42 === 42);

// Tarifs: - Gratuit pour -3 ans ou les +70 ans
//         - Réduction pour les enfants entre 3 et 18 ans
//         - Parc interdit aux plus de 85 ans
// console.log("Gratuit si j'ai 80 ans ? " + (80 < 3 || 80 > 70));
// console.log("Réduction si j'ai 8 ans ? " + (8 > 3 && 8 < 18));
// console.log("Ai-je accès si j'ai 92 ans ? " + !(92 > 85));

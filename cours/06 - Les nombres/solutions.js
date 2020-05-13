/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
console.log(28 + 6);
// Exercice 1
console.log((6 * 4 + 2) / 2);
// Exercice 2
/*
 * On compte le nombre total d'adresses postales, celles d'Hugo et celles
 * que Tom a récupéré à la main, soit 1337 + 256. Il faudra donc envoyer
 * autant de lettres. Chaque lettre coûte 2 €. Il faut donc multiplier la
 * somme 1337 + 256 par 2. La difficulté ici est de bien penser à mettre
 * les parenthèses autour de (1337 + 256) ! En effet si vous ne les mettez
 * pas, vous faites 1337 + 256 * 2, la multiplication 256 * 2 est prioritaire
 * et vous n'aurez pas le bon résultat !
 */
console.log((1337 + 256) * 2);
// Exercice 3
/*
 * On reprend le nombre de lettres précédent (1337 + 256). Cette fois-ci,
 * chaque lettre coûte 1,5 €, donc on multiplie (1337 + 256) par 1.5.
 * La société facture en plus 500 € donc il faut ajouter 500 €.
 */
console.log((1337 + 256) * 1.5 + 500);
// Exercice 4
/*
 * Il faut calculer dans combien de jours la température va dépasser les
 * 35°C sachant qu'elle augmente de 2°C tous les 3 jours et qu'on part
 * d'une température de 23°C.
 * Étape 1 : on calcule de combien de degrés la température actuelle doit
 * augmenter pour atteindre les 35°C. On fait donc la différence entre
 * 35°C et 23°C : 35 - 23 = 12°C.
 * Étape 2 : la température augmente de 2°C tous les 3 jours. Donc pour
 * augmenter de 12°C, combien de jours faudra-t-il ?
 * +2°C => 3 jours
 * +12°C => ? jours
 * (On peut faire un produit en croix si vous savez le faire).
 * Il suffit de diviser par 2°C les 12°C de différence pour savoir
 * combien de "packs de 3 jours" il faut pour augmenter de 12°C.
 * (35 - 23) / 2 => Il faudra 6 "packs de 3 jours" pour y arriver.
 * Étape 3 : On calcule le nombre de jours total en multipliant par 3.
 * 1 pack vaut 3 jours donc il suffit de multiplier par 3.
 * On n'oublie pas les parenthèses pour forcer l'ordre des priorités
 * sur les opérations et ça donne ((35 - 23) / 2) * 3.
 * Si vous l'avez noté ((35 - 23) * 3) / 2, c'est également correct !
 */
console.log(((35 - 23) / 2) * 3);

// Chassez le bogue 0
/*
 * Préambule : pour calculer par exemple 12% de 150 € il faut
 * multiplier 150 par 12 / 100, soit 150 * 12 / 100.
 * 
 * Étape 1 : Il faut calculer les bénéfices de l'argent récolté
 * grâce aux investisseurs. Ces bénéfices sont les dons moins
 * les taxes. C'est-à-dire 2350 € moins 12% de taxes. On calcule
 * d'abord la valeur des taxes, 12% de 2350 € : 2350 * 12 / 100.
 * Étape 2 : Il faut soustraire ces taxes de l'argent récolté.
 * Soit 2350 - (12% de 2350) => 2350 - (2350 * 12 / 100).
 * Étape 3 : L'argent récolté des amis n'est pas taxé, donc
 * l'intégralité de la somme peut être ajouté aux bénéfices.
 * Soit 2350 - (2350 * 12 / 100) + 1000.
 * Notez que l'ordre des priorités des opérateurs permet
 * d'écrire aussi cette formule sans les parenthèses.
 */
console.log(2350 - (2350 * 12 / 100) + 1000);

// Chassez le bogue 1
/*
 * L'objectif ici est de corriger les différentes fautes de
 * frappe ou de logique dans ce code pour obtenir les bons
 * résultats. L'utilisation des parenthèses est indispensable
 * lorsqu'on fait des additions, sinon l'opérateur "+" pourrait
 * être utilisé comme l'opérateur de concaténation et non pas
 * comme l'opérateur d'addition mathématique !
 */
console.log('Montant récolté auprès des 5 investisseurs : 5 x 470 = ' + 5 * 470 + ' €\nMontant récolté auprès de 10 amis : 10 x 100 = ' + 10 * 100 + ' €\nMontant total récolté : 2350 + 1000 = ' + (2350 + 1000) + ' €\nBénéfice net (après le prélèvement des taxes) : 2350 - 2350 * 0.12 + 1000 = ' + (2350 - 2350 * 0.12 + 1000) + ' €');

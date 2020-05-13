/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
/*
 * L'accès est autorisé si le client fait *MOINS* de 70 cm *ET* a *MOINS* de 3 ans.
 * Il faut bien lire l'énoncé pour en déduire la logique à appliquer. Ici il faut
 * utiliser le ET logique && et 2 conditions *MOINS* (<) pour écrire la condition
 * finale.
 */
console.log(65 < 70 && 4 < 3);

// Exercice 1
/*
 * L'accès est autorisé si *AU MOINS* une condition est remplie.
 * On a donc affaire à un OU logique, donc ||.
 * Les conditions testées : le client mesure *PLUS* (>) de 150 cm et a au
 * moins 14 ans, c'est-à-dire un âge supérieur ou égal à 14 ans.
 */
console.log(140 > 150 || 16 >= 14);

// Exercice 2
/*
 * L'accès est autorisé si les 2 conditions sont remplies, on a donc affaire
 * à un ET logique &&.
 * La 1ère condition : a *PLUS* de 16 ans, donc strictement supérieur à 16 (>)
 * *OU* (||) mesure *AU MOINS* 150 cm donc supérieur ou égal à 150 cm (>=).
 * La 2ème condition : il fait *MOINS* de 80 kg, donc strictement inférieur
 * à 80 (<).
 * Il faut penser à mettre les parenthèses pour la 1ère condition, en effet
 * le ET (&&) logique a priorité d'exécution sur le OU (||) logique !
 */
console.log((15 > 16 || 170 >= 150) && 79 < 80);

// Exercice 3
/*
 * L'accès est autorisé si *AU MOINS* une condition est remplie, on a affaire à
 * un OU logique ||.
 * 1ère condition : il a *PLUS* de 12 ans donc strictement supérieur à 12 (>)
 * *OU* mesure *AU MOINS* 120 cm, donc supérieur ou égal à 120 cm (>=).
 * 2ème condition : le client fait *ENTRE* 40 et 60 kg (exclus) donc strictement
 * supérieur à 40 (>) et strictement inférieur à 60 (<).
 * À nouveau attention à bien mettre les parenthèses pour la 2ème condition,
 * l'opérateur logique && est prioritaire devant ||.
 */
console.log(10 > 12 || 110 >= 120 || (58 > 40 && 58 < 60));

// Chassez le bogue 0
/*
 * Il s'agit ici de placer les parenthèses au bon endroit. L'opérateur && est
 * prioritaire par rapport à || donc pour que la 1ère condition soit testée en 1er
 * il faut appliquer des parenthèses autour d'elle :
 */
console.log((150 >= 120 || 16 > 15) && 95 < 90);

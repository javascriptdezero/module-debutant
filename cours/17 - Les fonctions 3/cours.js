/* Les fonctions */

// Que fait ce code ?
let totalHT = 0;
let totalTVA = 0;
let totalTTC = 0;
console.log("----- Liste d'articles -----");
console.log("Chocolat chaud : " + 2 + " €");
totalHT = totalHT + 2;
totalTVA = totalTVA + 2 * 20 / 100;
console.log("Tarte aux pommes : " + 5 + " €");
totalHT = totalHT + 5;
totalTVA = totalTVA + 5 * 20 / 100;
console.log("----- Montant total -----");
totalTTC = totalHT + totalTVA;
console.log("Net à payer : " + totalTTC + " €");
console.log("(Dont TVA : " + totalTVA + " €)");
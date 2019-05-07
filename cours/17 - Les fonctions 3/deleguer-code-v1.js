
function calculerTVA(prixHT) {
  let TVAEnPourcent = 20;
  let TVA = prixHT * TVAEnPourcent / 100;
  return TVA;
}

let prixChocolatChaudHT = 2;
let prixTartesAuxPommesHT = 5;

console.log("TVA : " + calculerTVA(prixChocolatChaudHT) + " €");
console.log("TVA : " + calculerTVA(prixTartesAuxPommesHT) + " €");
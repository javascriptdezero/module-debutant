function ecrireTitre(titre) {
  console.log("-- " + titre + " --");
}
function ecrireArticle(nomArticle, prixHT) {
  console.log(nomArticle + " : " + prixHT + " €");
}
function calculerTVA(prixHT) {
  let TVAEnPourcent = 21;
  return prixHT * TVAEnPourcent / 100;
}

let totalHT = 0;
let totalTVA = 0;
let totalTTC = 0;
let prixChocolatChaudHT = 2;
let prixTarteAuxPommesHT = 5;

ecrireTitre("Liste d'articles v0");

ecrireArticle("Chocolat chaud", prixChocolatChaudHT);
totalHT = totalHT + prixChocolatChaudHT;
totalTVA = totalTVA + calculerTVA(prixChocolatChaudHT);

ecrireArticle("Tarte aux pommes", prixTarteAuxPommesHT);
totalHT = totalHT + prixTarteAuxPommesHT;
totalTVA = totalTVA + calculerTVA(prixTarteAuxPommesHT);

ecrireTitre("Montant total");

totalTTC = totalHT + totalTVA;

console.log("Net à payer : " + totalTTC + " €");
console.log("(Dont TVA : " + totalTVA + " €)");
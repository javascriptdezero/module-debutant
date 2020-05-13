const { execSync } = require("child_process");
const fs = require("fs");

const SUFFIX_FICHIER_SAUVEGARDE = "-sauvegarde";
const BRANCHE_DEV = "dev";
const EXECUTER_TESTS_UNITAIRES = false;

/****************************/
/* Quelques tests unitaires */
/****************************/

if (EXECUTER_TESTS_UNITAIRES) {
  console.log(titre("Lancement des tests unitaires"));
  const testSuffixerFichier = function (fichier, nomAvecSuffixe) {
    reponseFonction = suffixerFichier(fichier, SUFFIX_FICHIER_SAUVEGARDE);
    console.assert(reponseFonction === nomAvecSuffixe, "entrée: '%s', sortie: '%s'", fichier, reponseFonction);
  };
  testSuffixerFichier("bonjour.js", `bonjour${SUFFIX_FICHIER_SAUVEGARDE}.js`);
  testSuffixerFichier("../../../bla/bonjour.js", `../../../bla/bonjour${SUFFIX_FICHIER_SAUVEGARDE}.js`);
  testSuffixerFichier("bonjour", `bonjour${SUFFIX_FICHIER_SAUVEGARDE}`);
  testSuffixerFichier("bonjour.min.js", `bonjour.min${SUFFIX_FICHIER_SAUVEGARDE}.js`);
  testSuffixerFichier("", "");
  testSuffixerFichier("bonjour.toto", `bonjour${SUFFIX_FICHIER_SAUVEGARDE}.toto`);

  console.log(titre("Fin des tests unitaires"));
  process.exit(0);
}

/**********************/
/* Fonctions communes */
/**********************/

function obtenirBranche() {
  try {
    return execSync("git branch")
      .toString()
      .split("\n")
      .filter(ligne => ligne.startsWith("*"))[0]
      .split(" ")[1];
  } catch (erreur) {
    quitterSurErreur(erreur);
  }
}

function titre(nom) {
  return `\n===[ ${nom.toUpperCase()} ]===`;
}

function quitterSurErreur(messageErreur) {
  console.log(titre("⛔️ Erreur de mise à jour"));
  console.log(messageErreur + "\n");
  console.log(`${titre("Que faire ?")}
S'il vous plaît contactez-moi ! Je suis là pour ça !
Merci de me transmettre tout le texte ci-dessus par email sur jeremy@javascriptdezero.com pour que je puisse vous aider.
Je compte sur vous ! Merci beaucoup.`);
  process.exit(1);
}

function suffixerFichier(nom, suffixe) {
  morceaux = nom.split(".");
  // S'il n'y a pas de points dans le nom, on ajoute juste le suffixe à la fin
  if (morceaux.length === 1) {
    // Si le nom est vide, ne rien retourner
    if (morceaux[0].length === 0) {
      return "";
    }
    return morceaux[0] + SUFFIX_FICHIER_SAUVEGARDE;
  }

  // On extrait l'extension et on y ajoute le . devant
  extension = morceaux.pop();
  extension = `.${extension}`;
  // On remplace l'extension et on renvoie le tout
  return nom.slice(0, nom.length - extension.length) + `${SUFFIX_FICHIER_SAUVEGARDE}${extension}`;
}

/*
 * # Tester s'il y a besoin d'une mise à jour
 *
 * 1. On fetche les données
 * 2. On vérifie que le hash distant de origin/<branche> n'est pas contenu dans
 * la liste des commits déjà présents dans la branche locale
 * 3. S'il n'est pas présent, c'est qu'on doit mettre à jour
 *
 * # Pourquoi je fais ça ?
 *
 * Au début je testais uniquement la différence de hashs entre <branche> et origin/<branche>.
 * Le problème c'est que si l'étudiant commite son code, il y aura toujours une différence
 * entre les deux et il essaiera de mettre à jour alors qu'il ne faut pas !
 *
 * En utilisant cette méthode je m'assure que l'étudiant peut faire ce qu'il veut avec
 * son dépôt et que les mises à jour se feront seulement quand c'est nécessaire.
 */
function miseAJourDisponible(brancheDistante) {
  try {
    execSync("git fetch");
    const listeHashsBranche = execSync("git log --pretty=%H")
      .toString()
      .split("\n");
    const hashBrancheDistante = execSync(`git show -s --pretty=%H ${brancheDistante}`)
      .toString()
      .trim();
    return !listeHashsBranche.includes(hashBrancheDistante);
  } catch (erreur) {
    quitterSurErreur(erreur);
  }
  return false;
}

/*******************/
/* Début du script */
/*******************/

// On regarde dans quelle branche on est (dev ou master)
const BRANCHE_COURANTE = obtenirBranche();
const BRANCHE_DISTANTE = `origin/${BRANCHE_COURANTE}`;

if (BRANCHE_COURANTE === BRANCHE_DEV) {
  console.log(titre("🖥 Mode développeur (branche dev) 🖥"));
  console.log("Vous êtes sur la branche dev, cette version peut être sujette à des bogues.");
}

console.log(titre("Mise à jour"));

// On regarde s'il y a du nouveau sur le dépôt distant sauf si on utilise --force
try {
  console.log("🔍 Recherche d'une mise à jour disponible...");
  // Le dernier argument "2>&1" redirige stderr vers stdout car git fetch écrit sur stderr au lieu de stdout,
  // ça m'a coûté plusieurs heures de recherche pour trouver le problème...
  if (miseAJourDisponible(BRANCHE_DISTANTE)) {
    console.log("🔥 Nouvelle mise à jour disponible ! 🔥");
  } else {
    console.log("✅ Vous disposez déjà de la dernière version disponible.");
    process.exit(0);
  }
} catch (erreur) {
  quitterSurErreur(erreur);
}

let listeFichiersModifies;
try {
  console.log("🔍 Recherche de conflits potentiels...");
  listeFichiersModifies = execSync("git status -s")
    .toString()
    .split("\n");
  // On retire le dernier élément car c'est juste une chaîne vide
  listeFichiersModifies.pop();
} catch (erreur) {
  quitterSurErreur(erreur);
}

// On liste uniquement les fichiers modifiés *du dépôt*
listeFichiersASauvegarder = listeFichiersModifies
  .filter(fichier => fichier.startsWith("MM") || fichier.startsWith(" M"))
  .map(fichier => fichier.slice(3).replace(/"/g, ""));

let conflitsDetectes = false;
if (listeFichiersASauvegarder.length > 0) {
  conflitsDetectes = true;
  console.log("⚠️ Conflit(s) potentiel(s) trouvé(s).");
  console.log("💾 Sauvegarde préventive de votre précieux code...");
  console.log(titre("Sauvegarde de vos fichiers"));
  console.log(
    "ℹ️ Pour que vous ne perdiez pas votre code déjà écrit, les fichiers en conflit avec la mise à jour vont être sauvegardés."
  );
  for (cheminFichier of listeFichiersASauvegarder) {
    try {
      cheminFichierSauvegarde = suffixerFichier(cheminFichier, SUFFIX_FICHIER_SAUVEGARDE);
      fs.copyFileSync(cheminFichier, cheminFichierSauvegarde, erreur => {
        console.log(`⛔️ Erreur pendant la copie de '${cheminFichier}' vers '${cheminFichierSauvegarde}'.`);
        throw erreur;
      });
      console.log(`✅ Copie '${cheminFichier}' => '${cheminFichierSauvegarde}'.`);
    } catch (erreur) {
      quitterSurErreur(erreur);
    }
  }
} else {
  console.log("✅ Aucun conflit trouvé.");
}

try {
  if (conflitsDetectes) {
    execSync("git reset --hard");
    execSync(`git clean -f --exclude "*${SUFFIX_FICHIER_SAUVEGARDE}*"`);
  }
  console.log(titre("installation de la mise à jour"));
  console.log("♻️ Mise à jour...");
  execSync("git pull 2>&1");
} catch (erreur) {
  quitterSurErreur(erreur);
}
console.log("🎉 Mise à jour effectuée avec succès ! 🎉");

if (listeFichiersASauvegarder.length > 0) {
  console.log(titre("Comment réutiliser le code sauvegardé ?"));
  console.log("Pour réutiliser votre code, copiez-le depuis les fichiers sauvegardes vers les nouveaux fichiers :");
  for (cheminFichier of listeFichiersASauvegarder) {
    console.log(`▶️ Copiez votre code depuis "${suffixerFichier(cheminFichier)}" vers "${cheminFichier}".`);
  }
  console.log(
    `Une fois que c'est fait, vous pouvez supprimer les fichiers finissant par '${SUFFIX_FICHIER_SAUVEGARDE}'.`
  );
}

console.log(titre("des questions ?"));
console.log("Contactez-moi par email à jeremy@javascriptdezero.com.");

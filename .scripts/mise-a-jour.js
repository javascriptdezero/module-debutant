const { execSync } = require("child_process");
const fs = require("fs");

const SUFFIX_FICHIER_SAUVEGARDE = "-sauvegarde";
const GIT_FETCH_DEBUT_PARTIE_INTERESSANTE = "From ";
const GIT_FETCH_CHAINE_DEJA_A_JOUR = "up to date";
const BRANCHE_DEV = "dev";
const EXECUTER_TESTS_UNITAIRES = false;

// On regarde dans quelle branche on est (dev ou master)
let devMode = false;
try {
  devMode =
    execSync("git branch")
      .toString()
      .split("\n")
      .filter(ligne => ligne.startsWith("*"))[0]
      .split(" ")[1] === BRANCHE_DEV;
  if (devMode) {
    console.log(titre("🖥 Mode développeur (branche dev) 🖥"));
    console.log("Vous êtes sur la branche dev, cette version peut être sujette à des bogues.");
  }
} catch (erreur) {
  quitterSurErreur(erreur);
}
const DEPOT_DISTANT = devMode ? "origin/dev" : "origin/master";

/* Cas spécial pour forcer le git pull si le git fetch a déjà eu lieu */
let sauterGitFetch = false;
if (process.argv.length > 2) {
  process.argv.forEach(val => {
    if (val === "--force") {
      sauterGitFetch = true;
    }
  });
}

/****************************/
/* Quelques tests unitaires */
/****************************/

if (EXECUTER_TESTS_UNITAIRES) {
  console.log(titre("Lancement des tests unitaires"));
  const testSuffixerFichier = function(fichier, nomAvecSuffixe) {
    reponseFonction = suffixerFichier(fichier, SUFFIX_FICHIER_SAUVEGARDE);
    console.assert(reponseFonction === nomAvecSuffixe, "entrée: '%s', sortie: '%s'", fichier, reponseFonction);
  };
  testSuffixerFichier("bonjour.js", `bonjour${SUFFIX_FICHIER_SAUVEGARDE}.js`);
  testSuffixerFichier("../../../bla/bonjour.js", `../../../bla/bonjour${SUFFIX_FICHIER_SAUVEGARDE}.js`);
  testSuffixerFichier("bonjour", `bonjour${SUFFIX_FICHIER_SAUVEGARDE}`);
  testSuffixerFichier("bonjour.min.js", `bonjour.min${SUFFIX_FICHIER_SAUVEGARDE}.js`);
  testSuffixerFichier("", "");
  testSuffixerFichier("bonjour.toto", `bonjour${SUFFIX_FICHIER_SAUVEGARDE}.toto`);

  const testGitFetch = function(sortie, resultat) {
    reponseFonction = miseAJourDisponible(sortie);
    console.assert(reponseFonction === resultat, "Erreur Test GitFetch: %s", sortie);
  };
  testGitFetch(
    `remote: Enumerating objects: 4, done.
  remote: Counting objects: 100% (4/4), done.
  remote: Compressing objects: 100% (2/2), done.
  remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
  Unpacking objects: 100% (3/3), done.
  From javascriptdezero.github.com:javascriptdezero/module-debutant
     866b7e9..15c883e  dev        -> origin/dev
   = [up to date]      master     -> origin/master`,
    true
  );
  testGitFetch(
    `From javascriptdezero.github.com:javascriptdezero/module-debutant
   866b7e9..15c883e  dev        -> origin/dev
 = [up to date]      master     -> origin/master`,
    true
  );
  testGitFetch(
    `remote: Enumerating objects: 4, done.
  remote: Counting objects: 100% (4/4), done.
  remote: Compressing objects: 100% (2/2), done.
  remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
  Unpacking objects: 100% (3/3), done.
  From javascriptdezero.github.com:javascriptdezero/module-debutant
    = [up to date]      dev        -> origin/dev
    = [up to date]      master     -> origin/master`,
    false
  );
  testGitFetch(
    `From javascriptdezero.github.com:javascriptdezero/module-debutant
    = [up to date]      dev        -> origin/dev
    = [up to date]      master     -> origin/master`,
    false
  );

  console.log(titre("Fin des tests unitaires"));
  process.exit(0);
}

/**********************/
/* Fonctions communes */
/**********************/

function titre(nom) {
  return `\n===[ ${nom.toUpperCase()} ]===`;
}

function quitterSurErreur(messageErreur) {
  console.log(titre("❌ erreur de mise à jour"));
  console.log(messageErreur + "\n");
  console.log(`${titre("Que faire ?")}
S'il vous plaît contactez-moi ! Je suis là pour ça !
Merci de me transmettre tout le texte ci-dessus via Slack (https://javascriptdezero.slack.com) ou par email sur jeremy@javascriptdezero.com pour que je puisse vous aider.
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

function miseAJourDisponible(sortieGitFetch) {
  const lignes = sortieGitFetch.split("\n");
  let partieInteressanteTrouvee = false;
  for (ligne of lignes) {
    if (ligne.includes(GIT_FETCH_DEBUT_PARTIE_INTERESSANTE)) {
      partieInteressanteTrouvee = true;
    }
    if (partieInteressanteTrouvee) {
      if (ligne.includes(DEPOT_DISTANT)) {
        return !ligne.includes(GIT_FETCH_CHAINE_DEJA_A_JOUR);
      }
    }
  }
  return false;
}

/*******************/
/* Début du script */
/*******************/

console.log(titre("Mise à jour"));

// On regarde s'il y a du nouveau sur le dépôt distant sauf si on utilise --force
if (sauterGitFetch) {
  console.log("Mise à jour forcée...");
} else {
  try {
    console.log("Recherche d'une mise à jour disponible...");
    // Le dernier argument "2>&1" redirige stderr vers stdout car git fetch écrit sur stderr au lieu de stdout,
    // ça m'a coûté plusieurs heures de recherche pour trouver le problème...
    if (miseAJourDisponible(execSync("git fetch -v --dry-run 2>&1").toString())) {
      console.log("🔥 Nouvelle mise à jour disponible ! 🔥");
    } else {
      console.log("✅ Vous disposez déjà de la dernière version disponible.");
      process.exit(0);
    }
  } catch (erreur) {
    quitterSurErreur(erreur);
  }
}

let listeFichiersModifies;
try {
  console.log("Recherche de conflits potentiels...");
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
  console.log("Conflits potentiels trouvés, sauvegarde préventive...");
  console.log(titre("Sauvegarde de vos fichiers"));
  console.log(
    "Pour que vous ne perdiez pas votre code déjà écrit les fichiers en conflit avec la mise à jour vont être sauvegardés."
  );
  for (cheminFichier of listeFichiersASauvegarder) {
    try {
      cheminFichierSauvegarde = suffixerFichier(cheminFichier, SUFFIX_FICHIER_SAUVEGARDE);
      console.log(`Copie "${cheminFichier}" => "${cheminFichierSauvegarde}".`);
      fs.copyFileSync(cheminFichier, cheminFichierSauvegarde, erreur => {
        console.log(`Erreur pendant la copie de ${cheminFichier}`);
        throw erreur;
      });
    } catch (erreur) {
      quitterSurErreur(erreur);
    }
  }
} else {
  console.log("Aucun conflit trouvé.");
}

console.log(titre("Récupération de la mise à jour"));
try {
  if (conflitsDetectes) {
    console.log("Suppression des modifications locales pour éviter les conflits...");
    execSync("git reset --hard");
    console.log("Suppression des fichiers n'appartenant pas au dépôt...");
    execSync(`git clean -f --exclude "*${SUFFIX_FICHIER_SAUVEGARDE}*"`);
  }
  console.log("Mise à jour...");
  execSync("git pull 2>&1");
} catch (erreur) {
  quitterSurErreur(erreur);
}
console.log("✅ Mise à jour effectuée avec succès :)");

if (listeFichiersASauvegarder.length > 0) {
  console.log(titre("Réutiliser votre code"));
  console.log("Pour réutiliser votre code, intégrez-le depuis les fichiers sauvegardes vers les nouveaux fichiers :");
  for (cheminFichier of listeFichiersASauvegarder) {
    console.log(`Intégrez votre code depuis "${suffixerFichier(cheminFichier)}" vers "${cheminFichier}".`);
  }
}

console.log(titre("des questions ?"));
console.log(
  "Pour toutes question n'hésitez pas à me contacter sur Slack (https://javascriptdezero.slack.com) ou par email à jeremy@javascriptdezero.com."
);

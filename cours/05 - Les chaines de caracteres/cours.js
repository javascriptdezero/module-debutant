/* Les chaînes de caractères (Strings) */

// On en a déjà utilisé !
console.log("bonjour");

// Qu'est-ce qu'une chaîne de caractères ? Un caractère ?
// @&é"'(§è!çà)-azertyuiop^$qsdfghjklmù`<wxcvbn,;:=#1234567890°_AZERTYUIOP¨*QSDFGHJKLM%£>WXCVBN?./+

// Emojis
console.log("🔥😁");

// Caractère "nouvelle ligne" interdit
// console.log("Je suis la première ligne
// Et je suis la deuxieme ligne");

// Créer une chaîne avec des guillemets doubles
console.log("Je suis une chaîne de caractères");

// Avec des guillemets simples (apostrophe)
console.log('Je suis aussi une chaîne de caractères');

// Quand utiliser l'une ou l'autre ?
console.log("JavaScript c'est super");
console.log('JavaScript est "super" facile');

// Échapper un caractère avec \
console.log("JavaScript c'est \"super\" simple");

// Faire une nouvelle ligne '\n'
console.log("Je suis la première ligne\nEt je suis la deuxieme");

// Concaténation de chaînes (opérateur +)
console.log("Bienvenue " + "Jérémy");
console.log("Bienvenue" + 'Jérémy');
console.log('Bienvenue' + "Jérémy");
console.log('Bienvenue' + 'Jérémy');

/* Nouveauté ES6 : les templates strings (modèles de libellés) */

// Caractère accent grave ou "apostrophe inverse" (backticks)
// Avantages : pas besoin d'échapper les guillemets (seulement le backtick) + multi-lignes
console.log(`Je suis une ' "chaîne" de caractères écrite avec backtick \` !`);

// Inconvénient : disponible qu'à partir d'ES6

/* Bonnes pratiques */

// Ne cassez pas les longues chaînes (recherche + VSCode wrap)
// Bonne pratique:
console.log("Il n'y a plus aucune raison utile de casser les longues chaînes de caractères comme celle-ci en plusieurs lignes ! Avant ça pouvait être justifié car les vieux moniteurs ne permettait d'afficher que 80 caractères de large mais aujourd'hui ce n'est plus le cas !");
// Mauvaise pratique:
// console.log("Il n'y a plus aucune raison utile de casser les longues" +
// " chaînes de caractères comme celle-ci en plusieurs lignes ! " +
// "Avant ça pouvait être justifié car les vieux moniteurs ne permettait "+
// "d'afficher que 80 caractères de large mais aujourd'hui ce n'est plus le cas !");

// Utilisez les anti-slashs quand c'est nécessaire (meilleure lisibilité)
console.log("C'est pas facile à lire, y'a trop d'anti-slashs");
console.log('Même "chose" pour les guillemets "doubles"');

/* Astuce VSCode */

// Sélection via souris + guillemets
console.log("Gagnons du temps !");

// Sélection via raccourci extension de sélection + guillemets
console.log("Sélection sans souris Cmd+Ctrl+Shift+Droite");
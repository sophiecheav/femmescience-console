let uneScientifique = { //variable
  nom: 'Dorothy Vaughan', //objets
  naissance: '20 septembre 1910',
  réalisations: 'mathématicienne et informaticienne américaine, elle a contribué aux premières décennies du programme spatial américain ; elle fut la première directrice de division afro-américaine de la NASA'
}

console.log(`Bonjour je m’appelle ${uneScientifique.nom} et je suis une scientifique !`);

uneScientifique.parlerDeLinformatique = function() { // méthode
  console.log('En informatique, nous sommes tous perchés sur des épaules de géantes.');
}

uneScientifique.parlerDeLinformatique();

uneScientifique.direBonjour = function() {
  console.log(`Bonjour je m’appelle ${this.nom} et je suis une scientifique !`);
}

uneScientifique.direBonjour();

//8. Changer la propriété 'nom' sans modifier le code précédent

uneScientifique.nom = 'Margaret Hamilton';
uneScientifique.direBonjour();


uneScientifique.aRecuUnPrixNobel = false; // rajoute une propriété à uneScientifique au lieu de créer une nouvelle variable

uneScientifique.decrireLesReussites = function() {
  if (this.aRecuUnPrixNobel) { //== true
    console.log('J’ai reçu un prix Nobel !');
  } else {
    console.log('Je n’ai pas reçu de prix Nobel, mais j’ai fait encore mieux que ça !');
  }
}

uneScientifique.decrireLesReussites();

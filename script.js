// Keyboard

// Je déclare une variable pour simuler un input-frontend qui contient un mot tapé par l'utilisateur (ici une chaîne String avec le mot "Banane").

const inputUser = "Banane";

// J'appelle la fonction avec la valeur inscrite dans l'inputUser et j'ajoute à mon console.log une variable dynamique ${} qui affichera le mot de l'utilisateur et sa conversion/clavier.
// Exemple : Banane = touche_2 [2] touche_2 [1] touche_6 [2] touche_2 [1] touche_6 [2] touche_3 [2]

console.log(`${inputUser} = ${convertStringToKeyboard(inputUser)}`);

// Je déclare ensuite une fonction pour convertir le mot inscrit dans l'inputUser avec un paramètre "word" qui se trouve être ici "Banane"

function convertStringToKeyboard(word) {
  
  // Je déclare une variable "keyboard" qui contient un objet clé/valeur où chaque clé représente une touche.
  // Chaque valeur de la clé est un tableau contenant les lettres correspondant à la touche.

  const keyboard = {
    touche_1: [],
    touche_2: ["a", "b", "c"],
    touche_3: ["d", "e", "f"],
    touche_4: ["g", "h", "i"],
    touche_5: ["j", "k", "l"],
    touche_6: ["m", "n", "o"],
    touche_7: ["p", "q", "r", "s"],
    touche_8: ["t", "u", "v"],
    touche_9: ["w", "x", "y", "z"],
    touche_0: [],
  };

  // Je vérifie que je récupère bien les valeurs de la touche 1.
  // console.log(keyboard.touche_1);

  // Je déclare une variable "result" vide pour stocker ma future chaîne convertie.

  let result = "";

  // Je lance une boucle for i qui va parcourir chaque lettre du mot passé en paramètre "word"

  for (let i = 0; i < word.length; i++) {

    // Je passe la lettre en minuscule avec .toLowerCase() au cas où l'inputUser contiendrait des majuscules et je supprime les espaces vide avec .trim() par sécurité (exemple " Banane ").

    const letter = word[i].toLowerCase().trim();

    // Je vérifie si j'ai bien mes lettres dans ma variable.
    // console.log(letter);

    // Je parcours chaque clé de mon objet "keyboard" (touche_1, touche_2, etc...) avec une boucle for-in et je stocke les clés dans une variable "key"
    // La boucle for in est utile ici pour parcourir les clés de mon objet facilement.

    for (let key in keyboard) {
      
      // Avec une condition if je vérifie si la lettre est bien présente dans objet "keyboard" avec l'aide de .includes() et j'ajoute la touche et l'index de la lettre à la variable "result".

      if (keyboard[key].includes(letter)) {
        
        // Je stocke l'index de la lettre dans la variable "index" avec la fonction .indexOf()

        const index = keyboard[key].indexOf(letter);

        // J'ajoute la touche (la clé de mon objet) + son index (la position de ma valeur dans le tableau) et j'ajoute +1 car les index débutent à 0 en JavaScript.

        result = result + `${key} [${index + 1}] `;

        // Je quitte ma boucle avec break
        
        break;
      }
    }
  }
  // Je retourne le résultat final
  return result;
}

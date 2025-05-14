

const form = document.querySelector('form');

// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();


    // On récupère la valeur des champs input name/email/message
    let nom = document.getElementById('nom');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    // On fait la vérification pour le nom/email/message
     nom = document.getElementById('nom');
     valeurNom = nom.value;

     email = document.getElementById('email');
     valeurEmail = email.value;

     message = document.getElementById('message');
     valeurMessage = message.value;
        
    if (valeurNom === "" || valeurEmail === "" || valeurMessage === "") {
        alert('veuillez remplir les champs manquants');
    } else {
        alert('formulaire envoyé');
    }
      
});

   
// -----------------------------------------------------------------------
// 2eme méthode de vérification pas terminé et fait juste pour le mail

    // const form = document.querySelector('form');
 // On récupère la valeur des champs input name/email/message
    // let nom = document.getElementById('nom');
    // let email = document.getElementById('email');
    // let message = document.getElementById('message');

    // let error = document.querySelector(".error");

    // email.addEventListener("input", (event) =>{
    // Chaque fois que l'utilisateur saisit quelque chose
    // on vérifie la validité du champ e-mail.
    // if (email.validity.valid) {
    //   S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
//       error.innerHTML = ""; // On réinitialise le contenu
//       error.className = "error"; // On réinitialise l'état visuel du message
//     }
//   },
//   false,
// );
// form.addEventListener("submit", (event)=> {
    // Chaque fois que l'utilisateur tente d'envoyer les données
    // on vérifie que le champ email est valide.
    // if (!email.validity.valid) {
      // S'il est invalide, on affiche un message d'erreur personnalisé
    //   error.innerHTML ="J'attends une adresse e-mail correcte, mon cher&nbsp;!";
    //   error.className = "error active";
      // Et on empêche l'envoi des données du formulaire
//       event.preventDefault();
//     }
//   },
//   false,
// );


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

   

   
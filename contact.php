<?php include 'partials/header.php'; ?>

<main class="main-form">

    <div class="form-container">
        <h2><?php echo "Formulaire de contact" ?></h2><br>

        <form method="post" action="#" class="form">

            <label for="nom">Votre Nom</label>
            <input id="nom" type="text" name="nom" required><br><br>


            <label for="email">Votre email</label>
            <input id="email" type="email" name="email" required><br><br>


            <label for="objet">Objet</label>
            <select name="objet" id="objet">
                <option value="">--Choisissez une option--</option>
                <option value="rdv">Voulez-vous prendre un RDV ?</option>
                <option value="renseignement">Vous souhaitez des renseignements ?</option>
                <option value="contact sav">Vous souhaitez contacter le SAV ?</option>
                <option value="autre">Autre</option>
            </select><br><br>

            <label for="message">Message</label>
            <textarea  type='textarea' name="message" id="message" row="5" placeholder="Entrez votre message ici"></textarea>

            <div class="button-form">
                <input type="submit" class="button" value="Valider">
            </div>
    </div>

    </form>
    <?php include 'partials/footer.php'; ?>
</main>
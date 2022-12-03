// Vue de l'accueil
<?php
require('template-parts/head.php');
?>

<body>

    <header>
        <?php require('template-parts/header.php') ?>
    </header>

    <main>
        <form class="containerInput" method="get" action="">
            <label class="filtre" for="category">Filtrer par</label>
            <select class="category" name="category">
            <!-- <option class="choix" value="..." name="...">...</option> -->
                <option class="choix" value="name" name="name">Nom</option>
                <option class="choix" value="id" name="id">ID</option>
                <option class="choix" value="generation" name="generation">Génération</option>
                <option class="choix" value="type2" name="type2">Type</option>
            </select>
            <input class="input-search" type="search" name="search" placeholder="Recherche...">
            <input class="submit" type="submit" value="GO">
        </form>
        
        <div class="container-accueil">
            <div class="container-pokeball">
                <img class="pokeball" src="assets/images/pokeball.webp" alt="pokeball">
            </div>
        <img class="pika" src="assets/images/pika.gif" alt="pikachu">
        <p class="p-bienvenue">Bienvenu-e sur Pokedeck !<br><br>
            Ici vous allez pouvoir consulter les 898 pokémons existants !<br>
            Vous y trouverez, leurs statistiques, leurs faiblesses, leurs forces, leurs types, etc.<br><br>
        </p>
        </div>
      
    </main>

    <footer>
        <?php require('template-parts/footer.php'); ?>
    </footer>

</body>
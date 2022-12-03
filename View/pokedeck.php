// Vue du résultat de la recherche
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
<div class="container-search">
<?php
  foreach ($pokemons as $pokemon) { ?>
    <div class="container-card">
      <div class="card" style="background-image: url('<?php echo $pokemon[2] ?>')">
        <h3 class="id-pokemon"><?php echo $pokemon[0] ?></h3>
        <img class="image-pokemon" src="<?php echo $pokemon[3] ?>" alt="image de <?php echo $pokemon[1] ?>">
        <h2 class="name"><?php echo $pokemon[1] ?></h2>
      </div>
    </div>
<?php
  }
?>

</div>
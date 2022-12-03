// Vue du résultat de la recherche

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
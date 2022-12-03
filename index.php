<?php
  Database::$host = "localhost";
  Database::$user = "root";
  Database::$pass = "";
  Database::$dbName = "pokemon";

  Database::connect();


if (isset($_GET['search']) &&  ($_GET['category'])) {
    	$search = $_GET['search'];
    	$category = $_GET['category'];

		$pokemons = new Pokemon();                                                                                    // On crée une nouvelle instance de POST
        $pokemons = $pokemons->getAllPokemon($category, $search);                                                                          //On exécute la methode GETALLPOST que l'on stocke dnas une variable

        render("Views/pokedeck", compact("pokemons"));
}

?>
 
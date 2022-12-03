//class de l'affichage des pokemon
<?php



class Pokemon
{
    public function getAllPokemon(int $category, $search): bool|array
    {
        $params = [
            "category" => $category,
            "search" => $search,
        ];
        Database::connect();
        Database::prepReq("SELECT * FROM pokemon WHERE '$category' LIKE "%$search%" ORDER BY id ASC", $params);
        return Database::fetchData();
    }

    public function getPokemon()
    {
        Database::connect();
        Database::prepReq("SELECT * FROM pokemon");
        return Database::fetchData();
    }
}

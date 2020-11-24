import CharacterListPokemon from "../../pages/Pokemon/charactersList";
import CharacterListRickAndMorty from "../../pages/RickAndMorty/charactersList";

const Characters = ({ characterList, filter, item }) => {
  return (
    <>
      {item === "pokemons" ? (
        <CharacterListPokemon characterList={characterList} filter={filter} />
      ) : (
        <CharacterListRickAndMorty
          characterList={characterList}
          filter={filter}
        />
      )}
    </>
  );
};

export default Characters;

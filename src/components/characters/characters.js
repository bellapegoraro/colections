import CharacterListPokemon from "../../pages/Pokemon/charactersList";
import CharacterListRickAndMorty from "../../pages/RickAndMorty/charactersList";

const Characters = ({ characterList, filter, item, favorite }) => {
  return (
    <>
      {item === "pokemons" ? (
        <CharacterListPokemon
          characterList={characterList}
          filter={filter}
          favorite={favorite}
        />
      ) : (
        <CharacterListRickAndMorty
          characterList={characterList}
          filter={filter}
          favorite={favorite}
        />
      )}
    </>
  );
};

export default Characters;

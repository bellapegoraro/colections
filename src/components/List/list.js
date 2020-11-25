import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterListPokemon from "../../pages/Pokemon/charactersList";
import CharacterListRickAndMorty from "../../pages/RickAndMorty/charactersList";
import HeaderCharacters from "../headerCharacters/index";
import { DivCharacters } from "./listStyle";

const List = ({
  characterList,
  getData,
  input,
  filter,
  nextPage,
  previousPage,
  handleFilter,
  handleInput,
  page,
  favoriteP,
  favoriteRM,
  removeFavoriteP,
}) => {
  const { item } = useParams();
  const [listItem, setListItem] = useState(item);
  const rickAndMortyUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon?offset=${
    page * 20
  }&limit=20`;

  const [path, setPath] = useState(() => {
    if (listItem === "rick-and-morty") {
      return rickAndMortyUrl;
    }
    return pokemonUrl;
  });

  const handlePath = () =>
    listItem === "rick-and-morty"
      ? (setPath(pokemonUrl), setListItem("pokemons"))
      : (setPath(rickAndMortyUrl), setListItem("rick-and-morty"));

  useEffect(() => {
    listItem === "rick-and-morty"
      ? getData(rickAndMortyUrl)
      : getData(pokemonUrl);
  }, [page, path]);

  return (
    <>
      {console.log(favoriteP)}
      <HeaderCharacters
        handleInput={handleInput}
        handlePath={handlePath}
        listItem={listItem}
        previousPage={previousPage}
        nextPage={nextPage}
        handleFilter={handleFilter}
        page={page}
      ></HeaderCharacters>
      <DivCharacters>
        {item === "pokemons" ? (
          <CharacterListPokemon
            characterList={characterList}
            filter={filter}
            removeFavoriteP={removeFavoriteP}
            favoriteP={favoriteP}
          />
        ) : (
          <CharacterListRickAndMorty
            characterList={characterList}
            filter={filter}
            favoriteRM={favoriteRM}
          />
        )}
      </DivCharacters>
    </>
  );
};

export default List;

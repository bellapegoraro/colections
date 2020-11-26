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
  favorite,
  removeP,
  removeRM,
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
            removeP={removeP}
            favorite={favorite}
          />
        ) : (
          <CharacterListRickAndMorty
            characterList={characterList}
            filter={filter}
            favorite={favorite}
            removeRM={removeRM}
          />
        )}
      </DivCharacters>
    </>
  );
};

export default List;

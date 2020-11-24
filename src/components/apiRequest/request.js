import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import Characters from "../characters/characters";
import HeaderCharacters from "../headerCharacters/index";
import { DivCharacters } from "./requestStyle";

const Request = () => {
  const { item } = useParams();
  const [characterList, setCharacterList] = useState([]);
  const [filter, setFilter] = useState([]);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
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

  const getData = async (url) => {
    const response = await Axios.get(url);
    setCharacterList([...response.data.results]);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handlePath = () =>
    listItem === "rick-and-morty"
      ? (setPath(pokemonUrl), setListItem("pokemons"))
      : (setPath(rickAndMortyUrl), setListItem("rick-and-morty"));

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleFilter = () => {
    const filtered = characterList.filter(
      (character) => character.name === input
    );
    setFilter([...filtered]);
  };

  useEffect(() => {
    listItem === "rick-and-morty"
      ? getData(rickAndMortyUrl)
      : getData(pokemonUrl);

    console.log(characterList);
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
        <Characters characterList={characterList} filter={filter} />
      </DivCharacters>
    </>
  );
};

export default Request;

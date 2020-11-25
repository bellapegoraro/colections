import { useState, useEffect } from "react";
import Pokemon from "../../pages/Pokemon/index";
import Axios from "axios";

const ContainerP = ({ favoriteP }) => {
  const [characterList, setCharacterList] = useState([]);
  const [filter, setFilter] = useState([]);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  //const [myFavPokemon, setMyFavPokemon] = useState([]);

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

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleFilter = () => {
    const filtered = characterList.filter(
      (character) => character.name === input
    );
    setFilter([...filtered]);
  };
  console.log(favoriteP);
  return (
    <Pokemon
      characterList={characterList}
      getData={getData}
      input={input}
      filter={filter}
      nextPage={nextPage}
      previousPage={previousPage}
      handleFilter={handleFilter}
      handleInput={handleInput}
      page={page}
      favoriteP={favoriteP}
      //   removeFavoriteP={removeFavoriteP}
    />
  );
};

export default ContainerP;

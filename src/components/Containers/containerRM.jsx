import RickAndMorty from "../../pages/RickAndMorty/index";
import { useState, useEffect } from "react";
import Axios from "axios";

const ContainerRM = ({ favoriteRM }) => {
  const [characterList, setCharacterList] = useState([]);
  const [filter, setFilter] = useState([]);
  const [page, setPage] = useState(1);
  // const [myFavRM, setMyFavRM] = useState([]);
  const [input, setInput] = useState("");

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

  //   const favoriteRM = (character) => {
  //     setMyFavRM([...myFavRM, character]);
  //     localStorage.setItem("myFavRM", JSON.stringify(myFavRM));
  //   };

  //   useEffect(() => {
  //     const rickAndMorty = JSON.parse(localStorage.getItem("myFavRM"));
  //     if (rickAndMorty !== null) {
  //       setMyFavRM([...rickAndMorty]);
  //     }
  //     console.log(rickAndMorty);
  //   }, []);

  return (
    <RickAndMorty
      characterList={characterList}
      getData={getData}
      input={input}
      filter={filter}
      nextPage={nextPage}
      previousPage={previousPage}
      handleFilter={handleFilter}
      handleInput={handleInput}
      page={page}
      favoriteRM={favoriteRM}
    />
  );
};

export default ContainerRM;

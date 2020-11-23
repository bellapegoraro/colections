import { useState, useEffect } from "react";
import Axios from "axios";
import Characters from "../../components/characters";

const RickAndMorty = () => {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  const getData = async () => {
    const response = await Axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    setCharacterList([...characterList, ...response.data.results]);
    console.log(response.data.results);
  };
  const changePage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getData();
  }, [page]);
  return (
    <div>
      <Characters characterList={characterList} />
      <button onClick={changePage}>Pŕoxima página</button>
    </div>
  );
};

export default RickAndMorty;

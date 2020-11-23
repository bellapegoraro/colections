import { useState, useEffect } from "react";
import Axios from "axios";
import Characters from "../../components/characters";

const Pokemon = () => {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(20);

  const getData = async () => {
    const response = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`
    );
    console.log(response.data.results);
    setCharacterList([...characterList, ...response.data.results]);
  };

  const changePage = () => {
    setPage(page + 20);
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

export default Pokemon;

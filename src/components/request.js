/* eslint-disable no-unused-expressions */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Characters from "./characters";

const Request = () => {
  const { item } = useParams();
  const [characterList, setCharacterList] = useState([]);
  const [pageRM, setPageRM] = useState(1);
  const [pageP, setPageP] = useState(20);
  const [listItem, setListItem] = useState(item);
  const [path, setPath] = useState(() => {
    if (listItem === "rick-and-morty") {
      return `https://rickandmortyapi.com/api/character/?page=${pageRM}`;
    }
    return `https://pokeapi.co/api/v2/pokemon?offset=${pageP}&limit=20`;
  });

  console.log(path);
  const getData = async () => {
    const response = await Axios.get(path);
    setCharacterList([...characterList, ...response.data.results]);
    console.log(response.data.results);
  };

  const changePage = () => {
    listItem === "rick-and-morty"
      ? setPageRM(pageRM + 1)
      : setPageP(pageP + 20);
  };

  useEffect(() => {
    getData();
  }, [pageRM, pageP, path]);
  return (
    <div>
      <Characters characterList={characterList} />
      <button onClick={changePage}>Pŕoxima página</button>
    </div>
  );
};

export default Request;

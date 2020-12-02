import List from "../../components/List/list";
import { useState } from "react";
import Axios from "axios";

const RickAndMorty = ({ favorite, removeRM }) => {
  const [characterList, setCharacterList] = useState([]);
  const [filter, setFilter] = useState([]);
  const [page, setPage] = useState(1);
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
  return (
    <div>
      <List
        characterList={characterList}
        getData={getData}
        input={input}
        filter={filter}
        nextPage={nextPage}
        previousPage={previousPage}
        handleFilter={handleFilter}
        handleInput={handleInput}
        page={page}
        // favorite={favorite}
        // removeRM={removeRM}
      />
    </div>
  );
};

export default RickAndMorty;

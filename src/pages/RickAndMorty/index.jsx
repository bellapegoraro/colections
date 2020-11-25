import List from "../../components/List/list";

const RickAndMorty = ({
  characterList,
  getData,
  input,
  filter,
  nextPage,
  previousPage,
  handleFilter,
  handleInput,
  page,
  favoriteRM,
}) => {
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
        favoriteRM={favoriteRM}
      />
    </div>
  );
};

export default RickAndMorty;

import List from "../../components/List/list";
const Pokemon = ({
  characterList,
  getData,
  input,
  filter,
  nextPage,
  previousPage,
  handleFilter,
  handleInput,
  page,
  iaiGalera,
  removeFavoriteP,
  favoriteP,
}) => {
  return (
    <div>
      {console.log(favoriteP)}
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
        iaiGalera={iaiGalera}
        removeFavoriteP={removeFavoriteP}
        favoriteP={favoriteP}
      />
    </div>
  );
};

export default Pokemon;

const FavoritePokemon = () => {
  const obj = {
    name: window.localStorage.getItem("favoriteCharactersName"),
    img: window.localStorage.getItem("favoriteCharactersImg"),
  };

  const array = [{ ...obj }];

  return (
    <>
      {array.map(({ name, img }, index) => (
        <div key={index}>
          <p>{name}</p>
          <img alt="character" src={img} />
        </div>
      ))}
    </>
  );
};

export default FavoritePokemon;

const FavoriteRickAndMorty = () => {
  const obj = [
    {
      name: window.localStorage.getItem("favoriteCharactersName"),
      img: window.localStorage.getItem("favoriteCharactersImg"),
    },
  ];

  return (
    <>
      {obj.map(({ name, img }, index) => (
        <div key={index}>
          <p>{name}</p>
          <img alt="character" src={img} />
        </div>
      ))}
    </>
  );
};

export default FavoriteRickAndMorty;

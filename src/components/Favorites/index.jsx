import FavoriteRM from "../../pages/RickAndMorty/favoriteRM";
import FavoriteP from "../../pages/Pokemon/favoriteP";

const FavoriteCharacters = () => {
  const img = window.localStorage.getItem("favoriteCharactersImg");
  return img.endsWith("jpeg") ? <FavoriteRM /> : <FavoriteP />;
};

export default FavoriteCharacters;

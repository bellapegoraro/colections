export const Favorite = (name, img) => {
  let favoriteCharacters = [];
  favoriteCharacters.push({ name, img });
  favoriteCharacters.map(({ name, img }) => {
    localStorage.setItem("favoriteCharactersName", name);
    localStorage.setItem("favoriteCharactersImg", img);
  });
};

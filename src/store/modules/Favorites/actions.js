export const favoriteCharacter = (favorite) => ({
  type: "@favorite/CHARACTER",
  favorite,
});

export const removeCharacter = (list) => ({
  type: "@remove/CHARACTER",
  list,
});

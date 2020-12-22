import { favoriteCharacter, removeCharacter } from "./actions";

export const favoriteCharacterThunk = (favorite) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("favorite")) || [];
  list.push(favorite);
  localStorage.setItem("favorite", JSON.stringify(list));
  dispatch(favoriteCharacter(favorite));
};

export const removeCharacterThunk = (name) => (dispatch, getState) => {
  const { favorite } = getState();
  const list = favorite.filter((character) => character.name !== name);
  localStorage.setItem("favorite", JSON.stringify(list));
  dispatch(removeCharacter(list));
};

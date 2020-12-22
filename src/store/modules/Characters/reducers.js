import { CHARACTERS_POKEMON, CHARACTERS_RICKANDMORTY } from "./actionsTypes";

const stateObj = {
  pokemon: [],
  rickAndMorty: [],
};

export const charactersReducer = (state = stateObj, action) => {
  switch (action.type) {
    case CHARACTERS_RICKANDMORTY:
      state.rickAndMorty = [...action.character];
      return state;
    case CHARACTERS_POKEMON:
      state.pokemon = [...action.character];
      return state;
    default:
      return state;
  }
};

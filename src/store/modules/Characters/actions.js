import { CHARACTERS_POKEMON, CHARACTERS_RICKANDMORTY } from "./actionsTypes";

export const getPokemon = (character) => ({
  type: CHARACTERS_POKEMON,
  character,
});

export const getRickAndMorty = (character) => ({
  type: CHARACTERS_RICKANDMORTY,
  character,
});

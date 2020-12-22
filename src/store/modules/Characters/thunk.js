import { getPokemon, getRickAndMorty } from "./actions";
import Axios from "axios";

export const getPokemonThunk = (page) => (dispatch) => {
  Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`)
    .then((res) => {
      dispatch(getPokemon(res.data.results));
    })
    .catch((err) => console.log(err));
};

export const getRickAndMortyThunk = (page) => (dispatch) => {
  Axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((res) => {
      dispatch(getRickAndMorty(res.data.results));
    })
    .catch((err) => console.log(err));
};

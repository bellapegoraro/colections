import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import favoriteReducer from "./modules/Favorites/reducers";
import { charactersReducer } from "./modules/Characters/reducers";

const reducers = combineReducers({
  favorite: favoriteReducer,
  characters: charactersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import favoriteReducer from "./modules/Favorites/reducers";

const reducers = combineReducers({
  favoriteReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

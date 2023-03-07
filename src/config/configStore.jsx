import { legacy_createStore as createStore, combineReducers } from "redux";
import todo from "../modules/todolists";

const reducers = combineReducers({
  todo,
})

const store = createStore(reducers);

export default store;
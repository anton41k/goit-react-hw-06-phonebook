import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReduser from "./reducer";

const rootReducer = combineReducers({
  contacts: contactsReduser,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

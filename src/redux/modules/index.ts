import { combineReducers } from "redux";
import countApp from "./count";
import userApp from "./user";
const reducerModules = {
  countApp,
  userApp
};
export default combineReducers(reducerModules);

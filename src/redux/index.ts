import { createStore } from "redux";
import reducers from "./modules/index";
const store = createStore(reducers);
export default store;

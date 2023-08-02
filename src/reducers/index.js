import { combineReducers } from "redux";
import { productsReducer, productsDetailReducer } from "./products";

const rootReducer = combineReducers({
  products: productsReducer,
  productsDetail: productsDetailReducer,
});

export default rootReducer;

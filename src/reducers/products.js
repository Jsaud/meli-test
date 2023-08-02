import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_DETAILS_REQUEST,
  FETCH_PRODUCTS_DETAILS_SUCCESS,
  FETCH_PRODUCTS_DETAILS_FAILURE,
} from "../actions";

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const createReducer = (actionTypes) => (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const productsReducer = createReducer({
  REQUEST: FETCH_PRODUCTS_REQUEST,
  SUCCESS: FETCH_PRODUCTS_SUCCESS,
  FAILURE: FETCH_PRODUCTS_FAILURE,
});

const productsDetailReducer = createReducer({
  REQUEST: FETCH_PRODUCTS_DETAILS_REQUEST,
  SUCCESS: FETCH_PRODUCTS_DETAILS_SUCCESS,
  FAILURE: FETCH_PRODUCTS_DETAILS_FAILURE,
});

export { productsReducer, productsDetailReducer };

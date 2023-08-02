// actions.js
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const FETCH_PRODUCTS_DETAILS_REQUEST = "FETCH_PRODUCTS_DETAILS_REQUEST";
export const FETCH_PRODUCTS_DETAILS_SUCCESS = "FETCH_PRODUCTS_DETAILS_SUCCESS";
export const FETCH_PRODUCTS_DETAILS_FAILURE = "FETCH_PRODUCTS_DETAILS_FAILURE";

const createFetchRequestAction = (type) => (param) => ({
  type,
  payload: param
});

const createFetchSuccessAction = (type) => (data) => ({
  type,
  payload: data,
});

const createFetchFailureAction = (type) => (error) => ({
  type,
  payload: error,
});

// Crear acciones para productos
export const fetchProductsRequest = createFetchRequestAction(
  FETCH_PRODUCTS_REQUEST
);
export const fetchProductsSuccess = createFetchSuccessAction(
  FETCH_PRODUCTS_SUCCESS
);
export const fetchProductsFailure = createFetchFailureAction(
  FETCH_PRODUCTS_FAILURE
);

// Crear acciones para detalles de productos
export const fetchProductsDetailsRequest = createFetchRequestAction(
  FETCH_PRODUCTS_DETAILS_REQUEST
);
export const fetchProductsDetailsSuccess = createFetchSuccessAction(
  FETCH_PRODUCTS_DETAILS_SUCCESS
);
export const fetchProductsDetailsFailure = createFetchFailureAction(
  FETCH_PRODUCTS_DETAILS_FAILURE
);

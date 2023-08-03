import { call, put, spawn, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_DETAILS_REQUEST,
  FETCH_PRODUCTS_DETAILS_SUCCESS,
  FETCH_PRODUCTS_DETAILS_FAILURE,
} from "../actions";

// Función para hacer la llamada a la API
const fetchProductsApi = (search) => {
  return axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=20`);
};

// Función para hacer la llamada a la API de detalles de un producto
const fetchProductDetailsApi = (itemId) => {
  return axios.get(`https://api.mercadolibre.com/items/${itemId}`);
};

export function* fetchProductsSaga(action) {
  try {
    const { payload } = action;
    const response = yield call(fetchProductsApi, payload);
    yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
}

export function* fetchProductDetailsSaga(action) {
  try {
    const { payload } = action;
    const response = yield call(fetchProductDetailsApi, payload);
    yield put({ type: FETCH_PRODUCTS_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_PRODUCTS_DETAILS_FAILURE, payload: error.message });
  }
}

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}

export function* watchFetchProductDetails() {
  yield takeLatest(FETCH_PRODUCTS_DETAILS_REQUEST, fetchProductDetailsSaga);
}

export default function* rootSaga() {
  yield spawn(watchFetchProducts);
  yield spawn(watchFetchProductDetails);
}

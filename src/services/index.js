// sagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions';

// Función para hacer la llamada a la API
const fetchProductsApi = (search) => {
  return axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`);
};

// Función generadora del Saga
function* fetchProductsSaga(action) {
  try {
    const { payload } = action;
    const response = yield call(fetchProductsApi, payload);
    yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
}

// Watcher Saga para escuchar las acciones FETCH_PRODUCTS_REQUEST
function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}

export default watchFetchProducts;

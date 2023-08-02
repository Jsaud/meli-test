import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './index';
import rootSaga from '../services/index';

// Crear el middleware de Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Crear el store de Redux
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Ejecutar las sagas
sagaMiddleware.run(rootSaga);

export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
const middleware = [thunk];

import rootReducer from './reducers';
import { CatFactType } from '../types';

export const defaultState = {
  catFactsReducer: {
    count: 0,
    error: '',
    isFetching: false,
    catFacts: [] as CatFactType[],
  },
};

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(...middleware)));

export default store;

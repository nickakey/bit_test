import { combineReducers } from 'redux';
import { catFactsReducer } from './main';
import { defaultState } from '../store';

const rootReducer = combineReducers<typeof defaultState>({
  catFactsReducer,
});

export default rootReducer;

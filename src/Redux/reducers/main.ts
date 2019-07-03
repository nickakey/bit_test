import { INCREMENT, FETCH_CAT_FACTS_FAIL, FETCH_CAT_FACTS_REQUEST, FETCH_CAT_FACTS_SUCCESS } from '../actionNames';

export const catFactsReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case FETCH_CAT_FACTS_REQUEST:
      return {
        ...state,
        error: '',
        isFetching: true,
      };
    case FETCH_CAT_FACTS_FAIL:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    case FETCH_CAT_FACTS_SUCCESS:
      return {
        ...state,
        catFacts: action.catFacts,
        error: '',
        isFetching: false,
      };
    default:
      return state;
  }
};

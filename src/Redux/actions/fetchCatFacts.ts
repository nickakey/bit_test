import { Dispatch } from 'redux';

import { networkFetchCatFacts } from '../../utils/network';

import { FETCH_CAT_FACTS_REQUEST, FETCH_CAT_FACTS_SUCCESS, FETCH_CAT_FACTS_FAIL } from '../actionNames';

/*
 * This is a THUNK. It is a redux pattern for dealing with asynchronicty in Actions.
 */

const fetchCatFacts = () => async (dispatch: Dispatch) => {
  dispatch({
    type: FETCH_CAT_FACTS_REQUEST,
  });
  try {
    const catFacts = await networkFetchCatFacts();
    dispatch({
      catFacts,
      type: FETCH_CAT_FACTS_SUCCESS,
    });
  } catch (error) {
    dispatch({
      error,
      type: FETCH_CAT_FACTS_FAIL,
    });
  }
};

export default fetchCatFacts;

/*
 * It is Redux best practice to have action names be consts instead of strings, Incorrectly typed strings fail silently. Incorrectly typed consts throw errors
 */

export const INCREMENT = 'INCREMENT';
export const FETCH_CAT_FACTS_REQUEST = 'FETCH_CAT_FACTS_REQUEST';
export const FETCH_CAT_FACTS_FAIL = 'FETCH_CAT_FACTS_FAIL';
export const FETCH_CAT_FACTS_SUCCESS = 'FETCH_CAT_FACTS_SUCCESS';

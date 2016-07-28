import * as types from '../constants/ActionTypes';

export function userAdd(name) {
  return {
    type: types.USER_ADD,
    name
  };
}

export function userDelete(id) {
  return {
    type: types.USER_DELETE,
    id
  };
}

export function userSearch(search) {
  return {
    type: types.USER_SEARCH,
    search
  };
}
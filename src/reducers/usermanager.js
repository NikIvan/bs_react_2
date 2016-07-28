import * as types from '../constants/ActionTypes.js';

const initialState = {
  users: [
    { name: 'Alexey Pichugin', id: 0 },
    { name: 'Ivan Nikolaev', id: 1 },
    { name: 'Artur Pogrebnyak', id: 2 }
  ],
  search: ''
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case types.USER_ADD:
      let length = state.users.length;
      const id = length ? state.users[length - 1].id + 1 : 0;
      const name = action.name
      const user = { name, id };

      return Object.assign({}, state, {
        users: state.users.concat(user)
      });
    case types.USER_DELETE:
      let users = state.users.filter((user) => {
        return user.id !== action.id;
      });

      return Object.assign({}, state, {
        users
      });
    case types.USER_SEARCH:
      return Object.assign({}, state, {
        search: action.search
      });
    default:
      return state;
  }
}
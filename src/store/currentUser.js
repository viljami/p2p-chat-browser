import { v4 as uuid } from 'uuid';

const initialState = { name: 'John Doe', id: uuid() };

const UPDATE_CURRENT_USER = 'CURRENT_USER::UPDATE';

export const updateCurrentUser = (name, id) => ({
  type: UPDATE_CURRENT_USER,
  payload: { name }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

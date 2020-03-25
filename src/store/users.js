const initialState = [];

const USER_CREATE = 'USER::CREATE';

export const createUser = (name, id) => ({
  type: USER_CREATE,
  payload: { name, id }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_CREATE:
      return state.concat(action.payload);
    default:
      return state;
  }
};

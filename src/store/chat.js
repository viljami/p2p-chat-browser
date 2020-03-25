
const initialState = [];

const CREATE_MESSAGE = 'MESSAGE::CREATE';

export const createMessage = (msg, creator, created) => ({
  type: CREATE_MESSAGE,
  payload: {
    created,
    creator,
    msg
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return state.concat(action.payload);
    default:
      return state;
  }
};

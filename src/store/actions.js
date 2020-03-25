import { createMessage } from './chat';
import { broadcast } from '../lib/peer';

export const sendMessage = (msg) => (dispatch, getState) => {
  const { currentUser } = getState();
  const action = createMessage(msg, currentUser.id, Date.now());

  broadcast(action);
  dispatch(action);
};

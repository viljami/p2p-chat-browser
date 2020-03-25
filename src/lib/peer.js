import Peer from 'peerjs';
import { updateCurrentUser } from '../store/currentUser.js';
import { createUser } from '../store/users.js';

let peer = null;
let getState_ = null;
let dispatch_ = null;

const connections = [];

const removeConnection = conn => {
  const index = connections.indexOf(conn);

  if (index !== -1) {
    connections.splice(index, 1);
  }
};

const send = action => conn => conn.send(action);

const onOpen = conn => () => {
  const { currentUser } = getState_();
  conn.send(createUser(
    currentUser.name,
    currentUser.id
  ));
};

const onData = data => console.log(data) || dispatch_(data);

export const broadcast = action => connections.forEach(send(action));

export const connect = id => {
  const conn = peer.connect(id);
  connections.push(conn);
  console.log('connect', conn);
  conn.on('data', onData);
  conn.on('open', onOpen(conn));
  conn.on('close', () => {
    console.log('connection close', conn);
    removeConnection(conn);
  });
};

export default (dispatch, getState) => {
  getState_ = getState;
  dispatch_ = dispatch;

  peer = new Peer(getState().currentUser.id, {
    host: 'localhost',
    port: 9000,
    path: '/'
  });

  connections.length = 0;

  peer.on('connection', conn => {
    connections.push(conn);
    console.log('connection', conn);
    conn.on('data', onData);
    conn.on('open', onOpen(conn));
    conn.on('close', () => {
      console.log('connection close', conn);
      removeConnection(conn);
    });
  });

  peer.on('error', console.error);
};

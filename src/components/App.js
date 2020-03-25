import { h } from 'preact';
import Input from './Input.js';
import Messages from './Messages.js';
import Connect from './Connect.js';

export default () => (
  <main>
    <Connect />
    <Messages />
    <Input />
  </main>
);

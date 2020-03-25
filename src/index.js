import { h, render } from 'preact';
import { Provider, connect } from 'react-redux';
import store from './store/store.js';
import App from './components/App.js';

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

window.addEventListener('load', function load() {
  window.removeEventListener('load', load);
  render(<Main />, document.body);
});

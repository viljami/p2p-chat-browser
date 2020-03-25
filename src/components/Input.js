import { h, Component } from 'preact';
import { connect } from 'react-redux';
import { sendMessage } from '../store/actions';

import './Input.css';

class Input extends Component {
  constructor() {
    super();

    this.state = { msg: '' };

    this.onChange = this.onChange.bind(this);
    this.send = this.send.bind(this);
  }

  onChange(e) {
    this.setState({ msg: e.target.value });
  }

  send() {
    this.props.send(this.state.msg);
  }

  render() {
    return (
      <section className="input-container">
        <p>{ this.state.name }</p>

        <textarea onChange={this.onChange}>
          Write message...
        </textarea>

        <button onClick={this.send}>Send</button>
      </section>
    );
  }
}

export default connect(
  ({ currentUser }) => ({
    name: currentUser.name
  }),

  dispatch => ({
    send: msg => dispatch(sendMessage(msg))
  })
)(Input);

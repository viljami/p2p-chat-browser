import { h, Component } from 'preact';
import { connect } from 'react-redux';
import { connect as peerConnect } from '../lib/peer';
import './Connect.css';

class Connect extends Component {
  constructor() {
    super();

    this.state = { id: '' };

    this.onChange = this.onChange.bind(this);
    this.connect = this.connect.bind(this);
  }

  onChange(e) {
    this.setState({ id: e.target.value });
  }

  connect() {
    this.props.connect(this.state.id);
  }

  render() {
    const { currentUser } = this.props;

    return (
      <section className="connect">
        <p>My id: {currentUser.id}</p>

        <input onChange={this.onChange} />

        <button
          onClick={this.connect}
          disabled={!this.state.id}
        >
          Connect
        </button>
      </section>
    );
  }
}

export default connect(
  ({ currentUser }) => ({ currentUser }),
  dispatch => ({ connect: id => peerConnect(id) })
)(Connect);

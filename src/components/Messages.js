import { h } from 'preact';
import { connect } from 'react-redux';
import './Messages.css';

const byId = id => a => a.id === id;

const parseTimestamp = timestamp => {
  const d = new Date(timestamp);
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
};

const Message = ({ msg, creator, created }) => (
  <p className="message">
    <span>{creator} - {parseTimestamp(created)}</span>
    {msg}
  </p>
);

const Messages = ({ currentUser, chat, users }) => (
  <section>
    {
      chat.map(({ msg, creator, created }) => (
        <Message
          msg={msg}
          creator={users.find(byId(creator)) || (currentUser.id === creator && currentUser.name)}
          created={created}
        />
      ))
    }
  </section>
);

export default connect(
  ({ currentUser, chat, users }) => ({
    currentUser,
    chat,
    users
  }),

  null
)(Messages);

import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { hideMessage } from '../../store/slices/messageSlice';
import MESSAGE_LIFETIME from './Message.config';

import './Message.style.scss';

export class Message extends PureComponent {
  static propTypes = {
    message: PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
    }).isRequired,

    hideMessage: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { message } = this.props;
    const { text, type } = message;
    if (prevProps.message.text !== text && prevProps.message.type !== type) {
      this.hideTimeout = setTimeout(() => this.hideMessage(), MESSAGE_LIFETIME);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.hideTimeout);
  }

  hideMessage = () => {
    const { hideMessage: hideCurrentMessage } = this.props;
    hideCurrentMessage();
  };

  render() {
    const { message } = this.props;
    const { text, type } = message;

    const messageClass = classNames('Message', `Message_${type}`, 'animate');

    return (
      !!text && (
        <div className={messageClass}>
          <button className="Message-Button" onClick={this.hideMessage} type="button">
            x
          </button>
          <p className="Message-Text">{text}</p>
        </div>
      )
    );
  }
}

export const mapStateToProps = (state) => ({
  message: state.messages.message,
});

export const mapDispatchToProps = { hideMessage };

export default connect(mapStateToProps, mapDispatchToProps)(Message);

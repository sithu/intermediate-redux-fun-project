import React from 'react';
import PropTypes from 'prop-types';

const ChatWindow = ({ messages }) => {
    return (
        <textarea rows="20">
            {messages}
        </textarea>
    );
}

ChatWindow.propTypes = {
    messages: PropTypes.string.isRequired
}

export default ChatWindow
import { Input, Button, Flex, Typography } from 'antd';
import { socket } from 'api/chat/chat.api';
import { useState, useEffect, useRef } from 'react';
import type { Message } from 'types/types';
import { containerStyles, messagesWrapperStyles } from 'modules/chat/styles';
import { useNavigate } from 'react-router-dom';
import MessageWrapper from 'modules/chat/common/messageWrapper/MessageWrapper';
import { baseContainerStyles } from 'src/styles';

const { TextArea } = Input;
const { Text } = Typography;

const Chat = () => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [newMessage, setNewMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = () => {
    socket.emit('new message', {
      content: newMessage,
    });

    setNewMessage('');
  };

  useEffect(() => {
    socket.auth = {
      token: `Bearer ${localStorage.getItem('token')}`,
    };

    socket.connect();

    socket.on('connect_error', (error) => {
      if (
        error.message === 'Invalid token' ||
        error.message === 'Authentication token missing'
      ) {
        socket.disconnect();
        navigate('/login');
      }
    });

    socket.on('chat history', (messages: Message[]) => {
      setMessages(messages);
      setLoading(false);
    });

    socket.on('new message', (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off('connect_error');
      socket.off('chat history');
      socket.off('new message');
      socket.disconnect();
    };
  }, [navigate]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Flex
      gap="middle"
      vertical
      style={{ ...containerStyles, ...baseContainerStyles }}
    >
      {loading ? (
        <Flex
          align="center"
          justify="center"
          vertical
          style={messagesWrapperStyles}
        >
          <Text>Loading chat...</Text>
        </Flex>
      ) : (
        <Flex gap="middle" align="start" vertical style={messagesWrapperStyles}>
          {messages.map((message) => (
            <MessageWrapper key={message.id} {...message} />
          ))}
          <div ref={messagesEndRef} />
        </Flex>
      )}

      <Flex gap="middle" align="center" justify="space-between">
        <TextArea
          placeholder="Write a message..."
          rows={3}
          value={newMessage}
          disabled={loading}
          onChange={(e) => setNewMessage(e.target.value)}
          onPressEnter={sendMessage}
        />
        <Button onClick={sendMessage} disabled={loading}>
          Send
        </Button>
      </Flex>
    </Flex>
  );
};

export default Chat;

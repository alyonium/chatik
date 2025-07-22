import { Input, Button, Flex, Typography } from 'antd';
import { socket } from 'api/chat/chat.api.ts';
import { useState, useEffect } from 'react';
import type { Message } from 'types/types.ts';
import {
  containerStyles,
  messageStyles,
  messagesWrapperStyles,
  messageTitleWrapperStyles,
  messageWrapperStyles,
  titleStyles
} from 'modules/chat/styles.ts';
import { useNavigate } from 'react-router-dom';
import { getFormattedDate } from 'utils/getFormattedDate.ts';
const { TextArea } = Input;
const { Text } = Typography;

const Chat = () => {
  const [newMessage, setNewMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const navigate = useNavigate();

  const sendMessage = () => {
    socket.emit('new message', {
      content: newMessage
    });

    setNewMessage('');
  };

  useEffect(() => {
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
      // TODO add scroll to end on messages upload and add
      setMessages(messages);
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

  return (
    <Flex gap="middle" vertical style={containerStyles}>
      <Flex gap="middle" align="start" vertical style={messagesWrapperStyles}>
        {messages?.map((item) => {
          return (
            <Flex
              key={item.id}
              align="start"
              vertical
              style={messageWrapperStyles}
            >
              <Flex
                justify="space-between"
                style={messageTitleWrapperStyles}
                wrap
              >
                <Text italic style={titleStyles}>
                  {item.username}
                </Text>
                <Text italic style={titleStyles}>
                  {getFormattedDate(item.created_at)}
                </Text>
              </Flex>

              <Text style={messageStyles}>{item.content}</Text>
            </Flex>
          );
        })}
      </Flex>

      <Flex gap="middle" align="center" justify="space-between">
        <TextArea
          placeholder="Write a message..."
          rows={3}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onPressEnter={sendMessage}
        />
        <Button onClick={sendMessage}>Send</Button>
      </Flex>
    </Flex>
  );
};

export default Chat;

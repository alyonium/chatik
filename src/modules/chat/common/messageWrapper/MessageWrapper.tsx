import {
  messageStyles,
  messageTitleWrapperStyles,
  messageWrapperStyles,
  titleStyles,
} from 'modules/chat/common/messageWrapper/MessageWrapper.styles.ts';
import { Flex, Typography } from 'antd';
import { getFormattedDate } from 'utils/getFormattedDate';
import type { Message } from 'types/types';
const { Text } = Typography;

const MessageWrapper = ({
  username,
  created_at,
  content,
}: Omit<Message, 'id'>) => {
  return (
    <Flex align="start" vertical style={messageWrapperStyles}>
      <Flex justify="space-between" style={messageTitleWrapperStyles} wrap>
        <Text italic style={titleStyles}>
          {username}
        </Text>
        <Text italic style={titleStyles}>
          {getFormattedDate(created_at)}
        </Text>
      </Flex>

      <Text style={messageStyles}>{content}</Text>
    </Flex>
  );
};

export default MessageWrapper;

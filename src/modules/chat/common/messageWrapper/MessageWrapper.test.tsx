import MessageWrapper from 'modules/chat/common/messageWrapper/MessageWrapper';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders MessageWrapper with correct props', () => {
  const message = {
    username: 'Alice',
    content: 'Message for test',
    created_at: new Date().toISOString(),
  };

  render(<MessageWrapper {...message} />);
  expect(screen.getByText(/Alice/)).toBeInTheDocument();
  expect(screen.getByText(/Message for test/)).toBeInTheDocument();
});

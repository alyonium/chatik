import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Form from 'modules/auth/common/form/Form';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { vi } from 'vitest';

const mockSubmitMethod = vi.fn();

const renderForm = () =>
  render(
    <BrowserRouter>
      <ConfigProvider>
        <Form
          formName="login"
          title="Login"
          linkDescription="Don't have an account?"
          link="/register"
          linkButtonText="Register"
          submitButtonText="Log in"
          submitMethod={mockSubmitMethod}
        />
      </ConfigProvider>
    </BrowserRouter>,
  );

describe('AuthForm', () => {
  beforeEach(() => {
    mockSubmitMethod.mockReset();
  });

  it('submits form when valid inputs are provided', async () => {
    renderForm();

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: {
        value: 'Alice',
      },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: {
        value: 'Alice_password',
      },
    });

    fireEvent.click(screen.getByText(/log in/i));

    await waitFor(() => {
      expect(mockSubmitMethod).toHaveBeenCalledWith({
        username: 'Alice',
        password: 'Alice_password',
      });
    });
  });

  it('throw validation errors when inputs are empty', async () => {
    renderForm();

    fireEvent.click(screen.getByText(/log in/i));

    await waitFor(() => {
      expect(screen.getByText(/please input your username!/i));
      expect(screen.getByText(/please input your password!/i));
    });

    expect(mockSubmitMethod).not.toHaveBeenCalled();
  });
});

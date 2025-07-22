import { type FormProps as AntFormProps, notification } from 'antd';
import { Button, Form as AntForm, Input, Typography, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {
  formStyles,
  textStyles,
  titleStyles,
  linkStyles
} from 'modules/auth/components/login/styles.ts';
import { Link } from 'react-router-dom';
import type { UserCredentials, UserInfo } from 'types/types.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Item } = AntForm;
const { Title, Paragraph } = Typography;

type FormProps = {
  formName: string;
  title: string;
  submitButtonText: string;
  linkDescription: string;
  linkButtonText: string;
  link: string;
  submitMethod: (values: UserCredentials) => Promise<UserInfo>;
};

const Form = ({
  formName,
  title,
  linkDescription,
  link,
  linkButtonText,
  submitButtonText,
  submitMethod
}: FormProps) => {
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const openNotification = ({
    message,
    description
  }: {
    message: string;
    description: string;
  }) => {
    api.error({
      message,
      description,
      placement: 'top'
    });
  };

  const onSubmit = async (values: AntFormProps<UserCredentials>) => {
    setLoading(true);

    try {
      const { username, password } = values;
      const { token, id }: Pick<UserInfo, 'token' | 'id'> = await submitMethod({
        username,
        password
      });

      localStorage.setItem('Token', token);
      localStorage.setItem('Id', `${id}`);
      localStorage.setItem('Username', username);

      navigate('/chat');
    } catch (error) {
      openNotification({
        message: 'Error',
        description: error?.message || 'Unknown error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <AntForm
        name={formName}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        autoComplete="off"
        style={formStyles}
      >
        <Title level={3} style={titleStyles}>
          {title}
        </Title>

        <Item<UserCredentials>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Item>

        <Item<UserCredentials>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Item>

        <Button type="primary" htmlType="submit" block disabled={loading}>
          {!loading ? (
            <>{submitButtonText}</>
          ) : (
            <Spin indicator={<LoadingOutlined spin />} />
          )}
        </Button>

        <Paragraph style={textStyles}>
          {linkDescription}{' '}
          <Link to={link} style={linkStyles}>
            {linkButtonText}
          </Link>
        </Paragraph>
      </AntForm>
    </>
  );
};

export default Form;

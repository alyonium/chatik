import { Outlet } from 'react-router-dom';
import { Layout, Flex } from 'antd';
import { Typography } from 'antd';
import {
  headerStyle,
  layoutStyle,
  contentStyle,
  titleStyles,
} from './styles.ts';

const { Title } = Typography;
const { Header, Content } = Layout;

const BaseLayout = () => {
  return (
    <Flex gap="middle" align="center" wrap>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Title style={titleStyles}>chatik 💬</Title>
        </Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Flex>
  );
};

export default BaseLayout;

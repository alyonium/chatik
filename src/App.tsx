import './App.css';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router';
import AppRouter from './router/AppRouter';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#21005d',
            },
          }}
        >
          <AppRouter />
        </ConfigProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;

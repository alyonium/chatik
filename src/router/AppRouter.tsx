import { Routes, Route } from 'react-router-dom';
import BaseLayout from 'components/baseLayout/BaseLayout';
import Login from 'modules/auth/components/login/Login';
import Register from 'modules/auth/components/register/Register';
import Chat from 'modules/chat/Chat';
import { Navigate } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Navigate to="/chat" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

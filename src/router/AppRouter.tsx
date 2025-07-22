import { Routes, Route } from 'react-router-dom';
import BaseLayout from 'components/baseLayout/BaseLayout.tsx';
import Login from 'modules/auth/components/login/Login.tsx';
import Register from 'modules/auth/components/register/Register.tsx';
import Chat from 'modules/chat/Chat.tsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

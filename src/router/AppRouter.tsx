import { Routes, Route } from 'react-router-dom';
import BaseLayout from 'components/baseLayout/BaseLayout';
import Login from 'modules/auth/components/login/Login';
import Register from 'modules/auth/components/register/Register';
import Chat from 'modules/chat/Chat';
import { Navigate } from 'react-router-dom';
import { ROUTE } from 'router/const.ts';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path={ROUTE.LOGIN} element={<Login />} />
        <Route path={ROUTE.REGISTER} element={<Register />} />
        <Route path={ROUTE.CHAT} element={<Chat />} />
        <Route path="*" element={<Navigate to={ROUTE.CHAT} replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

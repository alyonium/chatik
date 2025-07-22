import { Routes, Route } from 'react-router-dom';
import AuthLayout from 'modules/auth/AuthLayout.tsx';
import Login from 'modules/auth/components/login/Login.tsx';
import Register from 'modules/auth/components/register/Register.tsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

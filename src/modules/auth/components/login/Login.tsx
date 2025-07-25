import Form from 'modules/auth/common/form/Form';
import { authApi } from 'api/auth/auth.api';
import { ROUTE } from 'router/const.ts';

const Login = () => {
  return (
    <Form
      formName="login"
      title="Login"
      submitButtonText="Login"
      linkDescription="Don't have an account?"
      linkButtonText="Sign up"
      link={ROUTE.REGISTER}
      submitMethod={authApi.login}
    />
  );
};

export default Login;

import Form from 'modules/auth/common/form/Form';
import { authApi } from 'api/auth/auth.api';

const Login = () => {
  return (
    <Form
      formName="login"
      title="Login"
      submitButtonText="Login"
      linkDescription="Don't have an account?"
      linkButtonText="Sign up"
      link="/register"
      submitMethod={authApi.login}
    />
  );
};

export default Login;

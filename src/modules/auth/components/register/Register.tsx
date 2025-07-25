import Form from 'modules/auth/common/form/Form';
import { authApi } from 'api/auth/auth.api';
import { ROUTE } from 'router/const.ts';

const Register = () => {
  return (
    <Form
      formName="register"
      title="Sign up"
      submitButtonText="Sign up"
      linkDescription="Already have an account?"
      linkButtonText="Login"
      link={ROUTE.LOGIN}
      submitMethod={authApi.register}
    />
  );
};

export default Register;

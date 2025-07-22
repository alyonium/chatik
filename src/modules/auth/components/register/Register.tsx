import Form from 'modules/auth/common/form/Form.tsx';
import { authApi } from 'api/auth/auth.api.ts';

const Register = () => {
  return (
    <Form
      formName="register"
      title="Sign up"
      submitButtonText="Sign up"
      linkDescription="Already have an account?"
      linkButtonText="Login"
      link="/login"
      submitMethod={authApi.register}
    />
  );
};

export default Register;

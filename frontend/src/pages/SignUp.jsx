import { Helmet } from 'react-helmet';
import SignUp from '../components/SignUp';

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <SignUp />
      </div>
    </>
  );
};

export default SignUpPage;

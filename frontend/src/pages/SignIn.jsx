import { Helmet } from 'react-helmet';
import SignIn from '../components/SignIn';

const SignInPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign in - Nhost</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <SignIn />
      </div>

    </>

  );
};

export default SignInPage;


import { useSignUpEmailPassword } from '@nhost/react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Spinner from './Spinner';
import { logo } from '../assets';

// Define the classes at the top of the file
const containerStyle = "w-full max-w-md mx-auto";
const cardStyle = "flex flex-col items-center p-12 bg-black text-white rounded-lg shadow-md border border-white";
const logoWrapperStyle = "h-6 mb-12";
const formStyle = "w-full mt-12 space-y-6";
const inputGroupStyle = "w-full flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-6";
const buttonStyle = "w-full font-medium flex justify-center items-center py-3 rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50";
const textStyle = "mt-6 text-center text-white";
const linkStyle = "text-blue-400 hover:text-blue-700 hover:underline";
const inputStyle = "w-full py-3 px-4 rounded-md text-white bg-black border border-white focus:outline-none focus:border-white focus:ring-0";


const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    signUpEmailPassword,
    isLoading,
    isSuccessful,
    needsEmailVerification,
    isError,
    error,
  } = useSignUpEmailPassword();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUpEmailPassword(email, password, {
        displayName: `${firstName} ${lastName}`.trim(),
        metadata: {
          firstName,
          lastName,
        },
      });
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  };

  if (isSuccessful) {
    return <Navigate to="/" replace={true} />;
  }

  const disableForm = isLoading || needsEmailVerification;

  return (
    <div className={`${containerStyle} min-h-screen flex items-center justify-center bg-black text-white`}>
      <div className={cardStyle}>
        <Link to="/join">
          <div className={logoWrapperStyle}>
            <img src={logo} alt="logo" className="w-[248px] h-[64px]" />
          </div>
        </Link>
        <form onSubmit={handleOnSubmit} className={formStyle}>
          {needsEmailVerification ? (
            <p className="mt-12 text-center text-white">
              Please check your email and click on the verification link to verify your email!
            </p>
          ) : null}

          <div className={inputGroupStyle}>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              disabled={disableForm}
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              disabled={disableForm}
              className={inputStyle}
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={disableForm}
            className={inputStyle}
          />
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={disableForm}
            className={inputStyle}
          />

          <button
            type="submit"
            className={buttonStyle}
            disabled={isLoading || disableForm}
          >
            {isLoading ? <Spinner /> : 'Create account'}
          </button>

          {isError && <p className="mt-4 text-center text-red-500">Error: {error.message}</p>}
          {needsEmailVerification && (
            <p className="mt-4 text-center text-red-500">Please verify your email address to continue.</p>
          )}
        </form>

        <p className={textStyle}>
          Already have an account?{' '}
          <Link to="/sign-in" className={linkStyle}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

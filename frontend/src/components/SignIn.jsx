import styles from '../styles/components/SignIn.module.css';
import { useSignInEmailPassword } from '@nhost/react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Input from './Input';
import Spinner from './Spinner';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    signInEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error }
    = useSignInEmailPassword();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    signInEmailPassword(email, password)
  };

  if (isSuccess) {
    return <Navigate to='/' replace={true} />
  }

  const disableForm = isLoading || needsEmailVerification;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link to="/join">
          <div className={styles['logo-wrapper']}>
            <img className={styles.logo} src={process.env.PUBLIC_URL + 'logo.svg'} alt="logo" />
          </div>
        </Link>
        {needsEmailVerification ? (
          <p className={styles['verification-text']}>
            Please check your email and click on the verification link to verify your email!
          </p>
        ) : (
          <form onSubmit={handleOnSubmit} className={styles.form}>
            <Input
              type="email"
              label="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={disableForm}
              required
            />

            <Input
              type="password"
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              disabled={disableForm}
              required
            />

            <button type="submit" className={styles.button} disabled={isLoading}>
              {isLoading ? <Spinner /> : 'Sign in'}
            </button>

            {isError && <p>Error: {error.message}</p>}
            {needsEmailVerification && <p>Please verify your email address to continue.</p>}
          </form>)}
      </div>

      <p className={styles.text}>
        No account yet?{' '}
        <Link to="/sign-up" className={styles.link}>
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
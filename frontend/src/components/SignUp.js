import styles from '../styles/components/SignUp.module.css';
import { useSignUpEmailPassword } from '@nhost/react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Input from './Input';
import Spinner from './Spinner';

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
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles['logo-wrapper']}>
          <img className={styles.logo} src={process.env.PUBLIC_URL + 'logo.svg'} alt="logo" />
        </div>
        <form onSubmit={handleOnSubmit} className={styles.form}>
          {needsEmailVerification ? (
            <p className={styles['verification-text']}>
              Please check your email and click on the verification link to verify your email!
            </p>
          ) : null}

          <div className={styles['input-group']}>
            <Input
              label="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              disabled={disableForm}
            />
            <Input
              label="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              disabled={disableForm}
            />
          </div>
          <Input
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={disableForm}
          />
          <Input
            type="password"
            label="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={disableForm}
          />

          <button
            type="submit"
            className={styles.button}
            disabled={isLoading || disableForm}
          >
            {isLoading ? <Spinner /> : 'Create account'}
          </button>

          {isError && <p>Error: {error.message}</p>}
          {needsEmailVerification && (
            <p>Please verify your email address to continue.</p>
          )}
        </form>
      </div>

      <p className={styles.text}>
        Already have an account?{' '}
        <Link to="/sign-in" className={styles.link}>
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;

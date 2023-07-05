import { Link } from 'react-router-dom';
import styles from '../styles/components/SignUp.module.css';

const Dashboard = () => {

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles['logo-wrapper']}>
          <img className={styles.logo} src={process.env.PUBLIC_URL + 'logo.svg'} alt="logo" />
        </div>
        <div className={styles.form}>
          <h1>Thanks for signing in!</h1>
          <p>The app is still a work in progress. We'll keep you updated!</p>
        </div>
      </div>
      <p className={styles.text}>
        Not your account?{' '}
        <Link to="/sign-in" className={styles.link}>
          Sign in with a different account
        </Link>
      </p>
    </div>
  );
};

export default Dashboard;

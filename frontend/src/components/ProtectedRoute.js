import styles from '../styles/components/ProtectedRoute.module.css';
import { useAuthenticationStatus } from '@nhost/react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from './Spinner';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuthenticationStatus(); // <-- Fixed here
    const location = useLocation(); // <-- And here

    if (isLoading) {
        return (
            <div className={styles.container}>
                <Spinner />
            </div>
        )
    }

    if (!isAuthenticated) {
        return <Navigate to="/sign-in" state={{ from: location }} replace />
    }

    console.log('ProtectedRoute rendered'); // <-- Added for debugging
    return children;
}

export default ProtectedRoute;

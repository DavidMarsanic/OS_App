import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { NhostClient, NhostProvider } from '@nhost/react'
import Layout from './components/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import { NhostApolloProvider } from '@nhost/react-apollo';

// Use environment variables for Nhost configuration
const nhost = new NhostClient({
  backendUrl: `https://${process.env.REACT_APP_NHOST_SUBDOMAIN}.nhost.app`,
  region: process.env.REACT_APP_NHOST_REGION
})


function App() {
  console.log('App component rendered'); // <-- Added for debugging
  return (
    <NhostProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <BrowserRouter>
          <Routes>
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster />
      </NhostApolloProvider>
    </NhostProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { NhostClient, NhostProvider } from '@nhost/react'
import { Layout, ProtectedRoute } from './components';
import {
  SignUp, SignIn, Dashboard, Profile, Test, LandingPage
} from './pages';
import { NhostApolloProvider } from '@nhost/react-apollo';
import './index.css';

// Use environment variables for Nhost configuration
const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
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
            <Route path="/join" element={<LandingPage />} />
            <Route path="/test" element={<Test />} />
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

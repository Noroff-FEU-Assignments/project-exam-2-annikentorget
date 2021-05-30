import Layout from './components/layout/Layout';
import FooterPage from './components/layout/Footer';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
    <AuthProvider>
    <Layout />
    <FooterPage />
  </AuthProvider>
  </>
  );
}

export default App;
import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { getCurrentUser } from './utils/auth';

const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const Materi = lazy(() => import('./pages/Materi'));
const MateriDetail = lazy(() => import('./pages/MateriDetail'));
const Quiz = lazy(() => import('./pages/Quiz'));
const Playground = lazy(() => import('./pages/Playground'));
const Progress = lazy(() => import('./pages/Progress'));
const Tentang = lazy(() => import('./pages/Tentang'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Sertifikat = lazy(() => import('./pages/Sertifikat'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));
const Profil = lazy(() => import('./pages/Profil'));

function ProtectedLayout({ children }) {
  const user = getCurrentUser();
  if (!user) return <Navigate to="/login" replace />;
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-primary font-bold">Loading...</div>
          </div>
        }
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <ProtectedLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/materi" element={<Materi />} />
                  <Route path="/materi/:id" element={<MateriDetail />} />
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="/playground" element={<Playground />} />
                  <Route path="/progress" element={<Progress />} />
                  <Route path="/tentang" element={<Tentang />} />
                  <Route path="/sertifikat" element={<Sertifikat />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                  <Route path="/profil" element={<Profil />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </ProtectedLayout>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
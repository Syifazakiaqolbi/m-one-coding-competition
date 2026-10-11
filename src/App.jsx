import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Materi from './pages/Materi';
import MateriDetail from './pages/MateriDetail';
import Quiz from './pages/Quiz';
import Playground from './pages/Playground';
import Progress from './pages/Progress';
import Tentang from './pages/Tentang';
import NotFound from './pages/NotFound';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/materi" element={<Materi />} />
            <Route path="/materi/:id" element={<MateriDetail />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
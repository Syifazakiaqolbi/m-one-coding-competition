import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Materi from './pages/Materi';
import MateriDetail from './pages/MateriDetail';
import Quiz from './pages/Quiz';
import Playground from './pages/Playground';
import Progress from './pages/Progress';

function App() {
  return (
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
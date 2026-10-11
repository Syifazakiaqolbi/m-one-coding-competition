import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Materi from './pages/Materi';
import MateriDetail from './pages/MateriDetail';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materi" element={<Materi />} />
          <Route path="/materi/:id" element={<MateriDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
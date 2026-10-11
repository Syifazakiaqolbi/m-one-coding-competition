import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Star } from 'lucide-react';
import { getProgress } from '../utils/progress';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [poin, setPoin] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setPoin(getProgress().poin);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Materi', path: '/materi' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Playground', path: '/playground' },
    { name: 'Progress', path: '/progress' },
    { name: 'Tentang', path: '/tentang' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Code2 className="text-white" size={24} />
            </div>
            <span className="text-xl font-extrabold text-primary">CodeKids</span>
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/progress"
              className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold text-sm hover:bg-yellow-200 transition-all"
            >
              <Star size={14} className="fill-yellow-500 text-yellow-500" />
              {poin}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-700 font-semibold hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
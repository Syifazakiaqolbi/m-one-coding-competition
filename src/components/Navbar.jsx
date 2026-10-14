import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code2, Star, LogOut, User } from 'lucide-react';
import { getProgress } from '../utils/progress';
import { getCurrentUser, logout } from '../utils/auth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [poin, setPoin] = useState(0);
  const [user, setUser] = useState(getCurrentUser());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setPoin(getProgress().poin);
    setUser(getCurrentUser());
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Materi', path: '/materi' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Playground', path: '/playground' },
    { name: 'Progress', path: '/progress' },
    { name: 'Peringkat', path: '/leaderboard' },
    { name: 'Sertifikat', path: '/sertifikat' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    if (window.confirm('Yakin mau logout?')) {
      logout();
      navigate('/login');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2" aria-label="CodeKids Home">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
              <Code2 className="text-white" size={20} />
            </div>
            <span className="text-lg font-extrabold text-primary">CodeKids</span>
          </Link>

          <div className="hidden lg:flex items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold transition-colors ${
                  isActive(link.path) ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
              <Link
                to="/progress"
                className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded-full font-bold text-xs hover:bg-yellow-200 transition-all"
              >
                <Star size={12} className="fill-yellow-500 text-yellow-500" /> {poin}
              </Link>

              {user && (
                <Link
                  to="/profil"
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-xs transition-all ${
                    isActive('/profil')
                      ? 'bg-primary text-white'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  }`}
                  aria-label="Profil saya"
                >
                  <span className="text-sm">{user.avatar}</span>
                  {user.username}
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-red-500 transition-colors p-1"
                aria-label="Logout"
              >
                <LogOut size={16} />
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-3 border-t">
            {user && (
              <Link
                to="/profil"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-2 rounded-xl mb-2 font-bold text-sm"
              >
                <span className="text-xl">{user.avatar}</span> Hai, {user.username}!
              </Link>
            )}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 font-semibold hover:text-primary text-sm"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="mt-2 w-full flex items-center gap-2 text-red-500 font-bold py-2 text-sm"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
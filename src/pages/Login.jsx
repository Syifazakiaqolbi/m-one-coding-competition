import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Sparkles, User, ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';

const avatarPilihan = ['🦊', '🐱', '🐼', '🦁', '🐨', '🐸', '🦉', '🐯'];

export default function Login() {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('🦊');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length < 2) {
      setError('Nama minimal 2 karakter ya! 😊');
      return;
    }
    login(username, avatar);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating emoji dekorasi */}
      {['💻', '🚀', '⭐', '🎨', '🎮', '🏆', '✨', '📚'].map((e, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute text-4xl md:text-5xl opacity-30 pointer-events-none select-none"
          style={{
            top: `${10 + (i * 12) % 80}%`,
            left: i % 2 === 0 ? `${5 + i * 3}%` : 'auto',
            right: i % 2 === 1 ? `${5 + i * 3}%` : 'auto',
          }}
        >
          {e}
        </motion.div>
      ))}

      {/* Blob background */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10"
      >
        {/* Header dengan gradient */}
        <div className="bg-gradient-to-r from-primary to-purple-600 p-6 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-yellow-300/30 rounded-full blur-2xl"></div>

          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="w-20 h-20 mx-auto mb-3 bg-white rounded-3xl flex items-center justify-center shadow-xl"
          >
            <Code2 className="text-primary" size={40} />
          </motion.div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-1">
            Selamat Datang! 👋
          </h1>
          <p className="text-white/90 font-semibold text-sm">
            Ayo mulai petualangan coding-mu!
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Pilih Avatar */}
            <div>
              <label className="block text-sm font-extrabold text-gray-700 mb-2 text-center">
                Pilih Avatar Favoritmu 🎨
              </label>
              <div className="grid grid-cols-4 gap-2">
                {avatarPilihan.map((av) => (
                  <motion.button
                    key={av}
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAvatar(av)}
                    className={`aspect-square rounded-2xl flex items-center justify-center text-3xl transition-all ${
                      avatar === av
                        ? 'bg-gradient-to-br from-primary to-purple-600 shadow-lg scale-105'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {av}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Input Nama */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-extrabold text-gray-700 mb-2"
              >
                Nama Panggilanmu ✏️
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl pointer-events-none">
                  {avatar}
                </div>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError('');
                  }}
                  placeholder="Contoh: Salma"
                  maxLength={20}
                  className="w-full pl-14 pr-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 focus:outline-none font-bold text-lg transition-all"
                  autoFocus
                />
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm font-bold mt-2 flex items-center gap-1"
                >
                  ⚠️ {error}
                </motion.p>
              )}
            </div>

            {/* Tombol */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-4 rounded-2xl font-extrabold text-lg shadow-xl flex items-center justify-center gap-2 hover:shadow-2xl transition-all group"
            >
              <Rocket size={22} className="group-hover:translate-x-1 transition-transform" />
              Mulai Belajar
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>

          {/* Info benefits */}
          <div className="mt-5 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-3">
            <div className="flex items-start gap-2">
              <Sparkles size={16} className="text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="text-xs">
                <p className="font-extrabold text-yellow-800 mb-1">
                  Yang kamu dapatkan:
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-yellow-700 font-semibold">
                  <span>📚 9 Materi</span>
                  <span>🎯 15 Level Quiz</span>
                  <span>🏅 Badge</span>
                  <span>🏆 Sertifikat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400 font-semibold flex items-center justify-center gap-1">
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
              Progressmu tersimpan otomatis
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
            </p>
          </div>
        </div>
      </motion.div>

      {/* CSS untuk animasi blob */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}
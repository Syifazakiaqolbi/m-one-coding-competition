import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { materiList } from '../data/materi';
import { getProgress } from '../utils/progress';
import MateriModal from '../components/MateriModal';

export default function Materi() {
  const [filter, setFilter] = useState('Semua');
  const [selectedMateri, setSelectedMateri] = useState(null);
  const [progress, setProgress] = useState(getProgress());

  const kategoriList = ['Semua', 'HTML', 'CSS', 'JavaScript'];
  const filteredMateri =
    filter === 'Semua' ? materiList : materiList.filter((m) => m.kategori === filter);

  const kategoriColor = {
    Semua: 'from-indigo-500 to-purple-500',
    HTML: 'from-orange-400 to-red-500',
    CSS: 'from-blue-400 to-cyan-500',
    JavaScript: 'from-yellow-400 to-orange-500',
  };

  const handleCloseModal = () => {
    setSelectedMateri(null);
    setProgress(getProgress());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-yellow-50 to-pink-50 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 relative z-10">
        {/* Header super compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">
            📚 Materi Belajar
          </h1>
          <p className="text-gray-600 font-semibold text-sm">
            Klik kartu untuk langsung belajar! ✨
          </p>
        </motion.div>

        {/* Filter compact */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-4">
          {kategoriList.map((k) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`px-3 py-1.5 rounded-full font-extrabold text-xs transition-all ${
                filter === k
                  ? `bg-gradient-to-r ${kategoriColor[k]} text-white shadow-md scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              {k === 'Semua' && '🌟 '}
              {k === 'HTML' && '📄 '}
              {k === 'CSS' && '🎨 '}
              {k === 'JavaScript' && '⚡ '}
              {k}
            </button>
          ))}
        </div>

        {/* Grid super compact — 9 kartu dalam 1 layar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5">
          {filteredMateri.map((m, i) => {
            const isDone = progress.materiSelesai.includes(m.id);
            return (
              <motion.button
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedMateri(m)}
                className="text-left bg-white rounded-2xl p-3 border-2 border-white shadow-md hover:shadow-xl transition-all relative overflow-hidden"
              >
                {isDone && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 text-white text-xs font-extrabold rounded-full shadow flex items-center justify-center">
                    ✓
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-xl ${m.warna} flex items-center justify-center text-2xl shadow-sm mb-2`}
                >
                  {m.icon}
                </div>

                <span
                  className={`inline-block text-[9px] font-extrabold px-2 py-0.5 rounded-full ${m.warna} mb-1`}
                >
                  {m.kategori}
                </span>

                <h3 className="text-xs font-extrabold text-gray-900 mb-0.5 leading-tight line-clamp-2">
                  {m.judul}
                </h3>

                <div className="flex items-center gap-1 mt-1.5 text-[10px] text-gray-500 font-bold">
                  <Clock size={10} /> {m.durasi}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* CTA compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary to-purple-600 rounded-2xl px-6 py-4 shadow-xl">
            <h2 className="text-base font-extrabold text-white mb-2">
              Sudah selesai belajar? 🎯
            </h2>
            <a
              href="/quiz"
              className="inline-block bg-white text-primary px-5 py-2 rounded-full font-extrabold text-sm hover:scale-105 transition-transform shadow-lg"
            >
              Mulai Quiz 🚀
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <MateriModal
        materi={selectedMateri}
        isOpen={!!selectedMateri}
        onClose={handleCloseModal}
      />
    </div>
  );
}
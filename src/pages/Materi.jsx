import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { materiList } from '../data/materi';

export default function Materi() {
  const [filter, setFilter] = useState('Semua');
  const kategoriList = ['Semua', 'HTML', 'CSS', 'JavaScript'];

  const filteredMateri =
    filter === 'Semua'
      ? materiList
      : materiList.filter((m) => m.kategori === filter);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Materi <span className="text-primary">Belajar</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih materi favoritmu dan mulai belajar coding dengan
            menyenangkan!
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {kategoriList.map((k) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                filter === k
                  ? 'bg-primary text-white shadow-lg shadow-indigo-200'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        {/* Grid Materi */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMateri.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={`/materi/${m.id}`}
                className="block bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all hover:-translate-y-2 h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${m.warna} flex items-center justify-center text-2xl`}
                  >
                    {m.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                    {m.level}
                  </span>
                </div>
                <span
                  className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${m.warna} mb-3`}
                >
                  {m.kategori}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {m.judul}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {m.deskripsi}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock size={16} />
                  <span>{m.durasi}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredMateri.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
            <p>Belum ada materi untuk kategori ini.</p>
          </div>
        )}
      </div>
    </div>
  );
}
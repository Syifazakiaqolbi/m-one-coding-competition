import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Sparkles, Star } from 'lucide-react';
import { materiList } from '../data/materi';
import { tandaiMateriSelesai } from '../utils/progress';
import { useToast } from '../utils/useToast';

export default function MateriDetail() {
  const { id } = useParams();
  const materi = materiList.find((m) => m.id === id);
  const { showToast, ToastComponent } = useToast();

  if (!materi) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-4">
        <div className="text-8xl mb-6">😢</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Materi tidak ditemukan
        </h1>
        <Link to="/materi" className="text-primary font-bold hover:underline text-lg">
          ← Kembali ke daftar materi
        </Link>
      </div>
    );
  }

  const handleTandaiSelesai = () => {
    tandaiMateriSelesai(materi.id);
    showToast('Materi ditandai selesai! +10 poin 🎉');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-yellow-50 to-pink-50 pt-24 pb-16 relative overflow-hidden">
      {ToastComponent}

      {/* Dekorasi */}
      <div className="absolute top-32 right-10 text-5xl opacity-20 animate-bounce">✨</div>
      <div className="absolute bottom-40 left-10 text-6xl opacity-20 animate-pulse">🎈</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link
          to="/materi"
          className="inline-flex items-center gap-2 bg-white text-gray-700 hover:text-primary font-extrabold px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all mb-6 hover:scale-105"
        >
          <ArrowLeft size={20} />
          Kembali
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-white rounded-3xl p-8 shadow-2xl mb-8 overflow-hidden"
        >
          {/* Dekorasi sudut */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-yellow-200 to-pink-200 rounded-full opacity-40 blur-2xl"></div>

          <div className="relative">
            <div className="flex items-center gap-5 mb-5">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`w-24 h-24 rounded-3xl ${materi.warna} flex items-center justify-center text-5xl shadow-xl flex-shrink-0`}
              >
                {materi.icon}
              </motion.div>
              <div>
                <span
                  className={`inline-block text-xs font-extrabold px-4 py-1.5 rounded-full ${materi.warna} mb-3`}
                >
                  {materi.kategori}
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  {materi.judul}
                </h1>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-6 font-semibold leading-relaxed">
              {materi.deskripsi}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 bg-indigo-100 text-indigo-700 font-bold px-4 py-2 rounded-full">
                <Clock size={16} /> {materi.durasi}
              </span>
              <span className="flex items-center gap-2 bg-yellow-100 text-yellow-700 font-bold px-4 py-2 rounded-full">
                <Star size={16} className="fill-yellow-500 text-yellow-500" /> Level {materi.level}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Konten */}
        <div className="space-y-6">
          {materi.konten.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {item.tipe === 'teks' && (
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-4 border-white relative">
                  <div className="absolute -left-3 top-6 w-3 h-16 bg-gradient-to-b from-primary to-purple-500 rounded-r-full"></div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-semibold">
                    {item.isi}
                  </p>
                </div>
              )}

              {item.tipe === 'kode' && (
                <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-5 py-4 bg-gray-800">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-400"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-green-400"></div>
                    <span className="ml-3 text-xs text-gray-400 font-mono font-bold uppercase tracking-wider">
                      {item.bahasa} code
                    </span>
                    <span className="ml-auto text-xs text-gray-500">✨ Contoh</span>
                  </div>
                  <pre className="p-6 text-gray-100 font-mono text-sm md:text-base overflow-x-auto leading-relaxed">
                    <code>{item.isi}</code>
                  </pre>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-br from-primary via-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-4 left-4 text-4xl opacity-30">🎉</div>
          <div className="absolute bottom-4 right-4 text-4xl opacity-30">🚀</div>

          <div className="text-6xl mb-4">🌟</div>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
            Keren! Kamu Sudah Selesai!
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 font-semibold">
            Tandai selesai dan uji kemampuanmu dengan quiz seru!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTandaiSelesai}
              className="bg-white text-primary px-8 py-4 rounded-full font-extrabold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              ✓ Tandai Selesai
            </motion.button>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/quiz"
                className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-extrabold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Mulai Quiz 🎯
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
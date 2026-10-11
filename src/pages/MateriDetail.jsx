import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, CheckCircle } from 'lucide-react';
import { materiList } from '../data/materi';
import { tandaiMateriSelesai } from '../utils/progress';

export default function MateriDetail() {
  const { id } = useParams();
  const materi = materiList.find((m) => m.id === id);

  if (!materi) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Materi tidak ditemukan 😢
        </h1>
        <Link to="/materi" className="text-primary font-bold hover:underline">
          ← Kembali ke daftar materi
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/materi"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary font-semibold mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Kembali ke Materi
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-lg mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`w-16 h-16 rounded-2xl ${materi.warna} flex items-center justify-center text-3xl`}
            >
              {materi.icon}
            </div>
            <div>
              <span
                className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${materi.warna} mb-2`}
              >
                {materi.kategori}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                {materi.judul}
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-4">{materi.deskripsi}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Clock size={16} /> {materi.durasi}
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle size={16} /> Level {materi.level}
            </span>
          </div>
        </motion.div>

        <div className="space-y-6">
          {materi.konten.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {item.tipe === 'teks' && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {item.isi}
                  </p>
                </div>
              )}
              {item.tipe === 'kode' && (
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="ml-2 text-xs text-gray-400 font-mono">
                      {item.bahasa}
                    </span>
                  </div>
                  <pre className="p-6 text-gray-100 font-mono text-sm overflow-x-auto">
                    <code>{item.isi}</code>
                  </pre>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center bg-gradient-to-br from-primary to-indigo-700 rounded-3xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Sudah paham materinya?</h2>
          <p className="mb-6 opacity-90">
            Tandai selesai dan uji pemahamanmu dengan quiz!
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => {
                tandaiMateriSelesai(materi.id);
                alert('🎉 Materi ditandai selesai! +10 poin');
              }}
              className="inline-block bg-white text-primary px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
              ✓ Tandai Selesai
            </button>
            <Link
              to="/quiz"
              className="inline-block bg-secondary text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Mulai Quiz 🎯
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
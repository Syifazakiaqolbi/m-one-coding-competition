import { motion } from 'framer-motion';
import { Award, Download, Sparkles, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProgress } from '../utils/progress';
import { getCurrentUser } from '../utils/auth';
import { materiList } from '../data/materi';
import { quizKategori } from '../data/quiz';

export default function Sertifikat() {
  const progress = getProgress();
  const user = getCurrentUser();
  const namaUser = user?.username || 'Siswa Hebat';

  const totalMateri = materiList.length;
  const selesaiMateri = progress.materiSelesai.length;
  const persenMateri = Math.round((selesaiMateri / totalMateri) * 100);

  // Hitung total level selesai dari semua kategori
  let totalLevelSelesai = 0;
  let totalLevel = 0;
  quizKategori.forEach((kat) => {
    totalLevel += kat.levels.length;
    Object.values(progress.quizLevels?.[kat.id] || {}).forEach((l) => {
      if (l.selesai) totalLevelSelesai++;
    });
  });

  const bisaDapatSertifikat = persenMateri >= 100 && progress.quizTerbaik >= 70;

  const tanggal = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  if (!bisaDapatSertifikat) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-yellow-50 to-pink-50 pt-24 pb-16 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-8 text-center"
        >
          <div className="text-7xl mb-4">🔒</div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
            Sertifikat Terkunci
          </h1>
          <p className="text-gray-600 font-semibold mb-6">
            Selesaikan semua materi & dapatkan skor quiz minimal 70% untuk membuka sertifikat!
          </p>

          <div className="space-y-3 mb-6">
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-700 text-sm">📚 Materi</span>
                <span className="font-extrabold text-primary">
                  {selesaiMateri}/{totalMateri}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  style={{ width: `${persenMateri}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-700 text-sm">🏆 Quiz Terbaik</span>
                <span className="font-extrabold text-primary">{progress.quizTerbaik}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                  style={{ width: `${progress.quizTerbaik}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-700 text-sm">🎯 Level Quiz</span>
                <span className="font-extrabold text-primary">
                  {totalLevelSelesai}/{totalLevel}
                </span>
              </div>
            </div>
          </div>

          <Link
            to="/materi"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-extrabold hover:scale-105 transition-transform shadow-lg"
          >
            Lanjut Belajar 📚
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-yellow-50 to-pink-50 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block text-6xl mb-4"
          >
            🏆
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Selamat, <span className="text-primary">{namaUser}</span>! 🎉
          </h1>
          <p className="text-gray-600 font-semibold">
            Kamu sudah menyelesaikan semua materi dan lulus quiz!
          </p>
        </motion.div>

        {/* Sertifikat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border-8 border-double border-primary relative overflow-hidden"
          id="sertifikat-print"
        >
          <div className="absolute top-4 left-4 text-4xl opacity-20">⭐</div>
          <div className="absolute top-4 right-4 text-4xl opacity-20">✨</div>
          <div className="absolute bottom-4 left-4 text-4xl opacity-20">🎨</div>
          <div className="absolute bottom-4 right-4 text-4xl opacity-20">🚀</div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-yellow-500" size={24} />
              <span className="text-sm font-extrabold text-gray-500 uppercase tracking-widest">
                Sertifikat Kelulusan
              </span>
              <Sparkles className="text-yellow-500" size={24} />
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              CodeKids Certificate
            </h2>
            <p className="text-gray-500 font-semibold mb-8">
              Diberikan kepada
            </p>

            <div className="border-b-4 border-dashed border-gray-300 pb-4 mb-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3">
                <User className="text-primary" size={32} />
                <h3 className="text-4xl md:text-5xl font-extrabold text-primary">
                  {namaUser}
                </h3>
              </div>
            </div>

            <p className="text-gray-600 font-semibold mb-8 max-w-xl mx-auto leading-relaxed">
              Telah berhasil menyelesaikan seluruh materi pembelajaran coding
              (HTML, CSS, JavaScript) dan lulus quiz dengan skor{" "}
              <strong className="text-primary">{progress.quizTerbaik}%</strong>.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-primary">
                  {selesaiMateri}
                </div>
                <div className="text-xs text-gray-500 font-bold">Materi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-yellow-500">
                  {progress.poin}
                </div>
                <div className="text-xs text-gray-500 font-bold">Poin</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-green-500">
                  {progress.badges.length}
                </div>
                <div className="text-xs text-gray-500 font-bold">Badge</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t-2 border-gray-100 text-sm">
              <div className="text-left">
                <p className="text-gray-500 font-bold">Tanggal</p>
                <p className="text-gray-900 font-extrabold">{tanggal}</p>
              </div>
              <Award className="text-primary" size={40} />
              <div className="text-right">
                <p className="text-gray-500 font-bold">CodeKids</p>
                <p className="text-gray-900 font-extrabold">M-ONE 2026</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-extrabold hover:scale-105 transition-transform shadow-lg"
          >
            <Download size={18} /> Download / Print
          </button>
          <Link
            to="/progress"
            className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary px-6 py-3 rounded-full font-extrabold hover:bg-indigo-50 transition-all"
          >
            🏅 Lihat Badge
          </Link>
        </div>
      </div>

      {/* CSS Print khusus */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #sertifikat-print, #sertifikat-print * { visibility: visible; }
          #sertifikat-print { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>
    </div>
  );
}
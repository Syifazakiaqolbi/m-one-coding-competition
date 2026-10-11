import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, TrendingUp, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  getProgress,
  getBadges,
  resetProgress,
  badgeList,
} from '../utils/progress';
import { materiList } from '../data/materi';
import { quizData } from '../data/quiz';

export default function Progress() {
  const [progress, setProgress] = useState(getProgress());
  const [badges, setBadges] = useState(getBadges());

  useEffect(() => {
    setProgress(getProgress());
    setBadges(getBadges());
  }, []);

  const handleReset = () => {
    if (window.confirm('Yakin mau reset semua progress? Data tidak bisa dikembalikan.')) {
      resetProgress();
      setProgress(getProgress());
      setBadges(getBadges());
    }
  };

  const totalMateri = materiList.length;
  const selesaiMateri = progress.materiSelesai.length;
  const persenMateri = Math.round((selesaiMateri / totalMateri) * 100);
  const level = Math.floor(progress.poin / 50) + 1;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Progress <span className="text-primary">Belajarmu</span>
          </h1>
          <p className="text-lg text-gray-600">
            Lihat seberapa jauh kamu sudah belajar!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="bg-white rounded-2xl p-5 shadow-sm border-2 border-gray-100"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-3">
              <Star size={24} />
            </div>
            <div className="text-3xl font-extrabold text-gray-900">{progress.poin}</div>
            <div className="text-sm text-gray-500 font-semibold">Total Poin</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-5 shadow-sm border-2 border-gray-100"
          >
            <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-3">
              <Trophy size={24} />
            </div>
            <div className="text-3xl font-extrabold text-gray-900">{level}</div>
            <div className="text-sm text-gray-500 font-semibold">Level</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-2xl p-5 shadow-sm border-2 border-gray-100"
          >
            <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-3">
              <TrendingUp size={24} />
            </div>
            <div className="text-3xl font-extrabold text-gray-900">
              {progress.quizTerbaik}%
            </div>
            <div className="text-sm text-gray-500 font-semibold">Quiz Terbaik</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-5 shadow-sm border-2 border-gray-100"
          >
            <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-3">
              <Award size={24} />
            </div>
            <div className="text-3xl font-extrabold text-gray-900">
              {progress.badges.length}/{badgeList.length}
            </div>
            <div className="text-sm text-gray-500 font-semibold">Badge</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Progress Materi ({selesaiMateri}/{totalMateri})
          </h2>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${persenMateri}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-primary to-indigo-500"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">{persenMateri}% selesai</p>

          <div className="mt-6 space-y-2">
            {materiList.map((m) => {
              const isDone = progress.materiSelesai.includes(m.id);
              return (
                <Link
                  key={m.id}
                  to={`/materi/${m.id}`}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">{m.icon}</span>
                    <span className="font-semibold text-gray-700">{m.judul}</span>
                  </span>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      isDone
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {isDone ? '✓ Selesai' : 'Belum'}
                  </span>
                </Link>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">🏅 Koleksi Badge</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((b) => (
              <div
                key={b.id}
                className={`p-4 rounded-2xl text-center transition-all ${
                  b.unlocked
                    ? 'bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300'
                    : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                }`}
              >
                <div className="text-4xl mb-2">{b.unlocked ? b.icon : '🔒'}</div>
                <div className="text-xs font-bold text-gray-900 mb-1">
                  {b.nama}
                </div>
                <div className="text-[10px] text-gray-500 leading-tight">
                  {b.deskripsi}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-700 font-semibold text-sm transition-colors"
          >
            <RotateCcw size={16} /> Reset Progress
          </button>
        </div>
      </div>
    </div>
  );
}
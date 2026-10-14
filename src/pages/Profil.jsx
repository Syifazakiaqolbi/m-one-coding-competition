import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Save, User, Star, Trophy, Award, TrendingUp, Check, X, Edit3,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, updateProfile, avatarPilihan } from '../utils/auth';
import { getProgress, badgeList } from '../utils/progress';
import { materiList } from '../data/materi';
import { quizKategori } from '../data/quiz';

export default function Profil() {
  const navigate = useNavigate();
  const [user, setUser] = useState(getCurrentUser());
  const [isEdit, setIsEdit] = useState(false);
  const [editNama, setEditNama] = useState(user?.username || '');
  const [editAvatar, setEditAvatar] = useState(user?.avatar || '🦊');
  const [progress, setProgress] = useState(getProgress());
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    if (!user) navigate('/login');
    setProgress(getProgress());
  }, [user, navigate]);

  if (!user) return null;

  const handleSave = () => {
    if (editNama.trim().length < 2) return;
    const updated = updateProfile({ username: editNama, avatar: editAvatar });
    if (updated) {
      setUser(updated);
      setIsEdit(false);
      setShowSaved(true);
      setTimeout(() => setShowSaved(false), 2500);
    }
  };

  const handleCancel = () => {
    setEditNama(user.username);
    setEditAvatar(user.avatar);
    setIsEdit(false);
  };

  // Statistik
  const totalMateri = materiList.length;
  const selesaiMateri = progress.materiSelesai.length;
  let totalLevelSelesai = 0;
  let totalLevel = 0;
  quizKategori.forEach((kat) => {
    totalLevel += kat.levels.length;
    Object.values(progress.quizLevels?.[kat.id] || {}).forEach((l) => {
      if (l.selesai) totalLevelSelesai++;
    });
  });
  const level = Math.floor(progress.poin / 50) + 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-yellow-50 to-pink-50 pt-20 pb-16 relative overflow-hidden">
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">✨</div>
      <div className="absolute bottom-40 right-10 text-6xl opacity-20 animate-pulse">🎨</div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        {/* Toast */}
        <AnimatePresence>
          {showSaved && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 right-4 z-[200] bg-green-500 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 font-bold"
            >
              <Check size={20} /> Profil berhasil disimpan!
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            👤 Profil Kamu
          </h1>
          <p className="text-gray-600 font-semibold">
            Kelola profil dan lihat statistik belajarmu
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-6 border-4 border-white relative overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-2xl"></div>

          <div className="relative">
            {!isEdit ? (
              // VIEW MODE
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-28 h-28 mx-auto mb-4 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-6xl shadow-xl"
                >
                  {user.avatar}
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                  {user.username}
                </h2>
                <p className="text-gray-500 font-semibold text-sm mb-4">
                  Level {level} · Petualang Coding 🚀
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEdit(true)}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-extrabold shadow-lg hover:bg-indigo-700 transition-all"
                >
                  <Edit3 size={16} /> Edit Profil
                </motion.button>
              </div>
            ) : (
              // EDIT MODE
              <div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-4 text-center">
                  Pilih Avatar Baru
                </h3>

                {/* Avatar Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-6">
                  {avatarPilihan.map((av) => (
                    <motion.button
                      key={av}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setEditAvatar(av)}
                      className={`aspect-square rounded-2xl flex items-center justify-center text-2xl md:text-3xl transition-all ${
                        editAvatar === av
                          ? 'bg-gradient-to-br from-primary to-purple-600 shadow-lg scale-105 ring-2 ring-primary/30'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {av}
                    </motion.button>
                  ))}
                </div>

                {/* Nama Input */}
                <label
                  htmlFor="edit-nama"
                  className="block text-sm font-extrabold text-gray-700 mb-2"
                >
                  Nama Panggilan
                </label>
                <div className="relative mb-5">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl pointer-events-none">
                    {editAvatar}
                  </div>
                  <input
                    id="edit-nama"
                    type="text"
                    value={editNama}
                    onChange={(e) => setEditNama(e.target.value)}
                    maxLength={20}
                    className="w-full pl-14 pr-5 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 focus:outline-none font-bold text-lg transition-all"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSave}
                    disabled={editNama.trim().length < 2}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-full font-extrabold shadow-lg flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Save size={18} /> Simpan
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCancel}
                    className="px-6 py-3 rounded-full font-extrabold bg-white border-2 border-gray-200 text-gray-700 flex items-center gap-2"
                  >
                    <X size={18} /> Batal
                  </motion.button>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
        >
          <div className="bg-white rounded-2xl p-4 shadow-sm border-2 border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-2">
              <Star size={20} className="fill-yellow-500" />
            </div>
            <div className="text-2xl font-extrabold text-gray-900">{progress.poin}</div>
            <div className="text-xs text-gray-500 font-bold">Total Poin</div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border-2 border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-2">
              <Trophy size={20} />
            </div>
            <div className="text-2xl font-extrabold text-gray-900">{level}</div>
            <div className="text-xs text-gray-500 font-bold">Level</div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border-2 border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-2">
              <TrendingUp size={20} />
            </div>
            <div className="text-2xl font-extrabold text-gray-900">
              {selesaiMateri}/{totalMateri}
            </div>
            <div className="text-xs text-gray-500 font-bold">Materi</div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border-2 border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mb-2">
              <Award size={20} />
            </div>
            <div className="text-2xl font-extrabold text-gray-900">
              {progress.badges.length}/{badgeList.length}
            </div>
            <div className="text-xs text-gray-500 font-bold">Badge</div>
          </div>
        </motion.div>

        {/* Detail Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-2xl p-5 shadow-sm border-2 border-gray-100 mb-6"
        >
          <h3 className="font-extrabold text-gray-900 mb-4 flex items-center gap-2">
            📊 Detail Kemajuan
          </h3>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-bold text-gray-700">📚 Materi</span>
                <span className="text-sm font-extrabold text-primary">
                  {selesaiMateri}/{totalMateri}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  style={{ width: `${(selesaiMateri / totalMateri) * 100}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-bold text-gray-700">🎯 Level Quiz</span>
                <span className="text-sm font-extrabold text-primary">
                  {totalLevelSelesai}/{totalLevel}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                  style={{ width: `${(totalLevelSelesai / totalLevel) * 100}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-bold text-gray-700">🏆 Quiz Terbaik</span>
                <span className="text-sm font-extrabold text-primary">
                  {progress.quizTerbaik}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                  style={{ width: `${progress.quizTerbaik}%` }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info akun */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-100 rounded-2xl p-4 text-center"
        >
          <p className="text-xs text-gray-600 font-semibold">
            <User size={12} className="inline mr-1" />
            Bergabung sejak{' '}
            {new Date(user.loginAt).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
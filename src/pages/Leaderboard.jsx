import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';
import { getProgress } from '../utils/progress';

const namaFiktif = [
  { nama: 'Andi', poin: 250, avatar: '👦' },
  { nama: 'Sari', poin: 180, avatar: '👧' },
  { nama: 'Budi', poin: 120, avatar: '🧒' },
  { nama: 'Citra', poin: 90, avatar: '👩' },
  { nama: 'Dino', poin: 60, avatar: '🧑' },
];

export default function Leaderboard() {
  const progress = getProgress();
  const namaUser = localStorage.getItem('codekids_nama') || 'Kamu';

  // Gabung dengan user
  const semua = [
    ...namaFiktif,
    { nama: namaUser + ' (Kamu)', poin: progress.poin, avatar: '⭐', isUser: true },
  ].sort((a, b) => b.poin - a.poin);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-yellow-50 to-pink-50 pt-20 pb-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block text-6xl mb-2"
          >
            🏆
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Papan Peringkat
          </h1>
          <p className="text-gray-600 font-semibold">
            Kumpulkan poin sebanyak mungkin untuk naik peringkat! 🚀
          </p>
        </motion.div>

        {/* Top 3 */}
        {semua.slice(0, 3).length >= 3 && (
          <div className="grid grid-cols-3 gap-3 mb-6 items-end">
            {/* Peringkat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-1">{semua[1].avatar}</div>
              <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-t-2xl p-3 shadow-lg h-32 flex flex-col items-center justify-center">
                <Medal className="text-white mb-1" size={24} />
                <div className="text-white font-extrabold text-2xl">2</div>
                <div className="text-white text-xs font-bold truncate w-full text-center">
                  {semua[1].nama}
                </div>
                <div className="text-white/90 font-extrabold text-sm">{semua[1].poin} poin</div>
              </div>
            </motion.div>

            {/* Peringkat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-5xl mb-1"
              >
                {semua[0].avatar}
              </motion.div>
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-t-2xl p-3 shadow-2xl h-40 flex flex-col items-center justify-center">
                <Trophy className="text-white mb-1" size={28} />
                <div className="text-white font-extrabold text-3xl">1</div>
                <div className="text-white text-xs font-bold truncate w-full text-center">
                  {semua[0].nama}
                </div>
                <div className="text-white/90 font-extrabold text-sm">{semua[0].poin} poin</div>
              </div>
            </motion.div>

            {/* Peringkat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-1">{semua[2].avatar}</div>
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-t-2xl p-3 shadow-lg h-28 flex flex-col items-center justify-center">
                <Award className="text-white mb-1" size={20} />
                <div className="text-white font-extrabold text-xl">3</div>
                <div className="text-white text-xs font-bold truncate w-full text-center">
                  {semua[2].nama}
                </div>
                <div className="text-white/90 font-extrabold text-xs">{semua[2].poin} poin</div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Sisanya */}
        <div className="bg-white rounded-2xl shadow-lg p-3 space-y-2">
          {semua.slice(3).map((u, i) => (
            <motion.div
              key={u.nama}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center gap-3 p-3 rounded-xl ${
                u.isUser
                  ? 'bg-gradient-to-r from-indigo-100 to-purple-100 border-2 border-primary'
                  : 'bg-gray-50'
              }`}
            >
              <span className="text-2xl">{u.avatar}</span>
              <span
                className={`font-extrabold flex-1 ${
                  u.isUser ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {u.nama}
              </span>
              <span className="font-extrabold text-gray-900">{u.poin} poin</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 font-semibold">
            💡 Peringkat lain adalah pemain fiktif untuk motivasi belajar.
          </p>
        </div>
      </div>
    </div>
  );
}
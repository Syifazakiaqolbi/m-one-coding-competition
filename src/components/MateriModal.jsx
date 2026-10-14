import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Star, CheckCircle } from 'lucide-react';
import { tandaiMateriSelesai } from '../utils/progress';
import { useToast } from '../utils/useToast';

export default function MateriModal({ materi, isOpen, onClose }) {
  const { showToast, ToastComponent } = useToast();

  if (!materi) return null;

  const handleTandaiSelesai = () => {
    tandaiMateriSelesai(materi.id);
    showToast('Materi ditandai selesai! +10 poin 🎉');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {ToastComponent}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col relative overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Tutup"
              >
                <X size={18} className="text-gray-700" />
              </button>

              {/* Header - fixed */}
              <div className={`${materi.warna} p-5 relative overflow-hidden flex-shrink-0`}>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
                <div className="relative flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-lg flex-shrink-0"
                  >
                    {materi.icon}
                  </motion.div>
                  <div className="pr-12">
                    <span className="inline-block bg-white/80 text-xs font-extrabold px-3 py-1 rounded-full mb-1">
                      {materi.kategori}
                    </span>
                    <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">
                      {materi.judul}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3 relative">
                  <span className="bg-white/80 text-gray-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock size={12} /> {materi.durasi}
                  </span>
                  <span className="bg-white/80 text-gray-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} className="fill-yellow-500 text-yellow-500" /> {materi.level}
                  </span>
                </div>
              </div>

              {/* Content - scrollable */}
              <div className="flex-1 overflow-y-auto p-5 space-y-3 min-h-0">
                {materi.konten.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item.tipe === 'teks' && (
                      <div className="bg-gray-50 rounded-2xl p-4 border-l-4 border-primary">
                        <p className="text-gray-700 leading-relaxed font-semibold text-sm md:text-base">
                          {item.isi}
                        </p>
                      </div>
                    )}
                    {item.tipe === 'kode' && (
                      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                          <span className="ml-2 text-xs text-gray-400 font-mono">{item.bahasa}</span>
                        </div>
                        <pre className="p-4 text-gray-100 font-mono text-xs md:text-sm overflow-x-auto">
                          <code>{item.isi}</code>
                        </pre>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Footer - fixed at bottom */}
              <div className="p-4 border-t-2 border-gray-100 bg-gray-50 flex flex-wrap gap-2 flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleTandaiSelesai}
                  className="flex-1 min-w-[140px] bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-3 rounded-full font-extrabold shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <CheckCircle size={18} /> Tandai Selesai
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onClose}
                  className="px-5 py-3 rounded-full font-extrabold bg-white border-2 border-gray-200 text-gray-700 text-sm"
                >
                  Tutup
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
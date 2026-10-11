import { Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 via-white to-yellow-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles size={16} />
              Untuk Anak SD
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Belajar <span className="text-primary">Coding</span> Jadi{' '}
              <span className="text-secondary">Seru!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Platform edukasi coding untuk anak SD. Belajar HTML, CSS, dan
              JavaScript dengan cara yang menyenangkan, interaktif, dan penuh
              warna!
            </p>
            <div className="flex flex-wrap gap-4">
              {/* ✅ TOMBOL 1: Link ke halaman /materi */}
              <Link
                to="/materi"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-200"
              >
                <Rocket size={20} />
                Mulai Belajar Gratis
              </Link>

              {/* ✅ TOMBOL 2: Smooth scroll ke section fitur */}
              <button
                onClick={() =>
                  document
                    .getElementById('fitur')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg border-2 border-primary hover:bg-indigo-50 transition-all"
              >
                Lihat Fitur
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-4 border-primary/20">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <pre className="text-sm md:text-base font-mono text-gray-700 leading-relaxed">
                <code>
                  {`<h1>Halo, Dunia!</h1>\n\n<p>Saya sedang belajar coding</p>\n\n<style>\n  h1 { color: #4F46E5; }\n</style>`}
                </code>
              </pre>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-secondary text-white p-4 rounded-2xl shadow-lg"
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
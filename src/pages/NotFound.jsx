import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-9xl font-extrabold text-primary mb-4"
        >
          404
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Halaman Tidak Ditemukan 😢
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sepertinya kamu tersesat. Yuk kembali ke halaman utama!
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-200"
          >
            <Home size={20} /> Ke Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all"
          >
            <ArrowLeft size={20} /> Kembali
          </button>
        </div>
      </motion.div>
    </div>
  );
}
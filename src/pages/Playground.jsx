import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Code2 } from 'lucide-react';

const contohKode = {
  html: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Playground CodeKids</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      margin: 0;
    }
    h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }
    p {
      font-size: 20px;
    }
    button {
      background: white;
      color: #667eea;
      border: none;
      padding: 12px 24px;
      border-radius: 30px;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      margin-top: 20px;
    }
    button:hover {
      transform: scale(1.05);
      transition: 0.3s;
    }
  </style>
</head>
<body>
  <h1>Halo, Dunia! 👋</h1>
  <p>Aku sedang belajar coding!</p>
  <button onclick="alert('Halo teman!')">Klik Aku!</button>
</body>
</html>`,
};

export default function Playground() {
  const [kode, setKode] = useState(contohKode.html);
  const [output, setOutput] = useState(contohKode.html);

  const handleRun = () => {
    setOutput(kode);
  };

  const handleReset = () => {
    setKode(contohKode.html);
    setOutput(contohKode.html);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Coding <span className="text-primary">Playground</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tulis kode HTML, CSS, dan JavaScript di sini. Klik "Jalankan" untuk
            melihat hasilnya langsung! 🚀
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-2 text-xs text-gray-400 font-mono flex items-center gap-1">
                  <Code2 size={14} /> index.html
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleReset}
                  className="text-gray-400 hover:text-white p-1 rounded transition-colors"
                  aria-label="Reset kode ke contoh awal"
                  title="Reset"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  onClick={handleRun}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 transition-colors"
                  aria-label="Jalankan kode"
                >
                  <Play size={14} /> Jalankan
                </button>
              </div>
            </div>
            <label htmlFor="code-editor" className="sr-only">
              Editor kode HTML
            </label>
            <textarea
              id="code-editor"
              value={kode}
              onChange={(e) => setKode(e.target.value)}
              className="w-full h-96 p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none focus:outline-none"
              spellCheck={false}
              aria-label="Editor kode HTML"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex items-center px-4 py-3 bg-gray-100 border-b">
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Hasil Preview
              </span>
            </div>
            <iframe
              srcDoc={output}
              title="Preview hasil kode"
              className="w-full h-96 bg-white"
              sandbox="allow-scripts"
            />
          </motion.div>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-2xl">
          <p className="text-sm text-gray-700">
            <strong>💡 Tips:</strong> Coba ubah tulisan, warna, atau tambah
            tombol baru. Setelah selesai, klik <strong>"Jalankan"</strong> lagi untuk
            melihat hasilnya!
          </p>
        </div>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { Target, Heart, Sparkles, Users } from 'lucide-react';

export default function Tentang() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
            ✨ Tentang Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Belajar Coding untuk{' '}
            <span className="text-primary">Anak Indonesia</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CodeKids adalah platform edukasi coding yang dirancang khusus untuk
            anak SD. Kami percaya bahwa belajar coding harus menyenangkan,
            interaktif, dan mudah dipahami.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            {
              icon: Target,
              judul: 'Misi Kami',
              isi: 'Membantu anak-anak Indonesia mengenal dunia coding sejak dini dengan cara yang menyenangkan.',
              warna: 'bg-indigo-100 text-indigo-600',
            },
            {
              icon: Heart,
              judul: 'Nilai Kami',
              isi: 'Belajar harus menyenangkan. Kami buat setiap pelajaran jadi seru dan mudah dipahami.',
              warna: 'bg-pink-100 text-pink-600',
            },
            {
              icon: Sparkles,
              judul: 'Visi Kami',
              isi: 'Generasi muda Indonesia yang melek teknologi dan siap bersaing di era digital.',
              warna: 'bg-yellow-100 text-yellow-600',
            },
            {
              icon: Users,
              judul: 'Untuk Siapa',
              isi: 'Anak SD usia 6-12 tahun, guru, dan orang tua yang ingin anaknya belajar coding.',
              warna: 'bg-green-100 text-green-600',
            },
          ].map((item, i) => (
            <motion.div
              key={item.judul}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${item.warna} flex items-center justify-center mb-4`}
              >
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.judul}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.isi}</p>
            </motion.div>
          ))}
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Innovating Education Through Technology
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            CodeKids dibuat untuk M-ONE Telkomsel Coding Competition 2026,
            dengan tema "Innovating Education Through Technology" — membawa
            inovasi pendidikan melalui teknologi untuk generasi muda Indonesia.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    nama: 'Bu Sarah',
    peran: 'Guru SD',
    pesan:
      'Anak-anak saya jadi lebih semangat belajar. Materinya mudah dipahami dan menyenangkan!',
    avatar: '👩‍🏫',
  },
  {
    nama: 'Pak Budi',
    peran: 'Orang Tua',
    pesan:
      'Sekarang anak saya lebih suka belajar coding daripada main game. Terima kasih CodeKids!',
    avatar: '👨‍💼',
  },
  {
    nama: 'Andi, 10 tahun',
    peran: 'Siswa SD',
    pesan:
      'Seru banget! Aku sudah bisa bikin website sendiri. Playground-nya keren!',
    avatar: '👦',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Kata <span className="text-primary">Mereka</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Apa kata guru, orang tua, dan anak-anak tentang CodeKids?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.nama}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all relative"
            >
              <Quote
                size={40}
                className="text-primary/20 absolute top-4 right-4"
              />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{t.pesan}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.nama}</div>
                  <div className="text-sm text-gray-500">{t.peran}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
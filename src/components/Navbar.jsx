import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Fitur', href: '#fitur' },
    { name: 'Materi', href: '#materi' },
    { name: 'Tentang', href: '#tentang' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Code2 className="text-white" size={24} />
            </div>
            <span className="text-xl font-extrabold text-primary">CodeKids</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 font-semibold hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#mulai"
              className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-indigo-700 transition-all hover:scale-105"
            >
              Mulai Belajar
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-700 font-semibold hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#mulai"
              className="block mt-4 bg-primary text-white px-6 py-3 rounded-full font-bold text-center"
            >
              Mulai Belajar
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
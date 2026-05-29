import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import SearchModal from '../common/SearchModal';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'LEARNING PATHS', href: '/learning-paths' },
    { label: 'KNOWLEDGE BASE', href: '/knowledge-base' },
    { label: 'CALCULATORS', href: '/calculators' },
    { label: 'EXPLAINERS', href: '/explainers' },
  ];

  return (
    <header className="border-b-2 border-black bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-black tracking-tighter uppercase">
            <span className="text-accent">01.</span> ZONE BARISTA
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted"
          >
            <Menu size={24} />
          </button>

          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-semibold tracking-tight uppercase hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-l border-black pl-8">
              <SearchModal />
            </div>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 border-t border-black pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-sm font-semibold tracking-tight uppercase hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

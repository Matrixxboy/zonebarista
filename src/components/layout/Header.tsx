import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SearchModal from '../common/SearchModal';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navCategories = [
    {
      label: 'DISCOVER',
      links: [
        { label: 'HOME', href: '/' },
      ]
    },
    {
      label: 'STUDY',
      links: [
        { label: 'KNOWLEDGE BASE', href: '/knowledge-base' },
        { label: 'LEARNING PATHS', href: '/learning-paths' },
      ]
    },
    {
      label: 'TOOLS',
      links: [
        { label: 'CALCULATORS', href: '/calculators' },
        { label: 'LAB SOPs', href: '/lab-sops' },
        { label: 'FORMULA EXPLAINERS', href: '/explainers' },
      ]
    },
    {
      label: 'RESOURCES',
      links: [
        { label: 'ABOUT DEVELOPER', href: '/developer' },
      ]
    }
  ];

  return (
    <header className="border-b-2 border-black bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-6 md:py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter uppercase">
            <span className="text-accent">01.</span> ZONE BARISTA
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted"
          >
            <Menu size={24} />
          </button>

          <nav className="hidden md:flex gap-8 items-center">
            {navCategories.map((cat) => (
              <div key={cat.label} className="relative group">
                <button className="text-sm font-semibold tracking-tight uppercase hover:text-accent transition-colors flex items-center gap-1 py-2">
                  {cat.label} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 mt-0 hidden group-hover:block pt-2">
                  <div className="bg-white border-2 border-accent w-56 p-2 flex flex-col gap-1">
                    {cat.links.map(link => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-3 py-2 text-sm font-bold uppercase hover:bg-black hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="border-l border-black pl-8">
              <SearchModal />
            </div>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-6 border-t border-black pt-6 pb-2">
            <div className="pb-4 border-b border-black">
              <SearchModal />
            </div>
            {navCategories.map((cat) => (
              <div key={cat.label} className="space-y-3">
                <div className="text-xs font-black text-gray-400 tracking-widest">{cat.label}</div>
                <div className="pl-4 flex flex-col space-y-3 border-l-2 border-black ml-1">
                  {cat.links.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block text-sm font-semibold tracking-tight uppercase hover:text-accent transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { formulas } from '@/data/formulas';

interface SearchResult {
  id: string;
  title: string;
  type: 'formula' | 'page';
  path?: string;
}

function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  const searchItems: SearchResult[] = [
    { id: 'home', title: 'Learning System', type: 'page', path: '/' },
    { id: 'calculators', title: 'Calculators', type: 'page', path: '/calculators' },
    { id: 'explainers', title: 'Explainers', type: 'page', path: '/explainers' },
    { id: 'developer', title: 'Developer Profile', type: 'page', path: '/developer' },
    ...formulas.map((f) => ({
      id: f.id,
      title: f.name,
      type: 'formula' as const,
    })),
  ];

  const fuse = new Fuse(searchItems, {
    keys: ['title'],
    threshold: 0.3,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 0) {
      const fuseResults = fuse.search(value);
      setResults(fuseResults.map((r) => r.item));
    } else {
      setResults([]);
    }
  };

  const handleSelectResult = (result: SearchResult) => {
    if (result.path) {
      navigate(result.path);
    }
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-text transition-colors"
      >
        <Search size={16} />
        <span className="hidden sm:inline">⌘K</span>
      </button>
    );
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-50 px-4">
        <div className="bg-white border-2 border-black rounded-none shadow-lg">
          <div className="flex items-center gap-3 px-4 py-4 border-b-2 border-black">
            <Search size={20} />
            <input
              autoFocus
              type="text"
              placeholder="Search formulas, pages, and topics..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-base"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-muted transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {results.length > 0 && (
            <div className="max-h-96 overflow-y-auto">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleSelectResult(result)}
                  className="w-full text-left px-4 py-3 border-b border-muted hover:bg-muted transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm uppercase tracking-tight">
                        {result.title}
                      </p>
                      <p className="text-xs text-muted">
                        {result.type === 'formula' ? '📐 Formula' : '📄 Page'}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {query && results.length === 0 && (
            <div className="px-4 py-8 text-center text-muted text-sm">
              No results found for "{query}"
            </div>
          )}

          {!query && (
            <div className="px-4 py-6 text-center text-xs text-muted uppercase tracking-wider">
              Start typing to search...
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchModal;

import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-black bg-white mt-auto w-full">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b-4 border-black pb-12">
          
          <div className="md:col-span-2">
            <h2 className="heading-display text-4xl mb-6">ZONE BARISTA</h2>
            <p className="text-lg font-medium leading-relaxed max-w-sm mb-6">
              The premier open-source repository for specialty coffee knowledge, rigorous brewing mathematics, and barista education.
            </p>
            <div className="flex border-4 border-black p-1 bg-white max-w-md group focus-within:ring-4 ring-black/10">
              <input 
                type="email" 
                placeholder="SUBSCRIBE TO RESEARCH UPDATES" 
                className="w-full px-4 py-2 font-mono text-sm uppercase placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-2 hover:bg-accent transition-colors flex items-center justify-center">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-black text-sm uppercase tracking-widest mb-6 border-b-2 border-black pb-2 inline-block">
              <span className="text-accent mr-2">01.</span> NAVIGATION
            </h3>
            <ul className="space-y-4 font-mono text-sm font-bold uppercase tracking-tight">
              <li><Link to="/knowledge-base" className="hover:text-accent transition-colors">Master Index</Link></li>
              <li><Link to="/calculators" className="hover:text-accent transition-colors">Compute Engine</Link></li>
              <li><Link to="/explainers" className="hover:text-accent transition-colors">Science Explainers</Link></li>
              <li><Link to="/learning-paths" className="hover:text-accent transition-colors">Learning Paths</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-sm uppercase tracking-widest mb-6 border-b-2 border-black pb-2 inline-block">
              <span className="text-accent mr-2">02.</span> LEGAL & CREATOR
            </h3>
            <ul className="space-y-4 font-mono text-sm font-bold uppercase tracking-tight">
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li className="pt-4 border-t-2 border-gray-200 mt-4">
                <a href="/developer" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">
                  Creator: Utsav Lankapati
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-bold font-mono uppercase tracking-widest gap-4">
          <p>© {currentYear} <a href="https://twomportal.vercel.app" target="_blank" rel="noopener noreferrer">
              <span className='text-accent hover:text-purple-600 transition-colors duration-200'>The World Of Matrix</span>
            </a>. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

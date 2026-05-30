import { Link } from 'react-router-dom';
import { Coffee, AlertOctagon } from 'lucide-react';
import GridPattern from '../components/common/GridPattern';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#fdfbf7] flex items-center justify-center p-4 relative">
      <GridPattern opacity={6} className="w-full max-w-4xl mx-auto flex items-center justify-center">
        <div className="bg-white border-4 border-black p-8 md:p-16 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden w-full animate-in fade-in zoom-in-95 duration-500">
          
          <div className="absolute -top-12 -right-12 text-gray-100 rotate-12 opacity-50 pointer-events-none">
             <Coffee size={250} />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center justify-center p-4 bg-black text-white border-4 border-black mb-8 -rotate-3 hover:rotate-3 transition-transform duration-300">
              <AlertOctagon size={48} />
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-black mb-4 uppercase tracking-tighter leading-none">
              ERROR <span className="text-accent">404</span>
            </h1>
            
            <h2 className="text-xl md:text-3xl font-bold uppercase tracking-widest text-gray-800 mb-6 border-b-4 border-black pb-6 w-full">
              EXTRACTION FAILED
            </h2>

            <p className="text-lg md:text-2xl text-black font-medium mb-10 max-w-xl mx-auto">
              We searched the entire roastery, but it looks like this page was ground too fine and choked the machine. 
            </p>

            <Link 
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white border-4 border-black font-black uppercase text-lg md:text-xl hover:bg-accent hover:text-black transition-colors shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1"
            >
              <Coffee size={24} />
              Return to the Café
            </Link>
          </div>
        </div>
      </GridPattern>
    </div>
  );
}

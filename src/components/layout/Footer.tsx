import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-black bg-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-black text-sm uppercase tracking-tight mb-4">
              <span className="text-accent">01.</span> NAVIGATION
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent">Learning System</Link></li>
              <li><Link to="/calculators" className="hover:text-accent">Calculators</Link></li>
              <li><Link to="/explainers" className="hover:text-accent">Explainers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-sm uppercase tracking-tight mb-4">
              <span className="text-accent">02.</span> LEGAL
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-accent">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-sm uppercase tracking-tight mb-4">
              <span className="text-accent">03.</span> CREATOR
            </h3>
            <Link to="/developer" className="text-sm hover:text-accent">
              Utsav Lankapati
            </Link>
          </div>
        </div>

        <div className="border-t border-black pt-6 text-center text-xs font-medium uppercase tracking-wider text-muted">
          <p>© {currentYear} ZONE BARISTA. Swiss International Design.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

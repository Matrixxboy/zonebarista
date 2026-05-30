import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CafeCat from '../common/CafeCat';

function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CafeCat />
    </div>
  );
}

export default MainLayout;

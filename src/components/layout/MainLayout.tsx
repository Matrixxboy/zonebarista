import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CafeCat from '../common/CafeCat';

function MainLayout() {
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

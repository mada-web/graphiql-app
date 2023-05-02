import { NavLink, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  const shouldShowFooterHeader =
    window.location.pathname === '/sign-in' ||
    window.location.pathname === '/' ||
    window.location.pathname === '/sign-up';
  return (
    <div>
      {shouldShowFooterHeader && <Header />}
      <Outlet />
      {shouldShowFooterHeader && <Footer />}
    </div>
  );
}
export default Layout;

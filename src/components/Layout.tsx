import { NavLink, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  const shouldShowFooterHeader = <NavLink to="/about" /> || (
      <NavLink to="/" />
    ) || <NavLink to="/recycle" />;
  return (
    <div>
      {shouldShowFooterHeader && <Header />}
      <Outlet />
      {shouldShowFooterHeader && <Footer />}
    </div>
  );
}
export default Layout;

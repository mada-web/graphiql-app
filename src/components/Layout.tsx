import { NavLink, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  // const shouldShowFooterHeader = <NavLink to="/sigh-up" /> || (
  //     <NavLink to="/" />
  //   ) || <NavLink to="/sign-in" />;
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;

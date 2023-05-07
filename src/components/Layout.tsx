import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header, { IHeaderProps } from './Header';
import Footer from './Footer';

const Layout: FC<IHeaderProps> = ({ handleLocale, locale }): JSX.Element => {
  return (
    <div>
      <Header handleLocale={handleLocale} locale={locale} />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;

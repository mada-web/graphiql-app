import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import { Spinner } from './Spinner';

const Layout: FC = (): JSX.Element => {
  return (
    <div>
      <Header />
      <main className="h-screen w-screen bg-dark-blue">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

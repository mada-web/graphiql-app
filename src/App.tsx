import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { lazy } from 'react';

import { LOCALES } from './lang/locales';
import { messages } from './lang/messages';
import useAppContext from './hooks/useAppContext';

import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Main = lazy(() => import('./pages/Main'));

const App = () => {
  const { currentLocale } = useAppContext();

  return (
    <BrowserRouter>
      <IntlProvider
        messages={messages[currentLocale]}
        locale={currentLocale}
        defaultLocale={LOCALES.ENGLISH}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sign-in" element={<Login />} />
            <Route path="sign-up" element={<Register />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="main" element={<Main />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </IntlProvider>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { LOCALES } from './lang/locales';
import { messages } from './lang/messages';
import useAppContext from './hooks/useAppContext';

import Layout from './components/Layout';
import Home from './pages/Home';
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

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

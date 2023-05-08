import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ChangeEvent, useState } from 'react';

import Home from './pages/Home';
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import { LOCALES } from './lang/locales';
import { messages } from './lang/messages';

const App = () => {
  const [currentLocale, setCurrentLocale] = useState(
    localStorage.getItem('lang') || LOCALES.ENGLISH
  );

  const handleLocale = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.checked === false) {
      setCurrentLocale(LOCALES.ENGLISH);
      localStorage.setItem('lang', LOCALES.ENGLISH);
    } else {
      setCurrentLocale(LOCALES.RUSSIAN);
      localStorage.setItem('lang', LOCALES.RUSSIAN);
    }
  };

  return (
    <BrowserRouter>
      <IntlProvider
        messages={messages[currentLocale]}
        locale={currentLocale}
        defaultLocale={LOCALES.ENGLISH}
      >
        <Routes>
          <Route path="/" element={<Layout handleLocale={handleLocale} locale={currentLocale} />}>
            <Route index element={<Home />} />
            <Route path="sign-in" element={<Login />} />
            <Route path="sign-up" element={<Register />} />
            <Route path="main" element={<Main />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </IntlProvider>
    </BrowserRouter>
  );
};

export default App;

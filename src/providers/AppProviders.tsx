import {
  FC,
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useState,
  ChangeEvent,
} from 'react';

import { defaultCode } from '../components/main/EditorBlock';
import { defaultParams } from '../components/main/QueryBlock';
import { LOCALES } from '../lang/locales';

type TypeSetState<T> = Dispatch<SetStateAction<T>>;
type Props = { children: ReactNode };

interface IAppContext {
  queryBody: string;
  setQueryBody: TypeSetState<string>;
  queryParams: string;
  setQueryParams: TypeSetState<string>;
  currentLocale: string;
  handleLocale: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CurrentAppContext = createContext<IAppContext>({
  queryBody: defaultCode,
  setQueryBody: () => {},
  queryParams: defaultParams,
  setQueryParams: () => {},
  currentLocale: LOCALES.ENGLISH,
  handleLocale: () => {},
});

export const AppProvider: FC<Props> = ({ children }) => {
  const [queryBody, setQueryBody] = useState<string>(defaultCode);
  const [queryParams, setQueryParams] = useState<string>(defaultParams);
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

  const allValue = {
    queryBody,
    setQueryBody,
    queryParams,
    setQueryParams,
    currentLocale,
    handleLocale,
  };

  return <CurrentAppContext.Provider value={allValue}>{children}</CurrentAppContext.Provider>;
};

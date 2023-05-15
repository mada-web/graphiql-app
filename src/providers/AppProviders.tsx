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

export interface IQueries {
  name: string;
}

interface IAppContext {
  queryBody: string;
  setQueryBody: TypeSetState<string>;
  queryParams: string;
  setQueryParams: TypeSetState<string>;
  isShowSchema: boolean;
  setIsShowSchema: TypeSetState<boolean>;
  isQueryParams: boolean;
  setIsQueryParams: TypeSetState<boolean>;
  currentLocale: string;
  handleLocale: (e: ChangeEvent<HTMLInputElement>) => void;
  responseApi: string;
  setResponseApi: TypeSetState<string>;
  schema: IQueries[];
  setSchema: TypeSetState<IQueries[]>;
}

export const CurrentAppContext = createContext<IAppContext>({
  queryBody: defaultCode,
  setQueryBody: () => {},
  queryParams: defaultParams,
  setQueryParams: () => {},
  isShowSchema: false,
  setIsShowSchema: () => {},
  isQueryParams: false,
  setIsQueryParams: () => {},
  currentLocale: LOCALES.ENGLISH,
  handleLocale: () => {},
  responseApi: '',
  setResponseApi: () => {},
  schema: [{ name: 'no data' }],
  setSchema: () => {},
});

export const AppProvider: FC<Props> = ({ children }) => {
  const [queryBody, setQueryBody] = useState<string>(defaultCode);
  const [queryParams, setQueryParams] = useState<string>(defaultParams);
  const [isShowSchema, setIsShowSchema] = useState<boolean>(false);
  const [isQueryParams, setIsQueryParams] = useState(false);
  const [responseApi, setResponseApi] = useState('');
  const [schema, setSchema] = useState<IQueries[]>([]);

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
    isShowSchema,
    setIsShowSchema,
    isQueryParams,
    setIsQueryParams,
    currentLocale,
    handleLocale,
    responseApi,
    setResponseApi,
    schema,
    setSchema,
  };

  return <CurrentAppContext.Provider value={allValue}>{children}</CurrentAppContext.Provider>;
};

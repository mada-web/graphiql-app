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
import { Schema, SchemaField, Type } from '../types/types';

type TypeSetState<T> = Dispatch<SetStateAction<T>>;
type Props = { children: ReactNode };

const defaultSchemaObj = { name: 'no data' };

const schemaDefault: Schema = {
  types: [defaultSchemaObj],
};

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
  schema: SchemaField[];
  setSchema: TypeSetState<SchemaField[]>;
  schemaData: Schema;
  setSchemaData: TypeSetState<Schema>;
  schemaParams: Type;
  setSchemaParams: TypeSetState<Type>;
  isShowDescription: boolean;
  setIsShowDescription: TypeSetState<boolean>;
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
  schema: [defaultSchemaObj],
  setSchema: () => {},
  schemaData: schemaDefault,
  setSchemaData: () => {},
  schemaParams: defaultSchemaObj,
  setSchemaParams: () => {},
  isShowDescription: false,
  setIsShowDescription: () => {},
});

export const AppProvider: FC<Props> = ({ children }) => {
  const [queryBody, setQueryBody] = useState<string>(defaultCode);
  const [queryParams, setQueryParams] = useState<string>(defaultParams);
  const [isShowSchema, setIsShowSchema] = useState<boolean>(false);
  const [isQueryParams, setIsQueryParams] = useState(false);
  const [responseApi, setResponseApi] = useState('');
  const [schema, setSchema] = useState<SchemaField[]>([defaultSchemaObj]);
  const [schemaData, setSchemaData] = useState<Schema>(schemaDefault);
  const [schemaParams, setSchemaParams] = useState<Type>(defaultSchemaObj);
  const [isShowDescription, setIsShowDescription] = useState(false);

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
    schemaData,
    setSchemaData,
    schemaParams,
    setSchemaParams,
    isShowDescription,
    setIsShowDescription,
  };

  return <CurrentAppContext.Provider value={allValue}>{children}</CurrentAppContext.Provider>;
};

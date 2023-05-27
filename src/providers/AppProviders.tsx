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

export const defaultSchemaObj = { name: 'no data' };

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
  isDataLoading: boolean;
  setIsDataLoading: TypeSetState<boolean>;
  isOpenQueryParams: boolean;
  setIsOpenQueryParams: TypeSetState<boolean>;
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
  active: string;
  setActive: TypeSetState<string>;
  params: string;
  setParams: TypeSetState<string>;
  headersParams: string;
  setHeadersParams: TypeSetState<string>;
}

export const CurrentAppContext = createContext<IAppContext>({
  queryBody: defaultCode,
  setQueryBody: () => {},
  queryParams: defaultParams,
  setQueryParams: () => {},
  isShowSchema: false,
  setIsShowSchema: () => {},
  isOpenQueryParams: false,
  setIsOpenQueryParams: () => {},
  currentLocale: LOCALES.ENGLISH,
  handleLocale: () => {},
  responseApi: defaultParams,
  setResponseApi: () => {},
  schema: [defaultSchemaObj],
  setSchema: () => {},
  schemaData: schemaDefault,
  setSchemaData: () => {},
  schemaParams: defaultSchemaObj,
  setSchemaParams: () => {},
  isShowDescription: false,
  setIsShowDescription: () => {},
  active: defaultParams,
  setActive: () => {},
  isDataLoading: false,
  setIsDataLoading: () => {},
  params: defaultParams,
  setParams: () => {},
  headersParams: defaultParams,
  setHeadersParams: () => {},
});

export const AppProvider: FC<Props> = ({ children }) => {
  const [active, setActive] = useState<string>(defaultParams);
  const [params, setParams] = useState<string>(defaultParams);
  const [queryBody, setQueryBody] = useState<string>(defaultCode);
  const [schemaData, setSchemaData] = useState<Schema>(schemaDefault);
  const [responseApi, setResponseApi] = useState<string>(defaultParams);
  const [queryParams, setQueryParams] = useState<string>(defaultParams);
  const [schemaParams, setSchemaParams] = useState<Type>(defaultSchemaObj);
  const [headersParams, setHeadersParams] = useState<string>(defaultParams);
  const [schema, setSchema] = useState<SchemaField[]>([defaultSchemaObj]);
  const [isShowSchema, setIsShowSchema] = useState<boolean>(false);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);
  const [isShowDescription, setIsShowDescription] = useState<boolean>(false);
  const [isOpenQueryParams, setIsOpenQueryParams] = useState<boolean>(false);

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
    isOpenQueryParams,
    setIsOpenQueryParams,
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
    active,
    setActive,
    isDataLoading,
    setIsDataLoading,
    params,
    setParams,
    headersParams,
    setHeadersParams,
  };

  return <CurrentAppContext.Provider value={allValue}>{children}</CurrentAppContext.Provider>;
};

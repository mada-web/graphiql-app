import { FC, Dispatch, SetStateAction, createContext, ReactNode, useState } from 'react';

import { defaultCode } from '../components/main/EditorBlock';
import { defaultParams } from '../components/main/QueryBlock';

type TypeSetState<T> = Dispatch<SetStateAction<T>>;
type Props = { children: ReactNode };
interface IAppContext {
  queryBody: string;
  setQueryBody: TypeSetState<string>;
  queryParams: string;
  setQueryParams: TypeSetState<string>;
  isShowSchema: boolean;
  setIsShowSchema: TypeSetState<boolean>;
  isQueryParams: boolean;
  setIsQueryParams: TypeSetState<boolean>;
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
});

export const AppProvider: FC<Props> = ({ children }) => {
  const [queryBody, setQueryBody] = useState<string>(defaultCode);
  const [queryParams, setQueryParams] = useState<string>(defaultParams);
  const [isShowSchema, setIsShowSchema] = useState<boolean>(false);
  const [isQueryParams, setIsQueryParams] = useState(false);

  //const currentValue = useMemo(() => ({ value, setValue }), [value]);
  const allValue = {
    queryBody,
    setQueryBody,
    queryParams,
    setQueryParams,
    isShowSchema,
    setIsShowSchema,
    isQueryParams,
    setIsQueryParams,
  };

  return <CurrentAppContext.Provider value={allValue}>{children}</CurrentAppContext.Provider>;
};

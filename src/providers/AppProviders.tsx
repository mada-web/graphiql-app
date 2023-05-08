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
}

export const CurrentAppContext = createContext<IAppContext>({
  queryBody: defaultCode,
  setQueryBody: () => {},
  queryParams: defaultParams,
  setQueryParams: () => {},
});

export const AppProvider: FC<Props> = ({ children }) => {
  const [queryBody, setQueryBody] = useState<string>(defaultCode);
  const [queryParams, setQueryParams] = useState<string>(defaultParams);

  //const currentValue = useMemo(() => ({ value, setValue }), [value]);
  const allValue = { queryBody, setQueryBody, queryParams, setQueryParams };

  return <CurrentAppContext.Provider value={allValue}>{children}</CurrentAppContext.Provider>;
};

import { FC, Dispatch, SetStateAction, createContext, ReactNode, useState } from 'react';

import { defaultCode } from '../components/main/EditorBlock';

type TypeSetState<T> = Dispatch<SetStateAction<T>>;
type Props = { children: ReactNode };
interface IAppContext {
  queryBody: string;
  setQueryBody: TypeSetState<string>;
}

export const CurrentAppContext = createContext<IAppContext>({
  queryBody: defaultCode,
  setQueryBody: () => {},
});

export const AppProvider: FC<Props> = ({ children }) => {
  const [queryBody, setQueryBody] = useState<string>(defaultCode);

  //const currentValue = useMemo(() => ({ value, setValue }), [value]);
  const allValue = { queryBody, setQueryBody };

  return <CurrentAppContext.Provider value={allValue}>{children}</CurrentAppContext.Provider>;
};

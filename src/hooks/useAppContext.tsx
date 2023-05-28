import { useContext } from 'react';

import { CurrentAppContext } from '../providers/AppProviders';

const useAppContext = () => {
  const currentAppContext = useContext(CurrentAppContext);

  if (!currentAppContext) {
    throw new Error('useAppContext must be inside a AppProvider');
  }

  return currentAppContext;
};
export default useAppContext;

import { useState, type PropsWithChildren } from 'react';

import { AppContext } from './AppContext';
import type { 
  DataObject,
  UpdateObject,
  ContextValue,
  NavState,
} from '../@types/app';

type AppContextProviderProps = PropsWithChildren

export function AppContextProvider(props: AppContextProviderProps) {
  const initialData: DataObject = {
    initialized: false,
    officeHours: [],
    responsePending: true,
    modalContent: null,
    navState: {
      extended: false,
      activeSection: null
    },
  }
  const [data, setData] = useState(initialData);
  function updateData(obj: UpdateObject) {
    setData({
      ...data,
      ...obj
    })
  }

  function updateNav(obj: NavState) {
    setData({
      ...data,
      navState: {
        ...data.navState,
        ...obj
      }
    })
  }

  const contextValue: ContextValue = {
    data,
    setData,
    updateData,
    updateNav,
  };

  return (
    <AppContext.Provider value={contextValue}>
      { props.children }
    </AppContext.Provider>
  );
}
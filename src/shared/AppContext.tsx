import { createContext } from 'react';
import type { ContextValue } from '../@types/app';

export const AppContext = createContext<ContextValue>({
  data: {
    initialized: false,
    officeHours: [],
    responsePending: false,
    modalContent: null,
    navState: {
      extended: false,
      activeSection: null
    },
  },
  setData: () => { console.log('Provider uninitialized')},
  updateData: () => { console.log('Provider uninitialized')},
  updateNav: () => { console.log('Provider uninitialized')},
})
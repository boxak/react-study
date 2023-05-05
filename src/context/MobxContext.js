import { createContext,useContext } from 'react';
import RootStore from '../store/RootStore';

export const Context = createContext(new RootStore());
export const useStore = () => useContext(Context);


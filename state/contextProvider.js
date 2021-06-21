import { createContext, useReducer } from 'react';
import reducer from './reducer';

export const formContext = createContext();

const initialState = {};

const FormContextProvider = ({ children }) => {
  const [formState, dispatch] = useReducer(reducer, initialState);

  return (
    <formContext.Provider value={{ formState, dispatch }}>
      {children}
    </formContext.Provider>
  );
};

export default FormContextProvider;

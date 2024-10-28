// src/AvaluoContext.js
import { createContext, useState } from 'react';

export const AvaluoContext = createContext();

// eslint-disable-next-line react/prop-types
export const AvaluoProvider = ({ children }) => {
  const [avaluoData, setAvaluoData] = useState({
    folio: '',
    fecha: '',
    colonia: '',
    direccion: '',
    // Agrega otros campos según necesites
  });

  return (
    <AvaluoContext.Provider value={{ avaluoData, setAvaluoData }}>
      {children}
    </AvaluoContext.Provider>
  );
};
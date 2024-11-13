/* eslint-disable no-unused-vars */
// src/AvaluoContext.js
import { createContext, useState } from 'react';

export const AvaluoContext = createContext();

// eslint-disable-next-line react/prop-types
export const AvaluoProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [avaluoData, setAvaluoData] = useState({
    folio: '',
    fecha: '',
    colonia: '',
    direccion: '',
    imagen:'',
    titulo:'',
    calle:'',
    numero:'',
    delegacion:'',
    cp:'',
    estado:'',
    dateEvaluo:'',
    valor:'',
    propositoEv:'',
    usoAvaluo:'',
    ncp:'',
    nca:'',
    cla:'',
    tcdc:'',
    usz:'',
    dp:'',
    ca:'',
    usp:'',
    ltp:'',
    ap:'',
    cfe:'',
    via:'',
    alp:'',
    drenaje:'',
    sn:'',
    tu:'',
    vigilancia:'',
    rba:'',
    tlf:'',
    terreno:'',
    colindancia:'',
    disnorte:'',
    colinorte:'',
    dissur:'',
    colisur:'',
    diseste:'',
    colieste:'',
    disoeste:'',
    colioeste:'',
    // Agrega otros campos según necesites
  });

  const updateAvaluoData = (key, value) => {
    setAvaluoData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }

  return (
    <AvaluoContext.Provider value={{avaluoData, updateAvaluoData, setAvaluoData}}>
      {children}
    </AvaluoContext.Provider>
  );
};

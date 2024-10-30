/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react';
import { AvaluoContext} from '../AvaluoContext';


function datos() {
  const{AvaluoData, setAvaluoData} = useContext(AvaluoContext);

  return (
    <div>
      <h2>Datos</h2>
      {AvaluoData.imagen && (
        <img src={AvaluoData.imagen} alt="Imagen de la portada" style={{ width: '100%', height: 'auto' }} />
      )}
      <h2>Colonia: {AvaluoData.colonia}</h2>
      <input
        type='text'
        value={AvaluoData.colonia}
        onChange={(e) => setAvaluoData({...AvaluoData, colonia: e.target.value})}
        placeholder='Ingresa la colonia'
      />
    </div>
  )
}

export default datos

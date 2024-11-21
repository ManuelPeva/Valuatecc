import Header from "../header/Header";
import '../stilos/terreno.css'
import { AvaluoContext } from "../AvaluoContext";
import { useContext } from "react";

function definiciones() {
  const {avaluoData, setAvaluoData} = useContext(AvaluoContext);

  return (
    <div className='container mt-4'>
      <Header/>
      <br></br>
      <div className="alert alert-warning text" role="alert">
        VII.- CONSIDERACIONES GENERALES
      </div>
      <p className="descrip">DEFINICIONES:</p>
      <p className="definiciones">EXISTEN ACTUALMENTE TRES ENFOQUES DE VALUACIÓN COMÚNMENTE ACEPTADOS: <p className="definiciones-text">{}</p></p>
      <p className="definiciones">ENFOQUE COMPARATIVO DE MERCADO: <p className="definiciones-text">{}</p></p>
      <p className="definiciones">ENFOQUE DE COSTOS: <p className="definiciones-text">{}</p></p>
      <p className="definiciones">ENFOQUE DE INGRESOS: <p className="definiciones-text">{}</p></p>
      <br/>

      <p className="definiciones2">COMENTARIOS GENERALES, SUPUESTOS Y CONDICIONES LIMITANTES DEL AVALUÓ:</p>
      <p className="definiciones2">PARA LA HOMOLOGACIÓN CORRESPONDIENTE A MERCADO DE SIMILARES, SE CONSIDERARON LOS SIGUIENTES FACTORES:</p>
      <p className="definiciones2">NEGOCIACIÓN</p>
      <p className="definiciones-text">{}</p>
      <p className="definiciones2">SUPERFICIE: </p>
      <p className="definiciones-text">{}</p>
      <p className="definiciones2">CALIDAD: </p>
      <p className="definiciones-text">{}</p>
      <p className="definiciones2">ESTADO DE CONSERVACIÓN: </p>
      <p className="definiciones-text">{}</p>
      <p className="definiciones2">OTROS: </p>
      <p className="definiciones-text">{}</p>

      <hr></hr>

      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
            <input
                type="text"
                value={avaluoData.terreno}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, terreno: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>TRAMOS</label>
            </div> 
          </div>
        </div>
      </form>
    </div>
  );
}

export default definiciones

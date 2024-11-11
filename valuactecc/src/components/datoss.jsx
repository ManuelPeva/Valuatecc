import '../datos.css'
import { AvaluoContext } from '../AvaluoContext'
import { useContext } from 'react'

function datoss() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {avaluoData, setAvaluoData} = useContext(AvaluoContext);

  return (
    <div className="container mt-4 ">
      <div className="alert alert-warning text" role="alert">
          II.- DATOS GENERALES.
      </div>
      <hr></hr>
      <table className="table table-borderless table-hover">
      <tr className="border">
      <td className="portada-alineacion">PERITO VALUADOR</td>
      <td className="border"></td>
      </tr>
      <tr className="border">
      <td className="portada-alineacion">CÉDULA PROFESIONAL:  </td>
      <td className="border"> </td>
      </tr>
      <tr className="border">
      <td className="portada-alineacion">BIEN QUE SE VALÚA:</td>
      <td className="border">PREDIO URBANO CON CASA HABITACION INTERES MEDIO </td>
      </tr>
      <tr className="border">
      <td className="portada-alineacion">REGIMEN DE LA PROPIEDAD:  </td>
      <td className="border">PRIVADA </td>
      </tr>
      <tr className="border">
      <td className="portada-alineacion">NOMBRE DEL CONTROLADOR:  </td>
      <td className="border">NO APLICA </td>
      </tr>
      <tr className="border">
      <td className="portada-alineacion">CLABE DEL CONTROLADOR SHF  </td>
      <td className="border">NO APLICA </td>
      </tr>
    </table>

    <form>
      <div className='form-row'>
        <div className='form-group col-md-6'>
        <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.propositoEv}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, propositoEv: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>PROPÓSITO DEL EVALUÓ: </label>
            </div>
        </div>

        <div className='form-group col-md-6'>
        <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.usoAvaluo}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, usoAvaluo: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>USO DEL EVALUÓ: </label>
            </div>
        </div>
        <div className="alert alert-warning" role="alert">
          UBICACIÓN DEL INMUEBLE.
      </div>

      </div>
    </form>

    </div>


  )
}

export default datoss

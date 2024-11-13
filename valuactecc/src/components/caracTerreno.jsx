import Header from "../header/Header";
import { AvaluoContext } from "../AvaluoContext";
import { useContext } from "react";
import '../stilos/terreno.css'

function caracterreno() {
  const { avaluoData, setAvaluoData } = useContext(AvaluoContext);

  return (
    <div className="container mt-4">
       <Header/>
       <br></br>
       <div className="alert alert-warning text" role="alert">
          IV.- TERRENO
        </div>
        <p className="descrip">TRAMOS DE CALLE, CALLES TRANSVERSALES LIMÍTROFES Y ORIENTACIÓN: {avaluoData.terreno}</p>
        <p className="descrip">LINDEROS Y COLINDANCIAS SEGÚN: {avaluoData.colindancia}</p>


        <table className="table table-bordered">
      <thead>
        <tr>
          <th>ORIENTACIÓN</th>
          <th>DISTANCIA</th>
          <th>COLINDANCIAS</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border">
          <td>DEL TERRENO</td>
          <td></td>
          <td></td>
        </tr>
        <tr className="border">
          <td>AL NORTE</td>
          <td>{avaluoData.disnorte}</td>
          <td>{avaluoData.colinorte}</td>
        </tr>
        <tr className="border">
          <td>AL SUR</td>
          <td>{avaluoData.dissur}</td>
          <td>{avaluoData.colisur}</td>
        </tr>
        <tr className="border">
          <td>AL ESTE</td>
          <td>{avaluoData.diseste}</td>
          <td>{avaluoData.colinorte}</td>
        </tr>
        <tr className="border">
          <td>AL OESTE</td>
          <td>{avaluoData.disoeste}</td>
          <td>{avaluoData.colioeste}</td>
        </tr>
      </tbody>
    </table>


        <p className="indicacion">RELLENA LOS CAMPOS PARA COMPLETAR LOS DATOS SUPERIORES</p>
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
              <label>TRAMOS DE CALLES: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.colindancia}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, colindancia: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>LINDEROS Y COLINDANCIAS: </label>
            </div>
          </div>




          </div>
        </form>
    </div>
  )
}

export default caracterreno

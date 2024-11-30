/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import Header from "../header/Header";
import { AvaluoContext } from "../AvaluoContext";
import {useContext} from "react";
import "../stilos/terreno.css";

function comprobables() {
    const {avaluoData, setAvaluoData} = useContext(AvaluoContext);
    

  return (
    <div className="container mt-4">
    <Header/>
    <br></br>
    <div className="alert alert-warning text" role="alert">
        COMPROBABLES
      </div>
      <br></br>

      <table className="table table-bordered">
        <thead>
            <tr className="bordes">
                <th className="bordes">Municipio</th>
                <th className="bordes">Descripción</th>
                <th className="bordes">Localización</th>
                <th className="bordes">Numero</th>
                <th className="bordes">Costo m2</th>
                <th className="bordes">Sup. Terreno</th>
            </tr>
        </thead>
        <tbody>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
      </table>
      <br></br>
      <table className="table table-bordered">
        <thead>
            <tr className="bordes">
                <th className="bordes">Municipio</th>
                <th className="bordes">Colonia</th>
                <th className="bordes">Localización</th>
                <th className="bordes">Numero</th>
                <th className="bordes">Costo m2</th>
                <th className="bordes">Sup. Terreno</th>
            </tr>
        </thead>
        <tbody>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
      </table>
      {/* */}
      <br></br>
      <table className="table table-bordered">
        <thead>
            <tr className="bordes">
                <th className="bordes">Monto</th>
                <th className="bordes">Super. Constr</th>
                <th className="bordes">Nombre</th>
                <th className="bordes">Niveles</th>
                <th className="bordes">Niveles</th>
                <th className="bordes">Recamaras</th>
                <th className="bordes">Baños</th>
                <th className="bordes">Estacionamiento</th>
            </tr>
        </thead>
        <tbody>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="bordes">
                <td>{avaluoData.municipio}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default comprobables

/* eslint-disable no-unused-vars */
import Header from "../header/Header";
import { AvaluoContext } from "../AvaluoContext";
import { useContext } from "react";
import "../stilos/terreno.css";

function Similares() {
    const { avaluoData, setAvaluoData } = useContext(AvaluoContext);

  return (
    <div className="container mt-4">
    <Header/>
    <br></br>
    <div className="alert alert-warning text" role="alert">
        VIII.- ENFOQUE COMPARATIVO DE MERCADO
      </div>
      <p className="descrip">
        INMUEBLES SIMILARES EN VENTA:
      </p>
      <table className="table table-bordered">
        <thead>
            <tr className="bordes">
                <th className="bordes">1</th>
                <th className="bordes">{}</th>
                <th className="bordes">{}</th>
                <th className="bordes">{}</th>
                <th className="bordes">{}</th>
            </tr>
        </thead>
      </table>
      <p className="descrip">{}</p>

      <table className="table table-bordered">
        <thead>
            <tr className="bordes">
                <th className="bordes">2</th>
                <th className="bordes">{}</th>
                <th className="bordes">{}</th>
                <th className="bordes">{}</th>
                <th className="bordes">{}</th>
            </tr>
        </thead>
      </table>
      <p className="descrip">{}</p>

      <table className="table table-bordered">
        <thead>
            <tr className="bordes">
                <th className="bordes">3</th>
                <th className="bordes">{}</th>
                <th className="bordes">{}</th>
                <th className="bordes">{}</th>
                <th className="bordes">{}</th>
            </tr>
        </thead>
      </table>
      <p className="descrip">{}</p>

      <table className="table table-bordered">
        <thead>
            <tr className="bordes">
                <th className="bordes">4</th>
                <th className="bordes">{}</th>
                <th className="bordes">{}</th>
                <th className="bordes">{}</th>
                <th className="bordes">{}</th>
            </tr>
        </thead>
      </table>
      <p className="descrip">{}</p>

      <table className="table table-bordered">
        <thead>
            <tr className="bordes">
                <th className="bordes">No.</th>
                <th className="bordes">Oferta</th>
                <th className="bordes">Sup</th>
                <th className="bordes">$/m</th>
                <th className="bordes">FACTORES DE HOMOLOGACIÓN</th>
                <th className="bordes">$/m2</th>
            </tr>
        </thead>
      </table>

      <p className="derecho">
        VALOR HOMOLOGADO: <p className="definiciones-text">{}</p>
      </p>

      <p className="derecho">
        EN N.R. $/m2: <p className="definiciones-text">{}</p>
      </p>

      <p className="derecho">
        SUPERFICIE CONSTRUCCIÓN: <p className="definiciones-text">{}</p>
      </p>

      <p className="derecho">
        SUBTOTAL: <p className="definiciones-text">{}</p>
      </p>

      <p className="derecho">
        VALOR COMPARATIVO DE MERCADO: <p className="definiciones-text">{}</p>
      </p>
<br/>
      <p className="descrip">
        Factores utilizados:
      </p>

      <table className="table table-bordered">
      <tbody>
        <tr className="bordes">
            <td>{}</td>
            <td>{}</td>
        </tr>
        <tr className="bordes">
            <td>{}</td>
            <td>{}</td>
        </tr>
        <tr className="bordes">
            <td>{}</td>
            <td>{}</td>
        </tr>
        <tr className="bordes">
            <td>{}</td>
            <td>{}</td>
        </tr>
        <tr className="bordes">
            <td>{}</td>
            <td>{}</td>
        </tr>
        <tr className="bordes">
            <td>{}</td>
            <td>{}</td>
        </tr>
      </tbody>

      </table>
    </div>
  )
}

export default Similares

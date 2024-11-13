import "../datos.css";
import { AvaluoContext } from "../AvaluoContext";
import { useContext } from "react";
import Header from "../header/Header";

function datoss() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { avaluoData, setAvaluoData } = useContext(AvaluoContext);
  
  

  return (
    <div className="container mt-4 ">
    <Header/>
    <br></br>
      
      <div className="alert alert-warning text" role="alert">
        II.- DATOS GENERALES.
      </div>
      <hr></hr>
      <table className="table table-borderless table-hover">
        <tr className="border">
          <td className="portada-alineacion">PERITO VALUADOR</td>
          <td className="border">{avaluoData.pv}</td>
        </tr>
        <tr className="border">
          <td className="portada-alineacion">CÉDULA PROFESIONAL: </td>
          <td className="border">{avaluoData.cd}</td>
        </tr>
        <tr className="border">
          <td className="portada-alineacion">BIEN QUE SE VALÚA:</td>
          <td className="border">
            {avaluoData.bqv}
          </td>
        </tr>
        <tr className="border">
          <td className="portada-alineacion">REGIMEN DE LA PROPIEDAD: </td>
          <td className="border">{avaluoData.rdp}</td>
        </tr>
        <tr className="border">
          <td className="portada-alineacion">NOMBRE DEL CONTROLADOR: </td>
          <td className="border">{avaluoData.ndc}</td>
        </tr>
        <tr className="border">
          <td className="portada-alineacion">CLABE DEL CONTROLADOR SHF </td>
          <td className="border">{avaluoData.cdc}</td>
        </tr>
        <tr className="border">
          <td className="portada-alineacion">PROPÓSITO DEL EVALUÓ </td>
          <td className="border">{avaluoData.propositoEv}</td>
        </tr>
        <tr className="border">
          <td className="portada-alineacion">USO DEL EVALUO</td>
          <td className="border">{avaluoData.usoAvaluo}</td>
        </tr>
      </table>

      <form>
        <div className="form-row">
         

          <div className="alert alert-warning" role="alert">
            UBICACIÓN DEL INMUEBLE.
          </div>
          <table className="table table-borderless table-hover">
            <tr className="border">
              <td className="portada-alineacion">CALLE</td>
              <td className="border">{avaluoData.calle}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">NUMERO: </td>
              <td className="border">{avaluoData.colonia}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">DELEGACIÓN: </td>
              <td className="border">{avaluoData.delegacion}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">CÓDIGO POSTAL: </td>
              <td className="border">{avaluoData.cp}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">ESTADO Y PAÍS: </td>
              <td className="border">{avaluoData.estado}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">NUMERO DE CUENTA PREDIAL: </td>
              <td className="border">{avaluoData.ncp}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">NUMERO DE CUENTA DE AGUA: </td>
              <td className="border">{avaluoData.nca}</td>
            </tr>
          </table>
          <div className="alert alert-warning" role="alert">
            III.- CARACTERÍSTICAS URBANAS
          </div>

          <table className="table table-borderless table-hover">
            <tr className="border">
              <td className="portada-alineacion">CLASIFICACIÓN DE LA ZONA</td>
              <td className="border">{avaluoData.cla}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">TIPO DE CONSTRUCCIÓN DOMINANTE EN LA CALLE: </td>
              <td className="border">{avaluoData.tcdc}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">INDICE DE SATURACIÓN DE LA ZONA:</td>
              <td className="border">{avaluoData.usz}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">DENSIDAD DE LA POBLACIÓN: </td>
              <td className="border">{avaluoData.dp}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">CONTAMINACIÓN DEL AMBIENTAL]: </td>
              <td className="border">{avaluoData.ca}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">USO DEL SUELO PERMITIDO: </td>
              <td className="border">{avaluoData.usp}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">LOTE TIPO PREDOMINANTE: </td>
              <td className="border">{avaluoData.ltp}</td>
            </tr>
          </table>
          <div className="alert alert-warning" role="alert">
            VIAS DE ACCESO E IMPORTANCIA DE LAS MISMAS
          </div>
          <h5 className="card-title">SERVICIOS PÚBLICOS: </h5>

          <table className="table table-borderless table-hover">
            <tr className="border">
              <td className="portada-alineacion">{avaluoData.ap}</td>
              <td className="border">{avaluoData.drenaje}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">{avaluoData.tlf}</td>
              <td className="border">{avaluoData.cfe}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">{avaluoData.via}</td>
              <td className="border">{avaluoData.sn}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">{avaluoData.tu}</td>
              <td className="border">{avaluoData.alp}</td>
            </tr>
            <tr className="border">
              <td className="portada-alineacion">{avaluoData.vigilancia}</td>
              <td className="border">{avaluoData.rba}</td>
            </tr>
          </table>
          <h5 className="card-title">EQUIPAMIENTO URBANO: </h5>
        </div>

        <div className="form-group col-md-6">
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

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.usp}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, usp: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>USO DEL SUELO PERMITIDO: </label>
            </div>
          </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.ncp}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, ncp: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>NUMERO DE CUENTA DE PREDIAL: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.pv}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, pv: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>PERITO VALUADOR: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.cd}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, cd: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>CÉDULA PROFESIONAL: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.bqv}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, bqv: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>BIEN QUE SE VALÚA: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.rdp}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, rdp: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>REGIMEN DE LA PROPIEDAD: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.ndc}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, ndc: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>NOMBRE DEL CONTROLADOR: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.cdc}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, cdc: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>NOMBRE DEL CONTROLADOR SHF: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.nca}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, nca: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>NUMERO DE CUENTA DEL AGUA: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.cla}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, cla: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>CLASIFICACIÓN DE LA ZONA: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.tcdc}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, tcdc: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>TIPO DE CONSTRUCCIÓN DOMINANTE EN LA CALLE: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.usz}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, usz: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>INDICE DE SATURACIÓN EN LA ZONA: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.dp}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, dp: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>DENSIDAD DE LA POBLACIÓN: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.ca}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, ca: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>CONTAMINACIÓN AMBIENTAL: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.ltp}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, ltp: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>LOTE TIPO PREDOMINANTE: </label>
          </div>
        </div>

        <h5>RELLENA LOS APARTADOS SI CUENTA CON ESOS CAMPOS CON LA MISMA DESCRIPCIÓN</h5>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.ap}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, ap: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>AGUA POTABLE: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.cfe}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, cfe: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>ELECTRIFICACIÓN: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.via}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, via: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>VIALIDADES: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.alp}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, alp: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>ALUMBRADO PUBLICO: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.drenaje}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, drenaje: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>DRENAJE: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.sn}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, sn: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>SEÑALIZACIÓN Y NOMBLECATURA: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.tu}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, tu: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>TRANSPORTE URBANO: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.tlf}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, tlf: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>TELEFONÍA: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.vigilancia}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, vigilancia: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>VIGILANCIA: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={avaluoData.rba}
              onChange={(e) =>
                setAvaluoData({ ...avaluoData, rba: e.target.value })
              }
              className="form-control"
              id="floatingInputGrid"
              placeholder="Folio"
            />
            <label>RECOLECCIÓN DE BASURA: </label>
          </div>
        </div>

      </form>
    </div>
  );
}

export default datoss;

/* eslint-disable react-hooks/rules-of-hooks */
import Header from "../header/Header";
import "../stilos/terreno.css";
import { AvaluoContext } from "../AvaluoContext";
import { useContext } from "react";

function definiciones() {
  const { avaluoData, setAvaluoData } = useContext(AvaluoContext);

  return (
    <div className="container mt-4">
      <Header />
      <br></br>
      <div className="alert alert-warning text" role="alert">
        VII.- CONSIDERACIONES GENERALES
      </div>
      <p className="descrip">DEFINICIONES:</p>
      <p className="definiciones">
        EXISTEN ACTUALMENTE TRES ENFOQUES DE VALUACIÓN COMÚNMENTE ACEPTADOS:{" "}
        <p className="definiciones-text">{avaluoData.aceptados}</p>
      </p>
      <p className="definiciones">
        ENFOQUE COMPARATIVO DE MERCADO: <p className="definiciones-text">{avaluoData.mercado}</p>
      </p>
      <p className="definiciones">
        ENFOQUE DE COSTOS: <p className="definiciones-text">{avaluoData.costos}</p>
      </p>
      <p className="definiciones">
        ENFOQUE DE INGRESOS: <p className="definiciones-text">{avaluoData.ingresos}</p>
      </p>
      <br />

      <p className="definiciones2">
        COMENTARIOS GENERALES, SUPUESTOS Y CONDICIONES LIMITANTES DEL AVALUÓ:
      </p>
      <p className="definiciones2">
        PARA LA HOMOLOGACIÓN CORRESPONDIENTE A MERCADO DE SIMILARES, SE
        CONSIDERARON LOS SIGUIENTES FACTORES:
      </p>
      <p className="definiciones2">NEGOCIACIÓN</p>
      <p className="definiciones-text">{avaluoData.negociacion}</p>
      <p className="definiciones2">SUPERFICIE: </p>
      <p className="definiciones-text">{avaluoData.superficie}</p>
      <p className="definiciones2">UBICACIÓN: </p>
      <p className="definiciones-text">{avaluoData.ubicacion}</p>
      <p className="definiciones2">CALIDAD: </p>
      <p className="definiciones-text">{avaluoData.calidad}</p>
      <p className="definiciones2">ESTADO DE CONSERVACIÓN: </p>
      <p className="definiciones-text">{avaluoData.conservacion}</p>
      <p className="definiciones2">OTROS: </p>
      <p className="definiciones-text">{avaluoData.otros}</p>

      <hr></hr>

      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.aceptados}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, aceptados: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>DEFINICIÓN 1</label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.mercado}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, mercado: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>DEFINICIÓN 2</label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.costos}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, costos: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>DEFINICIÓN 3</label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.ingresos}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, ingresos: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>DEFINICIÓN 4</label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.negociacion}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, negociacion: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>NEGOCIACIÓN</label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.ubicacion}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, ubicacion: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>UBICACIÓN</label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.superficie}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, superficie: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>SUPERFICIE</label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.calidad}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, calidad: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>CALIDAD</label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.conservacion}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, conservacion: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>CONSERVACIÓN</label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.otros}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, otros: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>OTROS</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default definiciones;

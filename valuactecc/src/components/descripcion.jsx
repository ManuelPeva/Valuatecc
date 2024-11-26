/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import Header from "../header/Header";
import { AvaluoContext } from "../AvaluoContext";
import { useContext } from "react";
import "../stilos/terreno.css";

function descripcion() {
    const { avaluoData, setAvaluoData } = useContext(AvaluoContext);

  return (
    <div className="container mt-4">
      <Header/>
      <br/>
    <div className="alert alert-warning text" role="alert">
        V.- DESCRIPCIÓN DEL INMUEBLE.
    </div>
    <p className="descrip">DESCRIPCIÓN DE LAS</p>
    <p className="descrip">CONSTRUCCIONES Y USO DEL SUELO ACTUAL:</p>
    <br/>
    <p className="descrip">USO DEL SUELO:</p>
    <p className="descrip">SERVIDUMBRES O RESTRICCIONES:</p>

    <p className="descrip">No. RECAMARAS: <p className="definiciones-text">{avaluoData.recamaras}</p></p>
    <p className="descrip">No. BAÑOS: <p className="definiciones-text">{avaluoData.banos}</p></p>
    <p className="descrip">No. !/2 BAÑOS: <p className="definiciones-text">{avaluoData.banosM}</p></p>
    <p className="descrip">No. ESTACIONAMIENTOS: <p className="definiciones-text">{avaluoData.estacionamiento}</p></p>
    <p className="descrip">TIPOS DE CONSTRUCCIÓN: <p className="definiciones-text">{avaluoData.construccion}</p></p>
    <p className="descrip">CALIDAD Y CLASIFICACION: <p className="definiciones-text">{avaluoData.calidad}</p></p>
    <p className="descrip">NUMERO DE NIVELES: <p className="definiciones-text">{avaluoData.niveles}</p></p>
    <p className="descrip">EDAD APROXIMADA: <p className="definiciones-text">{avaluoData.edad}</p></p>
    <p className="descrip">VIDA UTIL REMANENTE: <p className="definiciones-text">{avaluoData.remanente}</p></p>
    <p className="descrip">VIDA TOTAL: <p className="definiciones-text">{avaluoData.vida}</p></p>
    <p className="descrip">ESTADO DE CONSERVACIÓN: <p className="definiciones-text">{avaluoData.estado_de_conservacion}</p></p>
    <p className="descrip">CALIDAD DEL PROYECTO: <p className="definiciones-text">{avaluoData.caproyect}</p></p>
    <p className="descrip">UNIDADES RENTABLES O SUSCEPTIBLES DE RENTARSE: <p className="definiciones-text">{avaluoData.urs}</p></p>
    <div className="alert alert-warning text" role="alert">
        VI.- ELEMENTOS DE LA CONSTRUCCIÓN.
    </div>
    <p className="descrip">a) OBRA NEGRA O GRUESA: <p className="definiciones-text">{} <hr/></p></p>
    <p className="descrip">CIMIENTOS: <p className="definiciones-text">{avaluoData.cimientos}<hr/></p></p>
    <p className="descrip">ESTRUCTURA: <p className="definiciones-text">{avaluoData.estructura}<hr/></p></p>
    <p className="descrip">MUROS: <p className="definiciones-text">{avaluoData.muros}<hr/></p></p>
    <p className="descrip">ENTREPISOS: <p className="definiciones-text">{avaluoData.entrepisos}<hr/></p></p>
    <p className="descrip">AZOTEAS: <p className="definiciones-text">{avaluoData.azoteas}<hr/></p></p>
    <p className="descrip">BARDAS: <p className="definiciones-text">{avaluoData.bardas}<hr/></p></p>

    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.recamaras}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, recamaras: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>No. RECAMARAS: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.banos}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, banos: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>No. BAÑOS: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.banosM}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, banosM: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>No !/2 BAÑOS: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.estacionamiento}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, estacionamiento: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>No. ESTACIONAMIENTOS: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.construccion}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, construccion: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>TIPOS DE CONSTRUCCIÓN: </label>
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
              <label>CALIDAD Y CLASIFICACIÓN: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.niveles}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, niveles: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>NUMERO DE NIVELES: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.edad}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, edad: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>EDAD APROXIMADA: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.remanente}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, remanente: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>VIDA UTIL REMANENTE: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.vida}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, vida: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>VIDA TOTAL: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.estado_de_conservacion}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, estado_de_conservacion: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>ESTADO DE CONSERVACIÓN: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.caproyect}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, caproyect: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>CALIDAD DEL PROYECTO: </label>
          </div>
        </div>

        

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.urs}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, urs: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>UNIDADES RENTABLES O SUSCEPTIBLES DE RENTARSE </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.cimientos}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, cimientos: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>ESTRUCTURA: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.muros}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, muros: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>MUROS: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.entrepisos}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, entrepisos: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>ENTREPISOS: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.azoteas}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, azoteas: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>AZOTEAS: </label>
          </div>
        </div>

        <div className="form-group col-md-6">
          <div className="form-floating mb-3">
          <input
                type="text"
                value={avaluoData.bardas}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, bardas: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>BARDAS: </label>
          </div>
        </div>




      </div>
    </form>
    </div>
  )
}

export default descripcion

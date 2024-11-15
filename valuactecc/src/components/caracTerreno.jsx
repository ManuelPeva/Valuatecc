import Header from "../header/Header";
import { AvaluoContext } from "../AvaluoContext";
import { useContext } from "react";
import "../stilos/terreno.css";

function caracterreno() {
  const { avaluoData, setAvaluoData } = useContext(AvaluoContext);

  return (
    <div className="container mt-4">
      <Header />
      <br></br>
      <div className="alert alert-warning text" role="alert">
        IV.- TERRENO
      </div>
      <p className="descrip">
        TRAMOS DE CALLE, CALLES TRANSVERSALES LIMÍTROFES Y ORIENTACIÓN:{" "}
        {avaluoData.terreno}
      </p>
      <p className="descrip">
        LINDEROS Y COLINDANCIAS SEGÚN: {avaluoData.colindancia}
      </p>

      <table className="table table-bordered">
        <thead>
          <tr className="bordes">
            <th className="bordes">ORIENTACIÓN</th>
            <th className="bordes">DISTANCIA</th>
            <th className="bordes">COLINDANCIAS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bordes">
            <td>DEL TERRENO:</td>
          </tr>
          <tr className="bordes">
            <td>AL NORTE</td>
            <td>{avaluoData.disnorte}</td>
            <td>{avaluoData.colinorte}</td>
          </tr>
          <tr className="bordes">
            <td>AL SUR</td>
            <td>{avaluoData.dissur}</td>
            <td>{avaluoData.colisur}</td>
          </tr>
          <tr className="bordes">
            <td>AL ESTE</td>
            <td>{avaluoData.diseste}</td>
            <td>{avaluoData.colieste}</td>
          </tr>
          <tr className="bordes">
            <td>AL OESTE</td>
            <td>{avaluoData.disoeste}</td>
            <td>{avaluoData.colioeste}</td>
          </tr>
        </tbody>
      </table>

      <p>VALOR DE REFERENCIA DEL SUELO: {avaluoData.vreferencia}</p>

      <p>AREA DE VALOR: {avaluoData.adv}</p>

      <p>AREA DEL TERRENO: {avaluoData.adt}</p>


      <p>AREA DE CONSTRUCCIÓN: {avaluoData.adc}</p>

      <p>INDIVISO: {avaluoData.indiviso}</p>

      <p>USO ACTUAL DEL BIEN: {avaluoData.uadb}</p>

      <p>TOPOGRAFÍA Y CONFIGURACIÓN: {avaluoData.tyc}</p>

      <p>NUMERO DE FRENTES: {avaluoData.ndf}</p>

      <p>CARACTERÍSTICAS PANORÁMICAS: {avaluoData.caracp}</p>

      <p>DENSIDAD HABITACIONAL: {avaluoData.dh}</p>

      <p>SERVIDUMBRE y/o RESTRICCIONES: {avaluoData.ser}</p>



      {/*---------------------------------------------------------------------------------------*/}


      <p className="indicacion">
        RELLENA LOS CAMPOS PARA COMPLETAR LOS DATOS SUPERIORES
      </p>
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

          <p>NORTE:</p>
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.disnorte}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, disnorte: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>DISTANCIA: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.colinorte}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, colinorte: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>COLINDANCIAS: </label>
            </div>
          </div>


          <p>SUR:</p>
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.dissur}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, dissur: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>DISTANCIA: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.colisur}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, colisur: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>COLINDANCIAS: </label>
            </div>
          </div>

          <p>ESTE:</p>
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.diseste}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, diseste: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>DISTANCIA: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.colieste}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, colieste: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>COLINDANCIAS: </label>
            </div>
          </div>


          <p>OESTE:</p>
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.disoeste}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, disoeste: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>DISTANCIA: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.colioeste}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, colioeste: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>COLINDANCIAS: </label>
            </div>
          </div>
          <hr/>

          {/*.........-----------....................------------------------------*/}

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.vreferencia}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, vreferencia: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>VALOR DE REFERENCIA DEL SUELO: </label>
            </div>
          </div>
          
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.adv}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, adv: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>AREA DE VALOR: </label>
            </div>
          </div>


          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.adt}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, adt: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>AREA DE VALOR: </label>
            </div>
          </div>


          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.adc}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, adc: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>AREA DE CONSTRUCCIÓN: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.indiviso}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, indiviso: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>AREA DE CONSTRUCCIÓN: </label>
            </div>
          </div>


          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.indiviso}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, indiviso: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>INDIVISO: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.uadb}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, uadb: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>USO ACTUAL DEL BIEN: </label>
            </div>
          </div>


          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.tyc}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, tyc: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>TOPOGRAFÍA Y CONFIGURACIÓN: </label>
            </div>
          </div>

          
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.ndf}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, ndf: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>NUMERO DE FRENTES: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.caracp}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, caracp: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>CARACTERÍSTICAS PANORÁMICAS: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.dh}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, dh: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>DENSIDAD HABITACIONAL: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.ser}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, ser: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>SERVIDUMBRES Y/O RESTRICCIONES: </label>
            </div>
          </div>


        </div>
      </form>
    </div>
  );
}

export default caracterreno;

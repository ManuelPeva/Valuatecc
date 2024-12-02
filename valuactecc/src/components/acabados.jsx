/* eslint-disable no-unused-vars */
import Header from "../header/Header";
import { AvaluoContext } from "../AvaluoContext";
import { useContext } from "react";
import "../stilos/terreno.css";

const Acabados = () => {
  const { avaluoData, setAvaluoData } = useContext(AvaluoContext);
  return (
    <div className="container mt-4">
      <Header />
      <br />
      <p className="descrip">b) REVESTIMIENTOS Y ACABADOS INTERIORES:</p>
      <p className="descrip">APLANADOS INTERIORES:</p>
      <br />
      <p className="descrip">APLANADOS EXTERIORES:</p>
      <p className="descrip">LOSETA DE CERÁMICA</p>

      {/* tabla */}
      <table className="table table-bordered">
        <thead>
          <tr className="bordes">
            <th className="bordes">ESPACIOS ARQUITECTÓNICOS</th>
            <th className="bordes">PISOS</th>
            <th className="bordes">MUROS</th>
            <th className="bordes">PLAFONES</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bordes">
            <td>ESTANCIA/COMEDOR</td>
            <td>{avaluoData.p1}</td>
            <td>{avaluoData.m1}</td>
            <td>{avaluoData.pl1}</td>
          </tr>
          <tr className="bordes">
            <td>COCINA</td>
            <td>{avaluoData.p2}</td>
            <td>{avaluoData.m2}</td>
            <td>{avaluoData.pl2}</td>
          </tr>
          <tr className="bordes">
            <td>recamaras</td>
            <td>{avaluoData.p3}</td>
            <td>{avaluoData.m3}</td>
            <td>{avaluoData.pl3}</td>
          </tr>
          <tr className="bordes">
            <td>baños</td>
            <td>{avaluoData.p4}</td>
            <td>{avaluoData.m4}</td>
            <td>{avaluoData.pl4}</td>
          </tr>
          <tr className="bordes">
            <td>escaleras</td>
            <td>{avaluoData.p5}</td>
            <td>{avaluoData.m5}</td>
            <td>{avaluoData.pl5}</td>
          </tr>
          <tr className="bordes">
            <td>patio de servicio</td>
            <td>{avaluoData.p6}</td>
            <td>{avaluoData.m6}</td>
            <td>{avaluoData.pl6}</td>
          </tr>
          <tr className="bordes">
            <td>estacionamiento</td>
            <td>{avaluoData.p7}</td>
            <td>{avaluoData.m7}</td>
            <td>{avaluoData.pl7}</td>
          </tr>
          <tr className="bordes">
            <td>fachada</td>
            <td>{avaluoData.p8}</td>
            <td>{avaluoData.m8}</td>
            <td>{avaluoData.pl8}</td>
          </tr>
          <tr className="bordes">
            <td>pintura</td>
            <td>{avaluoData.p9}</td>
            <td>{avaluoData.m9}</td>
            <td>{avaluoData.pl9}</td>
          </tr>
        </tbody>
      </table>
      <p className="descrip">
        c) CARPINTERÍA<p className="descrip">{avaluoData.carpinteria}</p>
      </p>
      <p className="descrip">d) INSTALACIONES HIDRAULICAS Y SANITARIAS: </p>
      <br></br>
      <p className="descrip">
        MUEBLES DE BAÑO/COCINA <p className="descrip">{avaluoData.muebles}</p>
      </p>
      <p className="descrip">
        e) INSTALACIONES ELÉCTRICAS: <p className="descrip">{avaluoData.instalaciones}</p>
      </p>
      <p className="descrip">
        f) PUERTAS Y VENTANERÍA:<p className="descrip">{avaluoData.puerta}</p>
      </p>
      <p className="descrip">
        HERRERÍA:<p className="descrip">{avaluoData.herreria}</p>
      </p>
      <p className="descrip">
        g)VIDRIERÍA:<p className="descrip">{avaluoData.vidreria}</p>
      </p>
      <p className="descrip">
        h) CERRAJERÍA:<p className="descrip">{avaluoData.cerrajeria}</p>
      </p>
      <p className="descrip">
        i) FACHADA:<p className="descrip">{avaluoData.fachada}</p>
      </p>
      <p className="descrip">
        j) INSTALACIONES ESPECIALES, ELEMENTOS ACCESORIOS Y OBRAS
        COMPLEMENTARIAS OBRAS COMPLEMENTARIAS:<p className="descrip">{avaluoData.especiales}</p>
      </p>
      <p className="descrip">
         <p className="descrip">{}</p>
      </p>

      <form>
        <div className="form-row">

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.p1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, p1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Pisos de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.m1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, m1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Muros de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.pl1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, pl1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Plafones de estancia/comedor: </label>
            </div>
          </div>
          <p>Cocina:</p>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.p2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, p2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Pisos de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.m2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, m2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Muros de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.pl2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, pl2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Plafones de estancia/comedor: </label>
            </div>
          </div>

          <p>Recamaras:</p>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.p3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, p3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Pisos de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.m3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, m3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Muros de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.pl3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, pl3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Plafones de estancia/comedor: </label>
            </div>
          </div>


          <p>Baños:</p>
          
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.p4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, p4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Pisos de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.m4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, m4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Muros de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.pl4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, pl4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Plafones de estancia/comedor: </label>
            </div>
          </div>

          <p>Escaleras:</p>
          
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.p5}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, p5: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Pisos de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.m5}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, m5: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Muros de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.pl5}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, pl5: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Plafones de estancia/comedor: </label>
            </div>
          </div>

          <p>Patio de servicio:</p>
          
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.p6}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, p6: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Pisos de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.m6}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, m6: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Muros de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.pl6}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, pl6: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Plafones de estancia/comedor: </label>
            </div>
          </div>

          <p>Estacionamiento:</p>
          
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.p7}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, p7: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Pisos de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.m7}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, m7: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Muros de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.pl7}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, pl7: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Plafones de estancia/comedor: </label>
            </div>
          </div>


          <p>Fachada:</p>
          
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.p8}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, p8: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Pisos de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.m8}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, m8: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Muros de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.pl8}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, pl8: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Plafones de estancia/comedor: </label>
            </div>
          </div>

          <p>Pintura:</p>
          
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.p9}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, p9: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Pisos de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.m9}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, m9: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Muros de estancia/comedor: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.pl9}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, pl9: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Plafones de estancia/comedor: </label>
            </div>
          </div>


          <hr/>
          
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.carpinteria}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, carpinteria: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Carpintería: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.muebles}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, muebles: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Muebles de baño: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.instalaciones}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, instalaciones: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Instalaciones eléctricas: </label>
            </div>
          </div>


         
          
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.puerta}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, puerta: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Puertas y ventanería: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.herreria}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, herreria: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Herrería: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.vidreria}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, vidreria: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Vidriería: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.cerrajeria}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, cerrajeria: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Cerrajería: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.fachada}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, fachada: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Fachada: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.especiales}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, especiales: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Especiales: </label>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Acabados;

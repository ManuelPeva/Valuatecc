/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import Header from "../header/Header";
import { AvaluoContext } from "../AvaluoContext";
import { useContext } from "react";
import "../stilos/terreno.css";

function comprobables() {
  const { avaluoData, setAvaluoData } = useContext(AvaluoContext);

  return (
    <div className="container mt-4">
      <Header />
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
            <td>{avaluoData.des1}</td>
            <td>{avaluoData.colonia1}</td>
            <td>{avaluoData.num1}</td>
            <td>{(avaluoData.costo1 = avaluoData.monto1 / avaluoData.sup1)}</td>
            <td>{avaluoData.supTerreno1}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.municipio}</td>
            <td>{avaluoData.des2}</td>
            <td>{avaluoData.colonia2}</td>
            <td>{avaluoData.num2}</td>
            <td>{(avaluoData.costo2 = avaluoData.monto2 / avaluoData.sup2)}</td>
            <td>{avaluoData.supTerreno2}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.municipio}</td>
            <td>{avaluoData.des3}</td>
            <td>{avaluoData.colonia3}</td>
            <td>{avaluoData.num3}</td>
            <td>{(avaluoData.costo3 = avaluoData.monto3 / avaluoData.sup3)}</td>
            <td>{avaluoData.supTerreno3}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.municipio}</td>
            <td>{avaluoData.des4}</td>
            <td>{avaluoData.colonia4}</td>
            <td>{avaluoData.num4}</td>
            <td>{(avaluoData.costo4 = avaluoData.monto4 / avaluoData.sup4)}</td>
            <td>{avaluoData.supTerreno4}</td>
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
            <td>{avaluoData.colonia11}</td>
            <td>{avaluoData.loca1}</td>
            <td>{avaluoData.num21}</td>
            <td>
              {
                (avaluoData.costo11 =
                  avaluoData.monto11 / avaluoData.supTerreno11)
              }
            </td>
            <td>{avaluoData.sup11}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.municipio}</td>
            <td>{avaluoData.colonia12}</td>
            <td>{avaluoData.loca2}</td>
            <td>{avaluoData.num22}</td>
            <td>
              {
                (avaluoData.costo12 =
                  avaluoData.monto12 / avaluoData.supTerreno12)
              }
            </td>
            <td>{avaluoData.sup12}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.municipio}</td>
            <td>{avaluoData.colonia13}</td>
            <td>{avaluoData.loca3}</td>
            <td>{avaluoData.num23}</td>
            <td>
              {
                (avaluoData.costo13 =
                  avaluoData.monto13 / avaluoData.supTerreno13)
              }
            </td>
            <td>{avaluoData.sup13}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.municipio}</td>
            <td>{avaluoData.colonia14}</td>
            <td>{avaluoData.loca4}</td>
            <td>{avaluoData.num24}</td>
            <td>
              {
                (avaluoData.costo14 =
                  avaluoData.monto14 / avaluoData.supTerreno14)
              }
            </td>
            <td>{avaluoData.sup14}</td>
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
            <th className="bordes">Recamaras</th>
            <th className="bordes">Baños</th>
            <th className="bordes">Estacionamiento</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bordes">
            <td>{avaluoData.monto11}</td>
            <td>{avaluoData.supTerreno11}</td>
            <td>{avaluoData.nombre11}</td>
            <td>{avaluoData.niveles11}</td>

            <td>{avaluoData.r1}</td>
            <td>{avaluoData.ba11}</td>
            <td>{avaluoData.esta11}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.monto12}</td>
            <td>{avaluoData.supTerreno12}</td>
            <td>{avaluoData.nombre12}</td>
            <td>{avaluoData.niveles12}</td>

            <td>{avaluoData.r2}</td>
            <td>{avaluoData.ba12}</td>
            <td>{avaluoData.esta12}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.monto13}</td>
            <td>{avaluoData.supTerreno13}</td>
            <td>{avaluoData.nombre13}</td>
            <td>{avaluoData.niveles13}</td>

            <td>{avaluoData.r3}</td>
            <td>{avaluoData.ba13}</td>
            <td>{avaluoData.esta13}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.monto14}</td>
            <td>{avaluoData.supTerreno14}</td>
            <td>{avaluoData.nombre14}</td>
            <td>{avaluoData.niveles14}</td>

            <td>{avaluoData.r4}</td>
            <td>{avaluoData.ba14}</td>
            <td>{avaluoData.esta14}</td>
          </tr>
        </tbody>
      </table>

      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.municipio}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, municipio: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Municipio: </label>
            </div>
          </div>

          <p>Monto 1</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.monto1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, monto1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Monto: </label>
            </div>
          </div>

          <p>Monto 2</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.monto2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, monto2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Monto: </label>
            </div>
          </div>

          <p>Monto 3</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.monto3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, monto3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Monto: </label>
            </div>
          </div>

          <p>Monto 4</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.monto4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, monto4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Monto: </label>
            </div>
          </div>

          <p>Superficie del terreno 1</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.supTerreno1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, supTerreno1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Sup Terreno: </label>
            </div>
          </div>

          <p>Superficie del terreno 2</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.supTerreno2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, supTerreno2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Sup Terreno: </label>
            </div>
          </div>

          <p>Superficie del terreno 3</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.supTerreno3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, supTerreno3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Sup Terreno: </label>
            </div>
          </div>

          <p>Superficie del terreno 4</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.supTerreno4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, supTerreno4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Sup Terreno: </label>
            </div>
          </div>

          <p>Tabla 2 Colonia</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.colonia11}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, colonia11: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>colonia 1: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.colonia12}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, colonia12: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>colonia 2: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.colonia13}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, colonia13: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>colonia 3: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.colonia14}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, colonia14: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>colonia 4: </label>
            </div>
          </div>

          <p>Tabla 2 Localización</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.loca1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, loca1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Localización 1: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.loca2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, loca2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Localización 2: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.loca3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, loca3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Localización 3: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.loca4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, loca4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Localización 4: </label>
            </div>
          </div>

          <p>Tabla 2 numero</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.num21}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, num21: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Numero 1: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.num22}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, num22: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Numero 2: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.num23}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, num23: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Numero 3: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.num24}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, num24: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Numero 4: </label>
            </div>
          </div>

          <p>Tabla 2 superficie</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.sup11}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, sup11: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Superficie 1: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.sup12}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, sup12: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Superficie 2: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.sup13}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, sup13: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Superficie 3: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.sup14}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, sup14: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Superficie 4: </label>
            </div>
          </div>

          <p>Tabla 3</p>

          <p>Monto 1</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.monto11}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, monto11: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Monto: </label>
            </div>
          </div>

          <p>Monto 2</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.monto12}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, monto12: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Monto: </label>
            </div>
          </div>

          <p>Monto 3</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.monto13}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, monto13: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Monto: </label>
            </div>
          </div>

          <p>Monto 4</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.monto14}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, monto14: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Monto: </label>
            </div>
          </div>

          <p>Tabla 3 superficie de construcción</p>
          {/*Montos*/}
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.supTerreno11}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, supTerreno11: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Superficie 1: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.supTerreno12}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, supTerreno12: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Superficie 2: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.supTerreno13}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, supTerreno13: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Superficie 3: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.supTerreno14}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, supTerreno14: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Superficie 4: </label>
            </div>
          </div>

          <p>Nombre</p>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="url"
                value={avaluoData.nombre11}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, nombre11: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Nombre 1: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="url"
                value={avaluoData.nombre12}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, nombre12: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Nombre 2: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="url"
                value={avaluoData.nombre13}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, nombre13: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Nombre 3: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="url"
                value={avaluoData.nombre14}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, nombre14: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Nombre 4: </label>
            </div>
          </div>

          <p>Recamaras</p>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.r1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, r1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Recamaras (1): </label>
            </div>
          </div>


          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.r2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, r2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Recamaras (2): </label>
            </div>
          </div>


          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.r3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, r3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Recamaras (3): </label>
            </div>
          </div>


          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.r4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, r4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Recamaras (4): </label>
            </div>
          </div>
         


          <p>Baños</p>

<div className="form-group col-md-6">
  <div className="form-floating mb-3">
    <input
      type="number"
      value={avaluoData.ba11}
      onChange={(e) =>
        setAvaluoData({ ...avaluoData, ba11: e.target.value })
      }
      className="form-control"
      id="floatingInputGrid"
      placeholder="Folio"
    />
    <label>Baños (1): </label>
  </div>
</div>


<div className="form-group col-md-6">
  <div className="form-floating mb-3">
    <input
      type="number"
      value={avaluoData.ba12}
      onChange={(e) =>
        setAvaluoData({ ...avaluoData, ba12: e.target.value })
      }
      className="form-control"
      id="floatingInputGrid"
      placeholder="Folio"
    />
    <label>Baños (2): </label>
  </div>
</div>


<div className="form-group col-md-6">
  <div className="form-floating mb-3">
    <input
      type="number"
      value={avaluoData.ba13}
      onChange={(e) =>
        setAvaluoData({ ...avaluoData, ba13: e.target.value })
      }
      className="form-control"
      id="floatingInputGrid"
      placeholder="Folio"
    />
    <label>Baños (3): </label>
  </div>
</div>


<div className="form-group col-md-6">
  <div className="form-floating mb-3">
    <input
      type="number"
      value={avaluoData.ba14}
      onChange={(e) =>
        setAvaluoData({ ...avaluoData, ba14: e.target.value })
      }
      className="form-control"
      id="floatingInputGrid"
      placeholder="Folio"
    />
    <label>Baños (4): </label>
  </div>
</div>



<p>Estacionamiento</p>

<div className="form-group col-md-6">
  <div className="form-floating mb-3">
    <input
      type="number"
      value={avaluoData.esta11}
      onChange={(e) =>
        setAvaluoData({ ...avaluoData, esta11: e.target.value })
      }
      className="form-control"
      id="floatingInputGrid"
      placeholder="Folio"
    />
    <label>Estacionamiento (1): </label>
  </div>
</div>


<div className="form-group col-md-6">
  <div className="form-floating mb-3">
    <input
      type="number"
      value={avaluoData.esta12}
      onChange={(e) =>
        setAvaluoData({ ...avaluoData, esta12: e.target.value })
      }
      className="form-control"
      id="floatingInputGrid"
      placeholder="Folio"
    />
    <label>Estacionamiento (2): </label>
  </div>
</div>


<div className="form-group col-md-6">
  <div className="form-floating mb-3">
    <input
      type="number"
      value={avaluoData.esta13}
      onChange={(e) =>
        setAvaluoData({ ...avaluoData, esta13: e.target.value })
      }
      className="form-control"
      id="floatingInputGrid"
      placeholder="Folio"
    />
    <label>Estacionamiento (3): </label>
  </div>
</div>


<div className="form-group col-md-6">
  <div className="form-floating mb-3">
    <input
      type="number"
      value={avaluoData.esta14}
      onChange={(e) =>
        setAvaluoData({ ...avaluoData, esta14: e.target.value })
      }
      className="form-control"
      id="floatingInputGrid"
      placeholder="Folio"
    />
    <label>Estacionamiento (4): </label>
  </div>
</div>

        </div>
      </form>
    </div>
  );
}

export default comprobables;

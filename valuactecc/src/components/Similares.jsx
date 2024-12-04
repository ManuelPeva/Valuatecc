/* eslint-disable no-unused-vars */
import Header from "../header/Header";
import { AvaluoContext } from "../AvaluoContext";
import { useContext } from "react";
import "../stilos/terreno.css";

function Similares() {
  const { avaluoData, setAvaluoData } = useContext(AvaluoContext);

  return (
    <div className="container mt-4">
      <Header />
      <br></br>
      <div className="alert alert-warning text" role="alert">
        VIII.- ENFOQUE COMPARATIVO DE MERCADO
      </div>
      <p className="descrip">INMUEBLES SIMILARES EN VENTA: {avaluoData.tel1}</p>
      <table className="table table-bordered">
        <thead>
          <tr className="bordes">
            <th className="bordes">1</th>
            <th className="bordes">{avaluoData.colonia1}</th>
            <th className="bordes">{avaluoData.num1}</th>
            <th className="bordes">{avaluoData.tel2}</th>
            <th className="bordes">{avaluoData.url1}</th>
          </tr>
        </thead>
      </table>
      <p className="descrip">{avaluoData.des1}</p>

      <table className="table table-bordered">
        <thead>
          <tr className="bordes">
            <th className="bordes">2</th>
            <th className="bordes">{avaluoData.colonia2}</th>
            <th className="bordes">{avaluoData.num2}</th>
            <th className="bordes">{avaluoData.tel3}</th>
            <th className="bordes">{avaluoData.url2}</th>
          </tr>
        </thead>
      </table>
      <p className="descrip">{avaluoData.des2}</p>

      <table className="table table-bordered">
        <thead>
          <tr className="bordes">
            <th className="bordes">3</th>
            <th className="bordes">{avaluoData.colonia3}</th>
            <th className="bordes">{avaluoData.num3}</th>
            <th className="bordes">{avaluoData.tel4}</th>
            <th className="bordes">{avaluoData.url3}</th>
          </tr>
        </thead>
      </table>
      <p className="descrip">{avaluoData.des3}</p>

      <table className="table table-bordered">
        <thead>
          <tr className="bordes">
            <th className="bordes">4</th>
            <th className="bordes">{avaluoData.colonia4}</th>
            <th className="bordes">{avaluoData.num4}</th>
            <th className="bordes">{avaluoData.tel5}</th>
            <th className="bordes">{avaluoData.url4}</th>
          </tr>
        </thead>
      </table>
      <p className="descrip">{avaluoData.des4}</p>

      <table className="table table-bordered">
        <thead>
          <tr className="bordes">
            <th className="bordes" colSpan="1">
              No.
            </th>
            <th className="bordes" colSpan="1">
              Oferta
            </th>
            <th className="bordes" colSpan="1">
              Sup
            </th>
            <th className="bordes" colSpan="1">
              $/m
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bordes">
            <td>1</td>
            <td>{avaluoData.oferta1}</td>
            <td>{avaluoData.sup1}</td>
            <td>{(avaluoData.me1 = avaluoData.oferta1 / avaluoData.sup1)}</td>
          </tr>
          <tr className="bordes">
            <td>2</td>
            <td>{avaluoData.oferta2}</td>
            <td>{avaluoData.sup2}</td>
            <td>{(avaluoData.me2 = avaluoData.oferta2 / avaluoData.sup2)}</td>
          </tr>
          <tr className="bordes">
            <td>3</td>
            <td>{avaluoData.oferta3}</td>
            <td>{avaluoData.sup3}</td>
            <td>{(avaluoData.me3 = avaluoData.oferta3 / avaluoData.sup3)}</td>
          </tr>
          <tr className="bordes">
            <td>4</td>
            <td>{avaluoData.oferta4}</td>
            <td>{avaluoData.sup4}</td>
            <td>{(avaluoData.me4 = avaluoData.oferta4 / avaluoData.sup4)}</td>
          </tr>
        </tbody>
      </table>

      {/*tabla 2-2 */}
      <p>FACTORES DE HOMOLOGACIÓN</p>
      <table className="table table-bordered">
        <thead>
          <tr className="bordes">
            <th className="bordes" colSpan="1">
              NEG.
            </th>
            <th className="bordes" colSpan="1">
              UBIC.
            </th>
            <th className="bordes" colSpan="1">
              Sup
            </th>
            <th className="bordes" colSpan="1">
              CALIDAD
            </th>
            <th className="bordes" colSpan="1">
              EDO. CONS.
            </th>
            <th className="bordes" colSpan="1">
              OTRO
            </th>
            <th className="bordes" colSpan="1">
              FRe
            </th>
            <th className="bordes" colSpan="1">
              $/m2
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bordes">
            <td>{avaluoData.neg1}</td>
            <td>{avaluoData.ubi1}</td>
            <td>{avaluoData.super1}</td>
            <td>{avaluoData.ca1}</td>
            <td>{avaluoData.edo1}</td>
            <td>{avaluoData.otro1}</td>
            <td>{avaluoData.fre1}</td>
            <td>{(avaluoData.cuadrado1 = avaluoData.me1 * avaluoData.fre1)}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.neg2}</td>
            <td>{avaluoData.ubi2}</td>
            <td>{avaluoData.msuper}</td>
            <td>{avaluoData.ca2}</td>
            <td>{avaluoData.edo2}</td>
            <td>{avaluoData.otro2}</td>
            <td>{avaluoData.fre2}</td>
            <td>{(avaluoData.cuadrado2 = avaluoData.me2 * avaluoData.fre2)}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.neg3}</td>
            <td>{avaluoData.ubi3}</td>
            <td>{avaluoData.super3}</td>
            <td>{avaluoData.ca3}</td>
            <td>{avaluoData.edo3}</td>
            <td>{avaluoData.otro3}</td>
            <td>{avaluoData.fre3}</td>
            <td>{(avaluoData.cuadrado3 = avaluoData.me3 * avaluoData.fre3)}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.neg4}</td>
            <td>{avaluoData.ubi4}</td>
            <td>{avaluoData.super4}</td>
            <td>{avaluoData.ca4}</td>
            <td>{avaluoData.edo4}</td>
            <td>{avaluoData.otro4}</td>
            <td>{avaluoData.fre4}</td>
            <td>{(avaluoData.cuadrado4 = avaluoData.me4 * avaluoData.fre4)}</td>
          </tr>
        </tbody>
      </table>

      <p className="derecho">
        VALOR HOMOLOGADO:{" "}
        <p className="definiciones-textt">
          {
            (avaluoData.homologado =
              (avaluoData.cuadrado1 +
                avaluoData.cuadrado2 +
                avaluoData.cuadrado3 +
                avaluoData.cuadrado4) /
              4)
          }
        </p>
      </p>

      <p className="derecho">
        EN N.R. $/m2:{" "}
        <p className="definiciones-textt">
          {
            (avaluoData.en = Math.ceil(
              (avaluoData.cuadrado1 +
                avaluoData.cuadrado2 +
                avaluoData.cuadrado3 +
                avaluoData.cuadrado4) /
                4
            ))
          }
        </p>
      </p>

      <p className="derecho">
        SUPERFICIE CONSTRUCCIÓN:{" "}
        <p className="definiciones-textt">{avaluoData.adc}</p>
      </p>

      <p className="derecho">
        SUBTOTAL: <p className="definiciones-textt">{avaluoData.subtotal = avaluoData.en*avaluoData.adc}</p>
      </p>

      <p className="derecho">
        VALOR COMPARATIVO DE MERCADO:{" "}
        <p className="definiciones-textt">{avaluoData.valorC = Number(avaluoData.adc) + Number(avaluoData.subtotal)}</p>
      </p>
      <br />
      <p className="descrip">Factores utilizados:</p>

      <table className="table table-bordered">
        <tbody>
          <tr className="bordes">
            <td>{avaluoData.d1}</td>
            <td>{avaluoData.d2}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.d3}</td>
            <td>{avaluoData.d4}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.d5}</td>
            <td>{avaluoData.d6}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.d7}</td>
            <td>{avaluoData.d8}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.d9}</td>
            <td>{avaluoData.d10}</td>
          </tr>
          <tr className="bordes">
            <td>{avaluoData.d11}</td>
            <td>{avaluoData.d12}</td>
          </tr>
        </tbody>
      </table>

      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="tel"
                value={avaluoData.tel1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, tel1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Numero de teléfono del inmueble: </label>
            </div>
          </div>

          {/*copiar desde aqui */}

          <p>1° INMUEBLE</p>
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.colonia1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, colonia1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Colonia: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.num1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, num1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Numero telefónico: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.tel2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, tel2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Numero telefónico: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="url"
                value={avaluoData.url1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, url1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Url: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.des1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, des1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Descripción: </label>
            </div>
          </div>

          <p>2° INMUEBLE</p>
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.colonia2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, colonia2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Colonia: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.num2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, num2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Numero telefónico: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.tel3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, tel3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Numero telefónico: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="url"
                value={avaluoData.url2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, url2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Url: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.des2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, des2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Descripción: </label>
            </div>
          </div>

          <p>3° INMUEBLE</p>
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.colonia3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, colonia3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Colonia: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.num3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, num3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Numero telefónico: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.tel4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, tel4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Numero telefónico: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="url"
                value={avaluoData.url3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, url3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Url: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.des3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, des3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Descripción: </label>
            </div>
          </div>

          <p>4° INMUEBLE</p>
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.colonia4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, colonia4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Colonia: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.num4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, num4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Numero telefónico: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.tel5}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, tel5: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Numero telefónico: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="url"
                value={avaluoData.url4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, url4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Url: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.des4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, des4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Descripción: </label>
            </div>
          </div>

          {/*segunda tabla */}
          <hr></hr>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.oferta1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, oferta1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>1° oferta: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.sup1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, sup1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Sup.: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.neg1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, neg1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>NEG.: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.ubi1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, ubi1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>UBIC: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.super1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, super1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Sup: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.ca1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, ca1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Calidad: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.edo1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, edo1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>EDO.CONS: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.otro1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, otro1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Otro: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.fre1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, fre1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>FRe: </label>
            </div>
          </div>

          {/*fin de llenado de la tabla */}

          {/*inicio de tabla */}
          <hr></hr>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.oferta2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, oferta2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>2° oferta: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.sup2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, sup2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Sup.: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.neg2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, neg2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>NEG.: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.ubi2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, ubi2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>UBIC: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.super2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, super2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Sup: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.ca2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, ca2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Calidad: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.edo2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, edo2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>EDO.CONS: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.otro2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, otro2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Otro: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.fre2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, fre2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>FRe: </label>
            </div>
          </div>

          {/*fin de llenado de la tabla */}

          {/*segunda tabla */}
          <hr></hr>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.oferta3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, oferta3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>3° oferta: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.sup3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, sup3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Sup.: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.neg3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, neg3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>NEG.: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.ubi3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, ubi3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>UBIC: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.super3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, super3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Sup: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.ca3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, ca3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Calidad: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.edo3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, edo3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>EDO.CONS: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.otro3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, otro3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Otro: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.fre3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, fre3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>FRe: </label>
            </div>
          </div>

          {/*fin de llenado de la tabla */}

          {/*segunda tabla */}
          <hr></hr>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.oferta4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, oferta4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>4° oferta: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.sup4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, sup4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Sup.: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.neg4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, neg4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>NEG.: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.ubi4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, ubi4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>UBIC: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.super4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, super4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Sup: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.ca4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, ca4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Calidad: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.edo4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, edo4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>EDO.CONS: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.otro4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, otro4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Otro: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                value={avaluoData.fre4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, fre4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>FRe: </label>
            </div>
          </div>

          {/*fin de llenado de la tabla */}
          <p>Factores utilizados</p>
          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.d1}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, d1: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>factores utilizados: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.d3}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, d3: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>factores utilizados: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.d5}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, d5: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>factores utilizados: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.d7}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, d7: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>factores utilizados: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.d9}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, d9: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>factores utilizados: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.d11}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, d11: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>factores utilizados: </label>
            </div>
          </div>

          <p>Descripción</p>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.d2}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, d2: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Descripción 1: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.d4}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, d4: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Descripción 2: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.d6}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, d6: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Descripción 3: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.d8}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, d8: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Descripción 4: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.d10}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, d10: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Descripción 5: </label>
            </div>
          </div>

          <div className="form-group col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.d12}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, d12: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Descripción 6: </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Similares;

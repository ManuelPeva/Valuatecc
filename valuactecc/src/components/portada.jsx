import { useContext } from "react";
import { AvaluoContext } from "../AvaluoContext";
import '../Portada.css';



function Portada() {
  const { avaluoData, setAvaluoData } = useContext(AvaluoContext);
  //navegacion anterior

  // Manejo de la subida de imagen
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvaluoData({ ...avaluoData, imagen: reader.result }); // Cambiado a "imagen"
      };
      reader.readAsDataURL(file);
    }
  };
  // Fin del manejo de imagen

  // Mostrar y actualizar el campo
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2 className="text-primary">Folio: {avaluoData.folio}</h2>
        </div>
        <div className="card-header">
          <h2 className="text-primary">Fecha: {avaluoData.fecha}</h2>
        </div>
      </div>
      <figure className="text-center">
          <blockquote className="blockquote">
            <p>{avaluoData.colonia}</p>
            <p>{avaluoData.calle}</p>
          </blockquote>
        </figure>
        <div className="alert alert-warning text" role="alert">
          {avaluoData.titulo}
        </div>

      <br></br>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {avaluoData.imagen && (
        <img
          src={avaluoData.imagen}
          alt="Imagen post"
          style={{ width: "100%", height: "auto", marginTop: "10px" }}
        />
      )}

        <br></br>
        <hr></hr>
      <table className="table table-borderless table-hover">
      <tr>
      <td className="portada-alineacion">Calle:  </td>
      <td>{avaluoData.calle} </td>
      </tr>
      <tr>
      <td className="portada-alineacion">Numero: </td>
      <td>{avaluoData.numero}</td>
      </tr>
      <tr>
        <td className="portada-alineacion">Colonia:</td>
        <td>{avaluoData.colonia}</td>
      </tr>
      <tr>
        <td className="portada-alineacion">Delegación: </td>
        <td>{avaluoData.delegacion}</td>
      </tr>
      <tr>
        <td className="portada-alineacion">Código Postal: </td>
        <td>{avaluoData.cp}</td>
      </tr>
      <tr>
        <td className="portada-alineacion">Estado y País: </td>
        <td>{avaluoData.estado}</td>
      </tr>
      <tr>
        <td className="portada-alineacion">Fecha del Evaluó: </td>
        <td>{avaluoData.dateEvaluo}</td>
      </tr>
      <tr>
        <td className="portada-alineacion">Valor concluido: </td>
        <td>{avaluoData.valor}</td>
      </tr>
        </table>

      <form>
        <br></br>
        <div className="row g-2">
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={avaluoData.folio}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, folio: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Ingresa el Folio:</label>
            </div>
          </div>

          {/*comienzo de fecha*/}
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="date"
                name="fecha"
                value={avaluoData.fecha}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, fecha: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Ingresa la Fecha:</label>
            </div>
          </div>
          {/*Terminacion de fecha*/}

          {/*comienzo de colonia*/}
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="colonia"
                value={avaluoData.colonia}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, colonia: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Ingresa la Colonia:</label>
            </div>
          </div>
          {/*Terminacion de colonia*/}

          {/*comienzo de calle*/}
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="calle"
                value={avaluoData.calle}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, calle: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Ingresa la Calle:</label>
            </div>
          </div>
          {/*Terminacion de calle*/}

          {/*comienzo de calle*/}
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="calle"
                value={avaluoData.calle}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, calle: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="Folio"
              />
              <label>Ingresa la Calle:</label>
            </div>
          </div>
          {/*Terminacion de Numero de calle*/}

          {/*comienzo de titulo de trabajo*/}
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="numero"
                value={avaluoData.numero}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, numero: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="titulo"
              />
              <label>Num de calle:</label>
            </div>
          </div>
          {/*Terminacion de numero de calle*/}

           {/*comienzo de titulo de trabajo*/}
           <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="delegacion"
                value={avaluoData.delegacion}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, delegacion: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="titulo"
              />
              <label>Ingresa la Delegación:</label>
            </div>
          </div>
          {/*Terminacion de numero de calle*/}

          {/*comienzo de cp*/}
            <div className="form-floating mb-3">
              <input
                type="text"
                name="cp"
                value={avaluoData.cp}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, cp: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="titulo"
              />
              <label>Código Postal:</label>
            </div>
          {/*Terminacion de cp*/}

          {/*comienzo de estado*/}
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="estado"
                value={avaluoData.estado}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, estado: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="titulo"
              />
              <label>Estado y País: </label>
            </div>
          </div>
          {/*Terminacion de estado*/}

          {/*comienzo fecha de evaluo*/}
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="date"
                name="dataEvaluo"
                value={avaluoData.dateEvaluo}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, dateEvaluo: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="titulo"
              />
              <label>Fecha del evaluó: </label>
            </div>
          </div>
          {/*Terminacion de fecha de evaluo*/}

          {/*comienzo de valor concluido*/}
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="number"
                step="0.01"
                min="0"
                name="valorConcluido"
                value={avaluoData.valor}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, valor: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="titulo"
              />
              <label>Valor Concluido: </label>
            </div>
          </div>
          {/*Terminacion de valor concluido*/}
          
          {/*comienzo de titulo*/}
          <div className="col-md">
            <div className="form-floating mb-3">
              <input
                type="text"
                step="0.01"
                min="0"
                name="titulo"
                value={avaluoData.titulo}
                onChange={(e) =>
                  setAvaluoData({ ...avaluoData, titulo: e.target.value })
                }
                className="form-control"
                id="floatingInputGrid"
                placeholder="titulo"
              />
              <label>Titulo de la Operación: </label>
            </div>
          </div>
          {/*Titulo*/}

        </div>
      </form>
      {/* Aquí va el contenido específico de Portada */}
    </div>
  );
}

export default Portada;

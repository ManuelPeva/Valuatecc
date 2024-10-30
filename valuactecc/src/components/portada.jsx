import { useContext } from "react";
import { AvaluoContext } from "../AvaluoContext";

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

      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {avaluoData.imagen && (
        <img
          src={avaluoData.imagen}
          alt="Imagen post"
          style={{ width: "100%", height: "auto", marginTop: "10px" }}
        />
      )}

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
            className="form-control" id="floatingInputGrid" placeholder="Folio"
          />
          <label>Ingresa el Folio:</label>
          </div>
        </div>
        {/*comienzo de fecha*/}
        <div className="col-md">
        <div className="form-floating mb-3">
          <input
            type="date" name="fecha"
            value={avaluoData.fecha}
            onChange={(e) =>
              setAvaluoData({ ...avaluoData, fecha: e.target.value })
            }
            className="form-control" id="floatingInputGrid" placeholder="Folio"
          />
          <label>Ingresa el Folio:</label>
          </div>
        </div>
        {/*Terminacion de fecha*/}
        </div>

      </form>
      {/* Aquí va el contenido específico de Portada */}
    </div>
  );
}

export default Portada;

/* eslint-disable no-unused-vars */
import Header from "../header/Header";
import {AvaluoContext} from "../AvaluoContext";
import {useContext} from "react"
import "../stilos/terreno.css"

const Acabados = () => {
    const {avaluoData, setAvaluoData} = useContext(AvaluoContext);
    return (
        <div className="container mt-4">
        <Header/>
        <br/>
        <p className="descrip">b) REVESTIMIENTOS Y ACABADOS INTERIORES:</p>
        <p className="descrip">APLANADOS INTERIORES:</p>
        <br/>
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
                    <td></td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    
                </tr>
                <tr className="bordes">
                    <td></td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    
                </tr>
                <tr className="bordes">
                    <td></td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    
                </tr>
                <tr className="bordes">
                    <td></td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    
                </tr>
                <tr className="bordes">
                    <td></td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    
                </tr>
                <tr className="bordes">
                    <td></td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    
                </tr>
                <tr className="bordes">
                    <td></td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    
                </tr>
                <tr className="bordes">
                    <td></td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    
                </tr>
                <tr className="bordes">
                    <td></td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    
                </tr>
                <tr className="bordes">
                    <td></td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    
                </tr>
            </tbody>
        </table>
        <p className="descrip">c) CARPINTERÍA<p className="descrip">{}</p></p>
        <p className="descrip">d) INSTALACIONES HIDRAULICAS Y SANITARIAS: </p>
        <br></br>
        <p className="descrip">MUEBLES DE BAÑO/COCINA <p className="descrip">{}</p></p>
        <p className="descrip">e) INSTALACIONES ELÉCTRICAS: <p className="descrip">{}</p></p>
        <p className="descrip">f) PUERTAS Y VENTANERÍA:<p className="descrip">{}</p></p>
        <p className="descrip">HERRERÍA:<p className="descrip">{}</p></p>
        <p className="descrip">g)VIDRIERÍA:<p className="descrip">{}</p></p>
        <p className="descrip">h) CERRAJERÍA:<p className="descrip">{}</p></p>
        <p className="descrip">i) FACHADA:<p className="descrip">{}</p></p>
        <p className="descrip">j) INSTALACIONES ESPECIALES, ELEMENTOS ACCESORIOS Y OBRAS COMPLEMENTARIAS:<p className="descrip">{}</p></p>
        <p className="descrip">OBRAS COMPLEMENTARIAS: <p className="descrip">{}</p></p>
        </div>
    );
};

export default Acabados;

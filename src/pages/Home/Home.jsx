import React from 'react'

//ReactIcons
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//Componentes
import Navbar from '../../components/Navbar';

//Estilos
import '../../styles/estilos.css'

export default function Home() {
    return (
        <div id='ContenedorPrincipal_PageHome'>
            <Navbar />
            {/* Vista 1 */}
            <div id='Vista-1_Home'>
                <div id='ContenedorTitulosPrincipales'>
                    <h2 id='TituloPazOnline'>Tu espacio de charla online</h2>
                </div>
                {/* Contenedor Imagen */}
                <div className='grid-container'>
                    <img src="./images/generales/fondo-2.png" alt="Descripción de la imagen 1" className="imagen"/>
                    <img src="./images/generales/fondo-3.png" alt="Descripción de la imagen 1" className="imagen"/>
                    <img src="./images/generales/terapia1.png" alt="Descripción de la imagen 1" className="imagen  imagen-completa"/>
                </div>
            </div>
            {/* Vista 2 */}
            <div id='Vista-2_Home'>
            </div>
        </div>
    )
}

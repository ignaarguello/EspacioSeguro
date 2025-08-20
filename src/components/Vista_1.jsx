import React from 'react'

export default function Vista_1() {
    return (
        <div id='Vista-1_Home'>
            <div id='ContenedorTitulosPrincipales'>
                <h2 id='TituloPazOnline'>Tu espacio de charla online</h2>
            </div>
            {/* Contenedor Imagen */}
            <div className='grid-container'>
                <img src="./images/generales/fondo-2.png" alt="Descripción de la imagen 1" className="imagen" />
                <img src="./images/generales/fondo-3.png" alt="Descripción de la imagen 1" className="imagen" />
                <img src="./images/generales/terapia1.png" alt="Descripción de la imagen 1" className="imagen  imagen-completa" />
            </div>
        </div>
    )
}

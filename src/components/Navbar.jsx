import React from 'react'

export default function Navbar() {
    return (
        <div id='ContenedorNavbar'>
            <img id='EspacioSeguroBrand' src="./images/logo/EspacioSeguroLogo.png" alt="" />
            <h2 id='TituloEspacioSeguro'>Espacio Seguro - Sitio Web</h2>
            <div id='ContenedorLinksNavegacion'>
                <a href='#' className='NavegacionLink'>Home</a>
                <a href='#TituloProposito' className='NavegacionLink'>Proposito</a>
                <a href='#TituloFAQ' className='NavegacionLink'>Preguntes Frequentes (FAQ)</a>
                <a href='#TituloProposito' className='NavegacionLink'>Conectá</a>
            </div>
        </div>
    )
}

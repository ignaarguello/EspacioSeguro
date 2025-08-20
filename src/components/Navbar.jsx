import React from 'react'

export default function Navbar() {
    return (
        <div id='ContenedorNavbar'>
            <img id='EspacioSeguroBrand' src="./images/logo/EspacioSeguroLogo.png" alt="" />
            <h2 id='TituloEspacioSeguro'>Espacio Seguro</h2>
            <div id='ContenedorLinksNavegacion'>
                <span className='NavegacionLink'>Home</span>
                <span className='NavegacionLink'>Proposito</span>
                <span className='NavegacionLink'>Conectá</span>
                <span className='NavegacionLink'>Preguntes Frequentes(FAQ)</span>
            </div>
        </div>
    )
}

export default function Vista_1() {

    const numeroWhatsApp = '5491136303672';
    const mensaje = 'Hola Veronica, estoy interesado en sus servicios.';

    // Codifica el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    return (
        <div id='Vista-1_Home'>
            <div id='ContenedorTitulosPrincipales'>
                <h2 id='TituloPazOnline'>Tu espacio de charla online</h2>
                <div id='ContenedorBotonesAccion'>
                    <a className="BotonesAccion_Vista1" href={urlWhatsApp} target="_blank" rel="noopener noreferrer">
                        <span>Quiero hablar</span>
                    </a>
                    <a href="#TituloFAQ" className="BotonesAccion_Vista1">Conocé más</a>
                </div>
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

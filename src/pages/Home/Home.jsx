import React from 'react'

//ReactIcons
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//Componentes
import BannerImages from '../../components/BannerImages/BannerImages';

//Estilos
import '../../styles/estilos.css'

export default function Home() {
    return (
        <div id='ContenedorPrincipal_PageHome'>
            {/* ? Vista 1 */}
            <div id='Contenedor-Vista1_PageHome'>

                {/* 1 */}
                <section className="SubContenendores">
                    <img id='LogoPrincipal_Home' src="./images/logo-circular.png" alt="" />
                    <h2 id='TituloEspacioDeAyuda'>Espacio de Ayuda</h2>
                </section>
                {/* 2 */}
                <section className="SubContenendores">
                    <div id='Con_ContenidoPrincipal_Home_S2'>
                        <h2 id='TituloQuienesSomos'>¿Quienes Somos?</h2>
                        <p id='ParrafoAcercaDeNosotros'>Este es un lugar donde podemos charlar sobre lo que estás viviendo, desde mi propia experiencia y con la intención de que te sientas escuchado/a y comprendido/a. No soy profesional de la salud mental, pero quiero ofrecerte un espacio de contención y apoyo, como si estuviéramos tomando un café y compartiendo un momento. Si estás buscando una oreja amiga, este es tu lugar.</p>
                        <div id='PieContenedor_Home_S2'>
                            <h3 id='Subtitulo_LaDepresion-Yo'>©La Depresión y Yo | Espacio de ayuda emocional</h3>
                        </div>
                    </div>
                    <div id='PieDePagina_Home_S2'>
                        <FaWhatsapp className='IconoRedSocial_Home' />
                        <FaInstagram className='IconoRedSocial_Home' />
                    </div>
                </section>

            </div>
            {/* Vista 2 */}
            <div id='Contenedor-Vista2_PageHome'>
                <h3 className='TituloIntroductorio'><span className='SpanTitulo_Home'>Tu Espacio: </span>Bienvenido/a a un rincón seguro y confidencial. Aquí podés sentirte libre de explorar tus emociones, compartir tus experiencias y encontrar recursos que te acompañen en tu camino. No estás solo/a.</h3>
                <BannerImages/>
                <h3 className='TituloIntroductorio'><span className='SpanTitulo_Home'>Con Vos: </span>No estás en esto solo/a. Este sitio es una compañía en tu día a día, un lugar para recordarte tu fortaleza y ofrecerte apoyo cuando más lo necesitás. Juntos podemos transitar este camino</h3>
            </div>
        </div>
    )
}

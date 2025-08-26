import React from 'react'

//React Icons
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const AnchorsFooter = ['Home', 'Proposito', 'Conectá', 'Preguntas Frecuentes(FAQ)'];
  return (
    <div id='Footer'>
      <h2 id='TituloPrincipalFooter'>Espacio Seguro App</h2>
      <div id='AnchorsFooter'>
        {AnchorsFooter.map((anchor, index) => (
          <a key={index} href={`#${anchor}`} className='AnchorIndividualFooter'>{`${index + 1}. `}{anchor}</a>
        ))}
      </div>
      <div id='ContenedorRedesSocialesFooter'>
        <FaInstagram className='IconRedesSocial'/>
        <FaWhatsapp className='IconRedesSocial'/>
      </div>
    </div>
  )
}

import React from "react";

//React Icons
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const AnchorsFooter = [
    {
      name: "Home",
      link: "ContenedorNavbar",
    },
    {
      name: "Proposito",
      link: "Vista-2_Home",
    },
    {
      name: "Conectá",
      link: "ContenedorBotonesAccion",
    },
    {
      name: "Preguntas Frecuentes (FAQ)",
      link: "Vista-3_Home",
    },
  ];

  return (
    <div id="Footer">
      <h2 id="TituloPrincipalFooter">Espacio Seguro App</h2>
      <div id="AnchorsFooter">
        {AnchorsFooter.map((anchor, index) => (
          <a key={index} href={`#${anchor.link}`} className="AnchorIndividualFooter">
            {`${index + 1}. `}
            {anchor.name}
          </a>
        ))}
      </div>
      <div id="ContenedorRedesSocialesFooter">
        <FaInstagram className="IconRedesSocial" />
        <FaWhatsapp className="IconRedesSocial" />
      </div>
      <div id="ContenedorDesarrolloFooter">
        <p id="TextoDesarrolloFooter">
          Desarrollador por IAS. © 2025 Espacio Seguro App.
        </p>
      </div>
    </div>
  );
}

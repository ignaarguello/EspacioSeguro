//Estilos
import '../../styles/estilos.css'

//React Icons
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//Componentes
import Navbar from '../../components/Navbar';
import Vista_1 from '../../components/Vista_1';
import Vista_2 from '../../components/Vista_2';
import Vista_3 from '../../components/Vista_3';


export default function Home() {
    return (
        <div id='ContenedorPrincipal_PageHome'>
            <Navbar />
            <Vista_1 />
            <Vista_2 />
            <Vista_3 />
        </div>
    )
}

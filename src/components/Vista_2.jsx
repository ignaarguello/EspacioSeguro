import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Vista_2() {
    // Initialize AOS (Animate On Scroll) for animations    
        useEffect(() => {
            AOS.init({
                // Optional settings object for customization
                duration: 1000, // animation duration
                once: true,    // whether animation should only happen once
            });
        }, []);
    // Render the component
        return (
            <div id='Vista-2_Home'>
                <h2 id='TituloProposito'>Nuestro Propósito</h2>
                <div id='SubContenedorPrincipal'>
                    <div id='ContenedorTitulosPrincipal_V2'>
                        {/* Titulo - 1 */}
                        <div className='ContenedorTituloIndividiaul_V2'>
                            <h3 data-aos="fade-right" className='TituloUnLugarSeguro-1' id='TituloUnLugarSeguro'>Un lugar seguro para hablar sobre la depresión. Conectá con otros y encontrá el apoyo que necesitas.</h3>
                        </div>
                        {/* Titulo - 2 */}
                        <div className='ContenedorTituloIndividiaul_V2'>
                            <h3 data-aos="fade-left" className='TituloUnLugarSeguro-2' id='TituloUnLugarSeguro'>Un lugar seguro para hablar sobre la depresión. Conectá con otros y encontrá el apoyo que necesitas.</h3>
                        </div>
                        {/* Titulo - 3 */}
                        <div className='ContenedorTituloIndividiaul_V2'>
                            <h3 data-aos="fade-right" className='TituloUnLugarSeguro-3' id='TituloUnLugarSeguro'>Un lugar seguro para hablar sobre la depresión. Conectá con otros y encontrá el apoyo que necesitas.</h3>
                        </div>
                    </div>
                    <div id='ContenedorIconos_V2'>
                    </div>
                </div>
            </div>
        )
    }

import React from 'react'

import { Accordion, Span } from "@chakra-ui/react"


export default function AccordionFAQ() {
    const items = [
        { value: "a", title: "¿Qué es Espacio Seguro?", text: "Espacio Seguro es una comunidad online y gratuita creada para ofrecer un lugar de apoyo, comprensión y empatía a personas que están lidiando con la depresión. Nuestro objetivo es que encuentres un refugio para hablar, conectar con otros y sentirte menos solo en tu camino." },
        { value: "b", title: "¿Cual es nuestro proposito?", text: "Nuestro propósito es crear un ambiente donde puedas expresarte abiertamente y sin juicios. Creemos en el poder de la conexión humana para el bienestar. Aquí, el objetivo es compartir experiencias y brindar apoyo mutuo, creando una red de solidaridad y comprensión." },
        { value: "c", title: "¿Puedo hablar de forma anónima?", text: "Sí, la anonimidad es una de las bases de nuestro espacio. No es necesario usar tu nombre real ni brindar ningún dato personal para unirte. La privacidad es nuestra prioridad, y queremos que te sientas completamente seguro al compartir tus pensamientos." },
        { value: "d", title: "¿Debo Pagar?", text: "No. Espacio Seguro es un proyecto sin fines de lucro, hecho con amor. Nuestro objetivo es que el apoyo sea accesible para todos, sin costo alguno." },
        { value: "e", title: "¿Se guardan mis conversaciones?", text: "No, no guardamos ninguna de tus conversaciones. Una vez que la charla finaliza, tu historial de chat se elimina por completo. De esta manera, garantizamos la total privacidad y seguridad de todo lo que compartes." },
        { value: "f", title: "¿Es Espacio Seguro una terapia online?", text: "No, Espacio Seguro no es un sustituto de la terapia profesional ni un servicio de salud mental. Somos un espacio de apoyo entre pares. Si estás pasando por un momento de crisis o necesitas ayuda profesional, te animamos a contactar a un especialista o a una línea de ayuda." },
    ]
    
    return (
        <div>
            <Accordion.Root
                id="AccordionRoot"
                size='lg'
                variant={"enclosed"}
                collapsible
                defaultValue={["b"]
                }>
                {items.map((item, index) => (
                    <Accordion.Item id="AccordionItem" key={index} value={item.value}>
                        <Accordion.ItemTrigger>
                            <Span flex="1" id='AccordionItem'>{item.title}</Span>
                            <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            <Accordion.ItemBody id="AccordionText">{item.text}</Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </div>
    )
}

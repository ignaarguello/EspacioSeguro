import { Accordion, Span } from "@chakra-ui/react"

export default function Vista_3() {

    const items = [
        { value: "a", title: "¿Cual es nuestro proposito?", text: "Some value 1..." },
        { value: "b", title: "¿Debo Pagar?", text: "Some value 2..." },
        { value: "c", title: "¿Como me ayudaria este espacio?", text: "Some value 3..." },
    ]


    return (
        <div id="Vista-3">
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
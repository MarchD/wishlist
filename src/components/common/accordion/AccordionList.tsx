import React, { FC } from 'react'
import Accordion from './Accordion'
import { AccordionListSlyled } from './AccordionStyled'
import { AccordionListProps } from 'src/models/accordion'

const AccordionList: FC<AccordionListProps> = ({accordions}) => {
    return (
        <AccordionListSlyled>
            {accordions.map((wish: any) => <Accordion {...wish} key={wish.id} withButton>
                {wish.component}
            </Accordion>)}
        </AccordionListSlyled>
    )
}

export default AccordionList

import React, { FC } from 'react'
import Accordion from '../Accordion'
import styles from './AccordionList.module.scss'
import { AccordionListProps } from 'src/models/accordion'

const AccordionList: FC<AccordionListProps> = ({accordions}) => {
    return (
        <div className={styles.list}>
            {accordions.map((wish: any) => <Accordion {...wish} key={wish.id} withButton>
                {wish.component}
            </Accordion>)}
        </div>
    )
}

export default AccordionList

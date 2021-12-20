import React, { FC, MouseEvent } from 'react'
import { Accordion as AccordionMaterial } from '@mui/material'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ExpandMore } from '@mui/icons-material'
import Title from '../title/Title'
import Button from '../button/Button'
import { AccordionProps } from 'src/models/accordion'
import styles from './Accordion.module.scss'
import AccordionSummary from '@mui/material/AccordionSummary'

const Accordion: FC<AccordionProps> = ({title, withButton, children}) => {
    const [ expanded, setExpanded ] = React.useState<boolean>(false)

    const toggleAccordion = () => {
        setExpanded(current => !current)
    }

    const handleClickBtn = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
    }

    return (
        <AccordionMaterial expanded={expanded} onChange={toggleAccordion}>
            <AccordionSummary expandIcon={<ExpandMore/>} className={styles.summary}>
                <Title>{title}</Title>
                {expanded && withButton &&
                <Button variant={'contained'} sx={{mr: 1}} onClick={handleClickBtn}>Добавить подарок</Button>}
            </AccordionSummary>

            <AccordionDetails sx={{boxShadow: 'none'}}>
                {children}
            </AccordionDetails>
        </AccordionMaterial>
    )
}

export default Accordion

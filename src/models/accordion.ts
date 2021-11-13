import { ReactNode } from 'react'

export interface AccordionProps {
    title: string
    withButton?: boolean
}

export interface AccordionList {
    id: number
    title: string
    component: ReactNode
}

export interface AccordionListProps {
    accordions: AccordionList[]
}

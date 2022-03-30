import React, { FC } from 'react';
import { AccordionListProps, AccordionList as Wish } from 'src/models/accordion';
import Accordion from '../Accordion';
import { ListStyled } from './AccordionListStyled';

const AccordionList: FC<AccordionListProps> = (props) => {
  const { accordions } = props;

  return (
    <ListStyled>
      {accordions.map((wish: Wish) => (
        <Accordion {...wish} key={wish.id} withButton>
          {wish.component}
        </Accordion>
      ))}
    </ListStyled>
  );
};

export default AccordionList;

import React, { FC } from 'react';
import { AccordionListProps, AccordionList as Wish } from 'src/models/accordion';
import Accordion from '../Accordion';
import styles from './AccordionList.module.scss';

const AccordionList: FC<AccordionListProps> = ({ accordions }) => {
  return (
    <div className={styles.list}>
      {accordions.map((wish: Wish) => (
        <Accordion {...wish} key={wish.id} withButton>
          {wish.component}
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionList;

import React, { FC, MouseEvent, useState } from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ExpandMore } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { AccordionProps } from '@Models/accordion';
import { openModal } from '@Rtk/features/modal';
import { ModalTypes } from '@Models/modal';
import { useAppDispatch } from '@Hooks/redux';
import Title from '../title/Title';
import Button from '../button/Button';
import { AccordionStyled, AccordionSummaryStyled } from './AccordionStyled';

const Accordion: FC<AccordionProps> = (props) => {
  const { title, withButton, children } = props;
  const [expanded, setExpanded] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation('common');

  const toggleAccordion = () => {
    setExpanded((current) => !current);
  };

  const handleClickBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(openModal(ModalTypes.NEW_GIFT));
  };

  return (
    <AccordionStyled expanded={expanded} onChange={toggleAccordion}>
      <AccordionSummaryStyled expandIcon={<ExpandMore />}>
        <Title>{title}</Title>
        {expanded && withButton && (
          <Button variant="contained" sx={{ mr: 1 }} onClick={handleClickBtn}>
            {t('addGift')}
          </Button>
        )}
      </AccordionSummaryStyled>

      <AccordionDetails sx={{ boxShadow: 'none' }}>{children}</AccordionDetails>
    </AccordionStyled>
  );
};

export default Accordion;

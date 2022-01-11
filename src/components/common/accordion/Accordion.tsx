import React, { FC, MouseEvent, useState } from 'react';
import { Accordion as AccordionMaterial } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ExpandMore } from '@mui/icons-material';
import { AccordionProps } from 'src/models/accordion';
import { useTranslation } from 'react-i18next';
import Title from '../title/Title';
import Button from '../button/Button';
import { AccordionSummaryStyled } from './AccordionStyled';

const Accordion: FC<AccordionProps> = (props) => {
  const { title, withButton, children } = props;
  const [expanded, setExpanded] = useState<boolean>(false);
  const { t } = useTranslation('common');

  const toggleAccordion = () => {
    setExpanded((current) => !current);
  };

  const handleClickBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <AccordionMaterial expanded={expanded} onChange={toggleAccordion}>
      <AccordionSummaryStyled expandIcon={<ExpandMore />}>
        <Title>{title}</Title>
        {expanded && withButton && (
          <Button variant="contained" sx={{ mr: 1 }} onClick={handleClickBtn}>
            {t('addGift')}
          </Button>
        )}
      </AccordionSummaryStyled>

      <AccordionDetails sx={{ boxShadow: 'none' }}>{children}</AccordionDetails>
    </AccordionMaterial>
  );
};

export default Accordion;

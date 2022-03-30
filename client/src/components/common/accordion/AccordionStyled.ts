import styled from 'styled-components';
import { AccordionSummary, Accordion } from '@mui/material';

export const AccordionStyled = styled(Accordion)`
  border: 1px solid ${({ theme }) => theme.color.black};
`;

export const AccordionSummaryStyled = styled(AccordionSummary)`
  .MuiAccordionSummary-content {
    justify-content: space-between;
  }
`;

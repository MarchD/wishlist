import styled from 'styled-components';
import { Button } from '@mui/material';

export const ButtonStyled = styled(Button)`
  max-width: 250px;
  width: 100%;
  padding: 0.5rem 1rem;

  ${({ variant, theme }) => {
    if (variant === 'text') {
      return `
      margin: 0 !important;
      color:  ${theme.color.green};
      
      &:hover {
        background: none;
      }`;
    }

    if (variant === 'contained') {
      return `
        background-color: ${theme.color.green};
        border: 1px solid ${theme.color.black} !important;
        
        &:hover {
          background-color: ${theme.color.orange}
        }
    `;
    }

    return '';
  }}
`;

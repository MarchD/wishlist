import { Box } from '@mui/material';
import styled from 'styled-components';
import Button from '../common/button/Button';

export const FormStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const ButtonStyled = styled(Button)`
  margin-left: auto;
`;

export const InputsStyled = styled('div')`
  display: flex;
  column-gap: 1rem;
`;

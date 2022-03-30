import styled from 'styled-components';
import { IconButton } from '@mui/material';

export const IconStyled = styled(IconButton)`
  .MuiSvgIcon-root {
    font-size: 2rem !important;
    color: ${({ theme }) => theme.color.orange};
    transition: color 200ms ease-in;
  }

  &:hover {
    background-color: transparent;

    .MuiSvgIcon-root {
      color: ${({ theme }) => theme.color.green};
    }
  }
`;

// export const IconStyled = styled((props) => <Cancel {...props} />)`
//   font-size: 2rem !important;
//   color: ${({ theme }) => theme.color.orange};
//   stroke: ${({ theme }) => theme.color.black};
//   transition: color 200ms ease-in;
// `;

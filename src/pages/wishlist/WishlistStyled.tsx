import styled from 'styled-components';
import Container from '../../components/layout/container/Container';
import CardWrapper from '../../components/layout/card-wrapper/CardWrapper';

export const WishlistStyled = styled(Container)`
  display: flex;
  column-gap: 1rem;

  .MuiGrid-root {
    height: min-content;
    max-width: 100%;
  }

  .MuiPaper-root {
    max-width: 280px;
  }
`;

export const UserBlockStyled = styled(CardWrapper)`
  max-width: 290px;
`;

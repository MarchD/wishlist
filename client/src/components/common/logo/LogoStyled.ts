import styled from 'styled-components';

export const LogoStyled = styled('div')`
  display: inline;

  & a {
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
  }
`;

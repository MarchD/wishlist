import styled from 'styled-components';
import CardWrapper from '../../components/layout/card-wrapper/CardWrapper';
import Slider from '../../components/slider/Slider';

export const CardStyled = styled(CardWrapper)`
  display: flex;
  justify-content: space-between;
  height: max-content;
`;

export const SliderStyled = styled(Slider)`
  width: min-content;
  flex-grow: 1;
`;

export const ContentStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 50%;
  width: 100%;
`;

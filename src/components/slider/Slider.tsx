import React, { FC } from 'react';
import Carousel from 'react-material-ui-carousel';
import { CarouselProps } from 'react-material-ui-carousel/dist/components/types';

const Slider: FC<CarouselProps> = (props) => {
  const { children, ...otherProps } = props;

  return <Carousel {...otherProps}>{children}</Carousel>;
};

export default Slider;

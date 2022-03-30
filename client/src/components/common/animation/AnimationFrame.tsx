import React, { FC, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { AnimationProps } from '@Models/animation';

const AnimationFrame: FC<AnimationProps> = (props) => {
  const { data, height, width } = props;
  const anime = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (anime.current) {
      lottie.loadAnimation({
        container: anime.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: data,
      });
    }

    return () => lottie.stop();
  }, [data]);

  return (
    <div>
      <div style={{ height, width }} ref={anime} />
    </div>
  );
};

export default AnimationFrame;

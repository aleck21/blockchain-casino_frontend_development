import React, { memo } from 'react';
import { Slider } from 'antd';
import './styles.scss';

type WrapSliderProps = {
  position: number;
};

const WrapSlider = memo(({
  position,
}: WrapSliderProps) => {
  const onChangeSlider = () => {

  };

  return (
    <Slider
      onChange={onChangeSlider}
      value={position}
    />
  );
});

export { WrapSlider };

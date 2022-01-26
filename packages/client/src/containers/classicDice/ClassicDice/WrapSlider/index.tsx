import React, { memo } from 'react';
import { Slider } from 'antd';
import './styles.scss';

type WrapSliderProps = {
  position: number;
  onChange: (value: number) => void;
};

const WrapSlider = memo(({
  position,
  onChange,
}: WrapSliderProps) => (
  <Slider
    onChange={onChange}
    value={position}
  />
));

export { WrapSlider };

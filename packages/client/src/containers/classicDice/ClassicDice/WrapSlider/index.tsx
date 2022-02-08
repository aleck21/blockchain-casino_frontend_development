import React, { memo, useCallback, useState } from 'react';
import { Slider } from 'antd';
import './styles.scss';

type WrapSliderProps = {
  position: number;
  onChange: (value: number) => void;
};

const WrapSlider = memo(({
  position,
  onChange,
}: WrapSliderProps) => {
  const [valueSlider, setValueSlider] = useState(position);

  const onChangeValue = useCallback((value: number) => {
    setValueSlider(value);
    onChange(value);
  }, [onChange]);

  return (
    <div className="wrap_slider__container">
      <div
        className="wrap_slider__informer"
        style={{ left: `calc(100% * ${valueSlider} / 100 - 10px)` }}
      >
        {valueSlider}
      </div>
      <Slider
        onChange={onChangeValue}
        value={valueSlider}
      />
    </div>
  );
});

export { WrapSlider };

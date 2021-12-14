/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import classNames from 'classnames';
import { TextInputWrap } from '@project/libs/components/inputs/TextInputWrap';
import { useHoverEvent } from '@project/libs/hooks/useHoverEvent';
import { usePopperModifiers } from '@project/libs/hooks/ui/usePopperModifiers';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../FontIcon';

export interface Option<T extends string = string> {
  value: T;
  label: string;
}

interface Props {
  variants: Option[];
  value?: Option;
  optionRenderer?: (current: Option<any>) => JSX.Element;
  valueRenderer?: (current: Option<any>) => JSX.Element;
  placeholder?: string;
  disabled?: boolean;
  onChange: (val: Option<any>) => void;
  className?: string,
  classNamePlaceholder?: string,
  classNameFloater?: string,
  iconSize?: number,
  popperOffsetY?: number,
  popperOffsetX?: number,
  popperJustify?: boolean,
}

const defaultValueRenderer = (current: Option) => (
  <div className={styles.value}>{current.label}</div>
);

const defaultOptionRenderer = (current: Option) => (
  <div className={styles.option}>{current.label}</div>
);

const Select: FC<Props> = ({
  value,
  variants,
  disabled,
  optionRenderer = defaultOptionRenderer,
  placeholder,
  valueRenderer = defaultValueRenderer,
  onChange,
  className,
  classNameFloater,
  classNamePlaceholder,
  iconSize,
  popperOffsetY,
  popperOffsetX,
  popperJustify,
}) => {
  const { onMouseEnter, onMouseLeave, hover } = useHoverEvent();
  const modifiers = usePopperModifiers(popperOffsetY, popperOffsetX, popperJustify);

  return (
    <div
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Manager>
        <Reference>
          {({ ref }) => (
            <button
              className={styles.button}
              type="button"
              ref={ref}
              disabled={disabled}
            >
              <TextInputWrap className={styles.textInputWrap}>
                {value ? (
                  <div className={classNames(styles.value, classNamePlaceholder)}>
                    {valueRenderer(value)}
                  </div>
                ) : (
                  <div className={classNames(styles.empty, classNamePlaceholder)}>
                    {placeholder}
                  </div>
                )}
                <FontIcon
                  name={FontIconName.ChevronDown}
                  size={iconSize || 16}
                  className={styles.chevron}
                />
              </TextInputWrap>
            </button>
          )}
        </Reference>

        <Popper modifiers={modifiers}>
          {({ ref, style }) => (
            <div
              className={classNames(styles.floater, {
                [styles.hidden]: !hover,
              }, classNameFloater)}
              ref={ref}
              style={style}
            >
              <div className={styles.list}>
                {variants.map((variant) => (
                  <button
                    className={styles.variant}
                    onClick={() => onChange(variant)}
                    type="button"
                    key={variant.value}
                  >
                    {optionRenderer(variant)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </Popper>
      </Manager>
    </div>
  );
};

export { Select };

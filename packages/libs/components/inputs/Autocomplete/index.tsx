import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import classNames from 'classnames';
import { debounce } from 'throttle-debounce';
import { TextInputTemplate, TextInputTemplateProps } from '../TextInputTemplate';
import styles from './styles.module.scss';
import { useFocusEvent } from '../../../hooks/useFocusEvent';
import { usePopperModifiers } from '../../../hooks/ui/usePopperModifiers';

export interface Option<T extends string = string> { value: T, label: string }

export type AutocompleteProps = Omit<TextInputTemplateProps, 'value' | 'onChange'> & {
  variants: Option[];
  value?: Option;
  customRenderer?: (
    current: Option
  ) => JSX.Element;
  onSearch: (val: string) => void;
  onChange: (val: Option) => void;
  setVariants?: (val: Option[]) => void;
};

const Autocomplete: FC<AutocompleteProps> = ({
  onSearch,
  variants,
  onChange,
  customRenderer,
  value,
  setVariants,
  ...props
}) => {
  const [input, setInput] = useState<string>(value?.label || '');
  const { onFocus, onBlur, focused } = useFocusEvent();
  const modifiers = usePopperModifiers(0, 10, true);

  useEffect(() => {
    if (focused) {
      return;
    }

    setInput(value?.label || '');
  }, [value, focused]);

  useEffect(() => {
    if (!focused) {
      return;
    }

    debounce(300, false, () => onSearch(input));
  }, [input, focused, onSearch]);

  const onInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value || ''),
    [],
  );

  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <div
            ref={ref}
            className={styles.wrapper}
          >
            <TextInputTemplate
              {...props}
              onFocus={onFocus}
              onBlur={onBlur}
              value={input}
              onChange={onInput}
            />
          </div>
        )}
      </Reference>

      <Popper modifiers={modifiers}>
        {({ ref, style }) => (
          <div
            className={classNames(styles.float, { [styles.hidden]: !focused || !variants?.length })}
            ref={ref}
            style={style}
          >
            <div className={styles.list}>
              {!!variants &&
                variants.map((variant) => (
                  <button
                    key={variant.value}
                    className={styles.variant}
                    onMouseDown={() => onChange(variant)}
                  >
                    {customRenderer
                      ? customRenderer(variant)
                      : variant.label}
                  </button>
                ))}
            </div>
          </div>
        )}
      </Popper>
    </Manager>
  );
};

export { Autocomplete };

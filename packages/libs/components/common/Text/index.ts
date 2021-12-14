import {
  ReactNode,
  createElement,
  forwardRef,
  CSSProperties,
} from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

type TextProps = {
  className?: string;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
  children?: ReactNode;
  dangerouslySetInnerHTML?: { __html: string } | undefined;
  style?: CSSProperties;
};

const Text = forwardRef(({
  className = '',
  type = 'span',
  children,
  dangerouslySetInnerHTML,
  style,
}: TextProps,
ref) => {
  const additionalStyle = cx({ [type]: true }, className);
  return createElement(type, {
    className: additionalStyle,
    style,
    dangerouslySetInnerHTML,
    ref,
  }, children);
});

export { Text };

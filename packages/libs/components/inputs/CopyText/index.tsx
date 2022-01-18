import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FontIcon, FontIconName } from '../FontIcon';
import styles from './styles.module.scss';
import { TextInputTemplate, TextInputTemplateProps } from '../TextInputTemplate';

type Props = TextInputTemplateProps & {
  onCopy?: () => void;
};

export const CopyText: React.FC<Props> = ({ onCopy, ...props }) => (
  <TextInputTemplate
    {...props}
    right={(
      <CopyToClipboard
        text={props.value?.toString() || ''}
        onCopy={onCopy}
      >
        <button
          type="button"
          className={styles.button}
          disabled={props.disabled}
        >
          <FontIcon
            name={FontIconName.Copy}
            size={16}
          />
        </button>
      </CopyToClipboard>
  )}
  />
);

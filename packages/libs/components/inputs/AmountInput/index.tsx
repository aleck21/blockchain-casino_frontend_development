import React, { ChangeEventHandler, FC } from 'react';
import { isNil } from 'ramda';
import { TextInputTemplate, TextInputTemplateProps } from '../TextInputTemplate';

interface IProps extends TextInputTemplateProps {
  amount?: number;
  onChangeAmount: ChangeEventHandler<HTMLInputElement>;
}

const AmountInput: FC<IProps> = ({
  amount,
  onChangeAmount,
  ...props
}) => (
  <TextInputTemplate
    type="number"
    onChange={onChangeAmount}
    min={0}
    step="any"
    value={isNil(amount) ? '' : amount}
    {...props}
  />
);

export { AmountInput };

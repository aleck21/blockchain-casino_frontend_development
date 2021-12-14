import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  boolean,
  text,
} from '@storybook/addon-knobs';
import { Button } from './index';

storiesOf('Basic', module).add('Button', () => {
  const onClick = action('onClick');

  const children = text('Children', 'Button');
  const disabled = boolean('Disabled', false);
  const isFullWidth = boolean('Is full width', false);
  const isLoading = boolean('isLoading', false);

  return (
    <Button
      isFullWidth={isFullWidth}
      disabled={disabled}
      onClick={onClick}
      isLoading={isLoading}
    >
      {children}
    </Button>
  );
});

import React from 'react';
import { storiesOf } from '@storybook/react';

import { ButtonToTop } from '.';

const mainWrapper = { padding: '2rem' };

storiesOf('Basic', module).add('ButtonToTop', () => (
  <div style={mainWrapper}>
    <ButtonToTop />
  </div>
));

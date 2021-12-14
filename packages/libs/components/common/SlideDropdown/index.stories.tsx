import { storiesOf } from '@storybook/react';
import React from 'react';
import { SlideDropdown } from './index';

storiesOf('Basic', module).add('SlideDropdown', () => (
  <div style={{ width: 300 }}>
    <SlideDropdown title="Title">
      Content
    </SlideDropdown>
  </div>
));

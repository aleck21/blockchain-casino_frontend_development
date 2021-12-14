/* eslint-disable max-len */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from '.';

const mainWrapper = { padding: '2rem' };
const itemHeader = { marginBottom: '1rem', fontSize: '1.3em' };
const itemWrapper = { marginBottom: '2rem', fontSize: '1.2em' };

storiesOf('Basic', module).add('Text', () => (
  <div style={mainWrapper}>
    <h5 style={itemHeader}>Text component</h5>
    <div style={itemWrapper}>
      <Text type="h1">
        Text h1
      </Text>
    </div>
    <div style={itemWrapper}>
      <Text type="h2">
        Text h2 ONBOARD THE GREATEST SPACE MISSION OF ALL TIME!
      </Text>
    </div>
    <div style={itemWrapper}>
      <Text type="h3">
        Text h3
      </Text>
    </div>
    <div style={itemWrapper}>
      <Text type="h4">
        Text h4 COUNT YOUR COUNTS
      </Text>
    </div>
    <div style={itemWrapper}>
      <Text type="span">
        Text span
      </Text>
    </div>
    <div style={itemWrapper}>
      <Text type="p">
        Join
        <strong>The Mooning Monkeys</strong>
        on their epic space journey, an Exclusive NFT Project featuring art from another world, and Unrivalled-Utility from galaxies far beyond.
      </Text>
    </div>
  </div>
));

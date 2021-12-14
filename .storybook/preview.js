import React, { useEffect } from 'react';
import { addDecorator } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { MemoryRouter } from 'react-router';

import '../packages/libs/assets/index.scss';
import { ThemeProvider, useTheme } from '../packages/libs/hooks/ui/useTheme';

const ThemeWrapper = ({ children }) => {
  const { setTheme } = useTheme();
  const theme = select('Theme', {
    dark: 'dark',
    light: 'light',
  }, 'dark');

  useEffect(() => {
    setTheme(theme);
    console.log({ theme });
  }, [theme]);

  return children;

}

addDecorator((storyFn) => {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <div style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--color-background)',
        }}>
          {storyFn()}
        </div>
      </ThemeWrapper>
    </ThemeProvider>
  )
});

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

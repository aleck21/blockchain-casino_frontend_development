import { Theme } from '@project/libs/types/ui/theme';
import React, {
  createContext, FC, useCallback, useContext, useEffect, useState,
} from 'react';

const defaultTheme = Theme.dark;
interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: defaultTheme,
  setTheme: () => {},
});

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    setTheme(theme === Theme.light ? Theme.dark : Theme.light);
  }, [theme, setTheme]);

  useEffect(() => {
    switch (theme) {
      case Theme.light:
        document.documentElement.classList.add('theme_light');
        document.documentElement.classList.remove('theme_dark');
        break;
      case Theme.dark:
        document.documentElement.classList.add('theme_dark');
        document.documentElement.classList.remove('theme_light');
        break;
      default:
    }
  }, [theme]);

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === Theme.dark,
  };
};

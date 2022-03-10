import React, {createContext, useState} from 'react';

enum ThemeVariants {
  LIGHT="LIGHT",
  DARK="DARK"
}

type Theme = {
  variant: ThemeVariants
}

const DEFAULT_VALUE = {
  theme: {
    variant: ThemeVariants.LIGHT,
  },
  setTheme: () => {}
}

type PropsThemeContext = {
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<PropsThemeContext>(DEFAULT_VALUE);

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_VALUE.theme)
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export {ThemeContextProvider}
export default ThemeContext
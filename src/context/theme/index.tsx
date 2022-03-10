import React, {createContext, useState, useContext} from 'react';
import { ThemeVariants } from '../../enums';

const DEFAULT_VALUE = {
  theme: {
    variant: ThemeVariants.LIGHT,
  },
  setTheme: () => {}
}

type Theme = {
  variant: ThemeVariants
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

const useTheme = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  return {theme, setTheme};
}

export {ThemeContextProvider, useTheme}
export default ThemeContext
import React, {useContext} from 'react';
import ThemeContext from '../context/theme';
import { ThemeVariants } from '../enums';

const ComponentB = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <>
      <h1>Component B theme: {theme.variant}</h1>
      <button onClick={() => setTheme({variant: ThemeVariants.DARK})}>
        Change to DARK  
      </button>
    </>
  );
}

export default ComponentB;

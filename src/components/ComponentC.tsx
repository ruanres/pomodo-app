import React from 'react';
import { useTheme } from '../context/theme';
import { ThemeVariants } from '../enums';

const ComponentC = () => {
  const {theme, setTheme} = useTheme();

  return (
    <>
      <h1>Component C theme: {theme.variant}</h1>
      <button onClick={() => setTheme({variant: ThemeVariants.BLUE})}>
        Change to BLUE  
      </button>
    </>
  );
}

export default ComponentC;

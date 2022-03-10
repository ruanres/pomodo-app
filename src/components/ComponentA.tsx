import React from 'react';
import ThemeContext from '../context/theme';
import { ThemeVariants } from '../enums';

const ComponentA = () => {
  return (
    <ThemeContext.Consumer>
      {
        value => 
        (
          <>
            <h1>Component A theme: {value.theme.variant}</h1>
            <button onClick={() => value.setTheme({variant: ThemeVariants.LIGHT})}>
              Change to LIGHT  
            </button>
          </>
        )
      }
    </ThemeContext.Consumer>
  );
}

export default ComponentA;

import React from 'react';
import ThemeContext from '../context/theme';

const ComponentA = () => {
  return (
    <ThemeContext.Consumer>
      {
        value => <h1>Theme from consumer: {value.theme.variant}</h1>
      }
    </ThemeContext.Consumer>
  );
}

export default ComponentA;

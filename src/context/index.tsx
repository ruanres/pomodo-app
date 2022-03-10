import React from 'react'
import { ThemeContextProvider } from './theme'

const GlobalContext: React.FC = ({children}) => (
  <ThemeContextProvider>
    {children}
  </ThemeContextProvider>
)

export default GlobalContext;
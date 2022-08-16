import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  spacing: '50px',
  date: '120px',
  dot: '11px',
  codeFont: 'Courier Prime',
  palette: {
    common: {
      bg: '#252827',
      hover: '#f6c82d',
      shadow: '#5d9cec2b',
      code: '#2ad400',
    },
    primary: {
      main: '#3b6ad1',
      contrastText: 'rgb(210, 202, 202)',
    },
    secondary: {
      main: '#6c6d6d',
      contrastText: 'rgb(210, 202, 202)',
    },
    bright: {
      main: '#852069',
      contrastText: '#cea51c',
    },
    standard: {
      main: '#000000',
      contrastText: '#ffffff',
    },
    breakpoints: {
      xs: '500px',
      sm: '600px',
      md: '960px',
    },
  },
}

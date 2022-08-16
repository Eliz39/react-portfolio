import 'styled-components'
type Palette = {
  main: string
  contrastText: string
}

type IBreakpoints = {
  xs: string
  sm: string
  md: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    spacing: string
    date: string
    dot: string
    codeFont: string
    palette: {
      common: {
        bg: string
        hover: string
        shadow: string
        code: string
      }
      primary: Palette
      secondary: Palette
      bright: Palette
      breakpoints: Breakpoints
      standard: Palette
    }
  }
}

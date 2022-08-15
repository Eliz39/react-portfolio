import 'styled-components'
interface IPalette {
  main: string
  contrastText: string
}

interface IBreakpoints {
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
    palette: {
      common: {
        bg: string
        hover: string
        shadow: string
      }
      primary: IPalette
      secondary: IPalette
      bright: IPalette
      breakpoints: IBreakpoints
    }
  }
}

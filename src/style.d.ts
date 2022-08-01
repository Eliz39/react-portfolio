import 'styled-components'
interface IPalette {
  main: string
  contrastText: string
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
      }
      primary: IPalette
      secondary: IPalette
    }
  }
}

import 'typeface-oswald'
import 'typeface-clear-sans'

export interface ITheme {
  headerFamily: string
  bodyFamily: string
  gray: {
    light: string
    mid: string
    dark: string
  }
}

export default {
  headerFamily: 'Oswald, sans-serif',
  bodyFamily: 'Clear Sans, Georgia, serif',
  gray: {
    light: '#969696',
    mid: '#686868',
    dark: '#484848'
  }
}

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
    light: '#6E6E6E',
    mid: '#555555',
    dark: '#212121'
  }
}

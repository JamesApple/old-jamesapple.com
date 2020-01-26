import 'typeface-oswald'
import 'typeface-clear-sans'

export interface ITheme {
  headerFamily: string
  bodyFamily: string
  interaction: {
    hoverText: string
  }
  gray: {
    light: string
    mid: string
    dark: string
  }
}

export default {
  headerFamily: 'Oswald, sans-serif',
  bodyFamily: 'Clear Sans, Georgia, serif',
  interaction: {
    hoverText: "rgb(193, 101, 161)"
  },
  gray: {
    light: '#969696',
    mid: '#686868',
    dark: '#484848'
  }
}

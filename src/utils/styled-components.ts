import { ComponentType } from 'react'
import * as styledComponents from 'styled-components'

import { ITheme } from 'theme'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>


const withStyles = (first: TemplateStringsArray, ...styles: any) => (Component: ComponentType<any>) => styled(Component)(first, ...styles)

export { css, createGlobalStyle, keyframes, ThemeProvider, withStyles }
export default styled

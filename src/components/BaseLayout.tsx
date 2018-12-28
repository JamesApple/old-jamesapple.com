import * as React from 'react'
import { ThemeProvider } from '../styled-components'
import theme from '../theme'

export default class BaseLayout extends React.PureComponent<{}, {}> {
  public render() {
    const { children } = this.props
    return (
        <ThemeProvider theme={theme}>
          <>{children}</>
        </ThemeProvider>
    )
  }
}

import * as React from 'react'
import theme from 'theme'
import { ThemeProvider } from 'utils/styled-components'

const withThemeProvider = <P extends object>(
  Component: React.ComponentType<P>
) =>
  class WithThemeProvider extends React.Component<P> {
    public render() {
      return (
        <ThemeProvider theme={theme}>
          <Component {...this.props} />
        </ThemeProvider>
      )
    }
  }

export default withThemeProvider

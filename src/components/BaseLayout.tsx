import * as React from 'react'
import theme from 'theme'

import { ThemeProvider } from 'utils/styled-components'
import BaseStyles from 'BaseStyles'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default class BaseLayout extends React.PureComponent {
  public render() {
    const { children } = this.props
    return (
      <>
        <ThemeProvider theme={theme}>
          <>
            <BaseStyles />
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        </ThemeProvider>
      </>
    )
  }
}

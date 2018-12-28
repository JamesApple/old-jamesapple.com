import * as React from 'react'
import theme from '../theme'

import { ThemeProvider } from '../styled-components'
import { Helmet } from 'react-helmet'
import BaseStyles from '../BaseStyles'
import Header from './Header'
import styled from 'styled-components'

const PageContainer = styled.div`
  max-width: 850px;
  margin: auto;
`

const ContentWell = styled.div`
  padding: 32px;
  margin: auto;
`

export default class BaseLayout extends React.PureComponent<{}, {}> {
  public render() {
    const { children } = this.props
    return (
      <>
        <Helmet
          titleTemplate={`%s - James Apple`}
          defaultTitle={'James Apple'}
          meta={[
            {
              name: 'description',
              content: 'The site of awesomeness'
            }
          ]}
        />

        <ThemeProvider theme={theme}>
          <PageContainer>
            <BaseStyles />
            <Header
              navItems={[
                { title: 'Home', path: '/' },
                { title: 'Contact', path: '/' },
                { title: 'Posts', path: '/' }
              ]}
            />
            <ContentWell>{children}</ContentWell>
          </PageContainer>
        </ThemeProvider>
      </>
    )
  }
}

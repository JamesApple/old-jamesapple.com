import * as React from 'react'

import BaseLayout from 'components/BaseLayout'
import ContentWell from './ContentWell'
import styled from 'utils/styled-components'
import { systemTextStyle, mainHeaderTextStyle } from 'fontStyles'
import PostList from './PostList'
import PreviewMarkdown from 'models/PreviewMarkdown';

interface IndexPageProps {
  previewMarkdowns: PreviewMarkdown[]
}

const Title = styled.h1`
  ${mainHeaderTextStyle}
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
`

const Subtitle = styled.h2`
  ${systemTextStyle}
  text-align: center;
  font-size: 1rem;
`

const Link = styled.a`
text-decoration: none;
`

export default class IndexPage extends React.PureComponent<IndexPageProps, {}> {
  public render() {
    const { previewMarkdowns } = this.props
    return (
      <BaseLayout>
        <ContentWell>
          <Title>Golang, DevOps, Automation, and Technology</Title>
          <Link href='/posts'>
            <Subtitle>
              Latest Posts
            </Subtitle>
          </Link>
          <PostList previewMarkdowns={previewMarkdowns} />
        </ContentWell>
      </BaseLayout>
    )
  }
}

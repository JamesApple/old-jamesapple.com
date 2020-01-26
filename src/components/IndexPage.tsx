import * as React from 'react'

import BaseLayout from 'components/BaseLayout'
import ContentWell from './ContentWell'
import styled from 'utils/styled-components'
import { systemTextStyle, mainHeaderTextStyle, hoverTextStyle } from 'fontStyles'
import PostList from './PostList'
import PreviewMarkdown from 'models/PreviewMarkdown';

interface IndexPageProps {
  previewMarkdowns: PreviewMarkdown[]
}

const Subtitle = styled.h2`
  ${systemTextStyle}
  font-size: 1.5rem;
  padding: 0 1rem;
  margin-top: 3rem;
  margin-bottom: 2.5rem;
  letter-spacing: 0.25rem;
  color: #484848;
  ${hoverTextStyle}
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
          {/*
            <Title>Golang, DevOps, Automation, and Technology</Title>
          */}
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

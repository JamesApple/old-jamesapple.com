import * as React from 'react'
import Image from 'gatsby-image'

import BaseLayout from 'components/BaseLayout'
import styled from 'utils/styled-components'
import DisplayMarkdown from 'models/DisplayMarkdown'
import ContentWidth from './ContentWidth'
import { postTitleTextStyle, systemTextStyle, contentTextStyle } from 'fontStyles'
import TableOfContents from './TableOfContents';

interface IPostPageProps {
  displayMarkdown: DisplayMarkdown
}

const HeaderImage = styled(Image)``

const Title = styled.h1`
  ${postTitleTextStyle}
  margin-bottom: 0;
`

const Date = styled.time`
  ${systemTextStyle}
  display: block;
  margin-bottom: 2rem;
`

const Well = styled.article`
  max-width: 80ch;
  margin: auto;
`

const PostBody = styled.div`
  ${contentTextStyle}
  margin-bottom: 2rem;
`

export default class PostPage extends React.PureComponent<IPostPageProps, {}> {
  public render() {
    const { description, tableOfContents, headerImage, html, title, date } = this.props.displayMarkdown

    return (
      <BaseLayout>
        {!!headerImage && (
          <ContentWidth disablePadding={true}>
            <HeaderImage fluid={headerImage} />
          </ContentWidth>
        )}
        <Well>
          <Title>{title}</Title>
          <Date>{date}</Date>
          <PostBody>
            {description}
          </PostBody>
          <TableOfContents tableOfContents={tableOfContents} />

          <PostBody dangerouslySetInnerHTML={{ __html: html }} />
        </Well>
      </BaseLayout>
    )
  }
}

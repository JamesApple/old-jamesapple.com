import * as React from 'react'
import Image from 'gatsby-image'

import BaseLayout from 'components/BaseLayout'
import styled from 'utils/styled-components'
import DisplayMarkdown from 'models/DisplayMarkdown'
import ContentWidth from './ContentWidth'
import { postTitleTextStyle, systemTextStyle, contentTextStyle } from 'fontStyles'
import TableOfContents from './TableOfContents'
import { Link } from 'gatsby'
import ContentWell from './ContentWell';

interface IPostPageProps {
  displayMarkdown: DisplayMarkdown
}

const HeaderImage = styled(Image)`
  max-width: 100%;
  max-height: 30rem;
`

const Title = styled.h1`
  ${postTitleTextStyle}
  margin-bottom: 0;
`

const Date = styled.time`
  ${systemTextStyle}
  display: block;
  margin-bottom: 2rem;
`

const PostBody = styled.div`
  ${contentTextStyle}
  margin-bottom: 2rem;
`

const Description = styled.p`
  ${contentTextStyle}
  margin-bottom: 2rem;
`

const Tag = styled(Link)`
  ${systemTextStyle}
  padding: 0.5rem;
  padding-left: 0;
  &:hover {
    color: black;
  }
`

export default class PostPage extends React.PureComponent<IPostPageProps, {}> {
  public render() {
    const {
      description,
      tags,
      tableOfContents,
      headerImage,
      html,
      title,
      date
    } = this.props.displayMarkdown

    return (
      <BaseLayout>
        {!!headerImage && (
          <ContentWidth disablePadding={true}>
            <HeaderImage fluid={headerImage} />
          </ContentWidth>
        )}
        <ContentWidth>
          <ContentWell>
            {tags.map(tag => (
              <Tag key={tag} to={`/tags/${tag}`}>
                {tag}
              </Tag>
            ))}
            <Title>{title}</Title>
            <Date>{date}</Date>
            <TableOfContents tableOfContents={tableOfContents} />
            <Description>{description}</Description>
            <PostBody dangerouslySetInnerHTML={{ __html: html }} />
          </ContentWell>
        </ContentWidth>
      </BaseLayout>
    )
  }
}

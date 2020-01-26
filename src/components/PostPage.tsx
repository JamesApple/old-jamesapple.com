import * as React from 'react'
import Image from 'gatsby-image'

import BaseLayout from 'components/BaseLayout'
import styled from 'utils/styled-components'
import DisplayMarkdown from 'models/DisplayMarkdown'
import ContentWidth from './ContentWidth'
import { postTitleTextStyle, systemTextStyle, contentTextStyle, postDescriptionTextStyle, hoverTextStyle } from 'fontStyles'
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

  .gatsby-highlight-code-line {
    background-color: #494949;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #D16B6B;
  }

  .gatsby-highlight {
    font-size: 1rem;
    background-color: #272822;
    border-radius: 4px;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .language-go {
    -moz-tab-size: 1.5rem !important;
    tab-size: 1.5rem !important;
  }

  p>code {
    ${contentTextStyle}
    border-radius: 0;
    background-color: rgb(230, 230, 230);
    border-radius: 2px;
    padding: 0 0.4rem;
    margin: 0;
  }

  //   // font-size: inherit;
  //   // border-radius: 0 !important;
  //   // color: red;
  //   // font-si: 10px !important;

  /**
   * Remove the default PrismJS theme background-color, border-radius, margin,
   * padding and overflow.
   * 1. Make the element just wide enough to fit its content.
   * 2. Always fill the visible space in .gatsby-highlight.
   * 3. Adjust the position of the line numbers
   */
  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  img {
    max-width: 100%;
    height: auto;
    margin: auto;
  }
`

const Description = styled.p`
  ${postDescriptionTextStyle}
  margin-bottom: 2rem;
`

const Tag = styled(Link)`
  ${systemTextStyle}
  padding: 0.5rem;
  padding-left: 0;
  ${hoverTextStyle}
`

export default class PostPage extends React.PureComponent<IPostPageProps, {}> {
  public render() {
    const {
      description,
      tags,
      // tableOfContents,
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
              {/*
                <TableOfContents tableOfContents={tableOfContents} />
                */}
            <Description>{description}</Description>
            <PostBody dangerouslySetInnerHTML={{ __html: html }} />
          </ContentWell>
        </ContentWidth>
      </BaseLayout>
    )
  }
}

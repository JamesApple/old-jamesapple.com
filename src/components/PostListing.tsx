import * as React from 'react'
import PreviewMarkdown from 'models/PreviewMarkdown'
import styled from 'utils/styled-components'
import {
  systemTextStyle,
  postTitleTextStyle,
  postSummaryTextStyle,
  contentTextStyle
} from 'fontStyles'

import Image from 'gatsby-image'
import { Link } from 'gatsby'

interface IPostListingProps {
  previewMarkdown: PreviewMarkdown
}

const Date = styled.time`
  ${systemTextStyle}
`

const Title = styled(Link)`
  ${postTitleTextStyle}
  text-decoration: none;

  &:hover {
    color: black;
  }
`

const Summary = styled.p`
  ${postSummaryTextStyle}
`

const Excerpt = styled.p`
  ${contentTextStyle}
`

const HeaderImage = styled(Image)`
  height: auto;
  max-width: 100%;

`

const Container = styled.div`
  margin-bottom: 4rem;
  max-width: 80ch;
  margin: auto;
`

export default class PostListing extends React.PureComponent<IPostListingProps, {}> {
  public render() {
    const { headerImage, excerpt, title, date, path } = this.props.previewMarkdown

    const summary = 'A short gander through the woods allows a great many adventures'

    return (
      <Container>
        <Date>{date}</Date>
        <br />
        <Title to={path}>{title}</Title>
        {!!headerImage && <HeaderImage fluid={headerImage} />}
        <Summary>{summary}</Summary>
        <Excerpt>{excerpt}</Excerpt>
      </Container>
    )
  }
}

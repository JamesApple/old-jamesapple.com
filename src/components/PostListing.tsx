import * as React from 'react'


import Image from 'gatsby-image'
import { Link } from 'gatsby'
import styled from 'utils/styled-components'
import {
  systemTextStyle,
  postTitleTextStyle,
  postSummaryTextStyle,
  contentTextStyle
} from 'fontStyles'

interface IPostListingProps {
  title: string
  date: string
  path: string
  excerpt: string
  headerImage: FluidImage | null
}

const Date = styled.time`
  ${systemTextStyle}
`

const Title = styled(Link)`
  ${postTitleTextStyle}
  text-decoration: none;
`

const Summary = styled.p`
  ${postSummaryTextStyle}
`

const Excerpt = styled.p`
  ${contentTextStyle}
`

const HeaderImage = styled(Image)`
  max-width: 128px;
`

export default class PostListing extends React.PureComponent<IPostListingProps, {}> {
  public render() {
    const { headerImage, excerpt, title, date, path } = this.props
    const summary = 'A short gander through the woods allows a great many adventures'

    return (
      <>
        <Date>{date}</Date>
        <br />
        <Title to={path}>{title}</Title>
        {!!headerImage && <HeaderImage fluid={headerImage}/>}
        <Summary>{summary}</Summary>
        <Excerpt>{excerpt}</Excerpt>
      </>
    )
  }
}

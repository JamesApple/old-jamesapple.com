import * as React from 'react'
import PreviewMarkdown from 'models/PreviewMarkdown'
import styled from 'utils/styled-components'
import {
  systemTextStyle,
  postTitleTextStyle,
  postDescriptionTextStyle,
  contentTextStyle,
  hoverTextStyle
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

  ${hoverTextStyle}
`

const Description = styled.p`
  ${postDescriptionTextStyle}
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
    const { description, headerImage, excerpt, title, date, path } = this.props.previewMarkdown


    return (
      <Container>
        <Date>{date}</Date>
        <br />
        <Title to={path}>{title}</Title>
          {!!headerImage && <HeaderImage fluid={headerImage} />}
            {( description && <Description>{description}</Description> ) || <Excerpt>{excerpt}</Excerpt> }
      </Container>
    )
  }
}

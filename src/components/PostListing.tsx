import * as React from 'react'

import { Link } from 'gatsby'
import styled from '../styled-components'
import { postTitle, subtext, body } from '../fontStyles'

interface IPostListingProps {
  title: string
  date: string
  path: string
  excerpt: string
  as?: React.ComponentType<any>
}

const Title = styled(Link)`
  ${postTitle}
  text-decoration: none;
  display: block;
`

const Date = styled.span`
  ${subtext}
  text-transform: uppercase;
  display: block;
`

const Excerpt = styled.p`
  ${body}
`

const Listing = styled.article`
  max-width: 70ch;
`

export default class PostListing extends React.PureComponent<
  IPostListingProps,
  {}
> {
  public render() {
    const { excerpt, title, date, path } = this.props
    const Container = this.props.as || Listing

    return (
        <Container>
          <Title to={path}>{title}</Title>
          <Date>{date}</Date>
          <Excerpt>{excerpt}</Excerpt>
        </Container>
    )
  }
}

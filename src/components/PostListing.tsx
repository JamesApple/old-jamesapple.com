import * as React from 'react'

import { Link } from 'gatsby'

interface IPostListingProps {
  title: string
  date: string
  path: string
  excerpt: string
}

export default class PostListing extends React.PureComponent<
  IPostListingProps,
  {}
> {
  public render() {
    const { excerpt, title, date, path } = this.props

    return (
        <>
          <Link to={path}>{title}</Link>
          {date}
          {excerpt}
        </>
    )
  }
}

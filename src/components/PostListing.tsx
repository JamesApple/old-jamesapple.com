import * as React from 'react'

export interface PostListingProps {
  title: string
  date: string
  path: string
}

export default class PostListing extends React.PureComponent<
  PostListingProps,
  {}
> {
  public render() {
    const { title, date, path } = this.props

    return (
      <div>
        {title} {date} {path}
      </div>
    )
  }
}

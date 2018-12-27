import * as React from 'react'

import { Link } from 'gatsby'

import { IPostDetail } from '../utils/convertMarkdownRemarkToPostDetail';

export default class PostListing extends React.PureComponent<IPostDetail, {}> {
  public render() {
    const { title, date, path } = this.props

    return (
      <div>
        <Link to={path}>
          {title}--{date}
        </Link>
      </div>
    )
  }
}

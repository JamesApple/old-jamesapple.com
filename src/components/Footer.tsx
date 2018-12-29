import * as React from 'react'
import { Link } from 'gatsby'

export default class Footer extends React.PureComponent {
  public render() {
    return (
      <div>
        <Link to={'/rss.xml'}>RSS Feed</Link>
      </div>
    )
  }
}

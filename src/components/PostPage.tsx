import * as React from 'react'

import BaseLayout from '../components/BaseLayout'

interface IPostPageProps {
  html: string
  title: string
  date: string
}

export default class PostPage extends React.PureComponent<IPostPageProps, {}> {
  public render() {
    const { html, title, date } = this.props
    return (
      <BaseLayout>
        {title} { html } {date}
      </BaseLayout>
    )
  }
}

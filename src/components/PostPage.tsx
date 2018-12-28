import * as React from 'react'
import Image from 'gatsby-image'

import BaseLayout from 'components/BaseLayout'
import styled from 'utils/styled-components';

interface IPostPageProps {
  html: string
  title: string
  date: string
  headerImage: FluidImage | null
}

const HeaderImage = styled(Image)`
  max-width: 128px
`

export default class PostPage extends React.PureComponent<IPostPageProps, {}> {
  public render() {
    const { headerImage, html, title, date } = this.props

    return (
      <BaseLayout>
        {!!headerImage && <HeaderImage fluid={headerImage}/>}
        {title}  {date}
        <div dangerouslySetInnerHTML={{ __html: html }}/>
      </BaseLayout>
    )
  }
}

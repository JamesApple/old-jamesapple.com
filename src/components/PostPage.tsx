import * as React from 'react'
import Image from 'gatsby-image'

import BaseLayout from 'components/BaseLayout'
import styled from 'utils/styled-components';
import DisplayMarkdown from 'models/DisplayMarkdown';

interface IPostPageProps {
  displayMarkdown: DisplayMarkdown
}

const HeaderImage = styled(Image)`
  max-width: 128px
`

export default class PostPage extends React.PureComponent<IPostPageProps, {}> {
  public render() {
    const { headerImage, html, title, date } = this.props.displayMarkdown

    return (
      <BaseLayout>
        {!!headerImage && <HeaderImage fluid={headerImage}/>}
        {title}  {date}
        <div dangerouslySetInnerHTML={{ __html: html }}/>
      </BaseLayout>
    )
  }
}

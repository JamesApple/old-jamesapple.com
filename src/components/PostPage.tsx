import * as React from 'react'

import BaseLayout from '../components/BaseLayout'
import { postTitle, tagline, body } from '../fontStyles';
import styled from '../styled-components';

interface IPostPageProps {
  html: string
  title: string
  date: string
}

const Title = styled.h1`
  ${postTitle};
  font-size: 32px;
  margin-bottom: 6px;
`
const Subtext = styled.span`
  ${tagline};
  margin-bottom: 23px;
`

const Content = styled.div`
  ${body};
  margin-top: 32px;
  max-width: 70ch;
  font-size: 16px;
`

export default class PostPage extends React.PureComponent<IPostPageProps, {}> {
  public render() {
    const { html, title, date } = this.props
    return (
      <BaseLayout>
        <article>
          <Title>{title}</Title>
          <Subtext>{date}</Subtext>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </BaseLayout>
    )
  }
}

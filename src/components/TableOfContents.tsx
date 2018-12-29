import * as React from 'react'
import { contentTextStyle } from 'fontStyles'
import styled from 'utils/styled-components'

interface TableOfContentsProps {
  tableOfContents: string
}

const Container = styled.nav`
  border-radius: 4px;
  background-color: rgb(250, 250, 250);
  max-width: 50%;

  @media screen and (max-width: 50rem) {
    display: block;
    float: none;
    max-width: 100%;
  }

  float:right;
  display: inline-flex;
  padding: 1rem;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
    padding-inline-start: 1rem;
  }

  & > ul {
    padding-inline-start: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    p {
      display: inline;
      margin: 0;
    }
  }

  a {
    ${contentTextStyle}
    text-decoration: none;
    text-transform: none;
    font-size: 0.75rem;
    padding: 0.5rem;
    &:hover {
      color: black;
    }
  }
`

export default class TableOfContents extends React.PureComponent<TableOfContentsProps, {}> {
  public render() {
    const { tableOfContents } = this.props
    return <Container dangerouslySetInnerHTML={{ __html: tableOfContents }} />
  }
}

import * as React from 'react'
import { systemTextStyle } from 'fontStyles'
import styled from 'utils/styled-components'

interface TableOfContentsProps {
  tableOfContents: string
}

const Container = styled.nav`
  ul {
    padding-inline-start: 1rem;
  }

  li {
    list-style: none;
    p {
      margin: 0;
    }
  }

  a {
    ${systemTextStyle}
    text-transform: none;
    font-size: 0.5rem;
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

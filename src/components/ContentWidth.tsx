import * as React from 'react'
import styled from 'utils/styled-components';

const Container = styled.div`
  max-width: 75rem;
  padding: 0 1rem;
  margin: auto;
`

export default class ContentWidth extends React.PureComponent {
  public render() {
    const { children } = this.props
    return <Container>{children}</Container>
  }
}

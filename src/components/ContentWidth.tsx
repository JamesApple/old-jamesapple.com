import * as React from 'react'
import styled from 'utils/styled-components'

interface ContentWidthProps {
  disablePadding?: boolean
}

const Container = styled.div`
  max-width: 75rem;
  ${({ disablePadding }: ContentWidthProps) => (disablePadding ? 'padding: 0' : 'padding: 0 1rem')};
  margin: auto;
`

export default class ContentWidth extends React.PureComponent<ContentWidthProps> {
  public render() {
    const { disablePadding, children } = this.props

    return <Container disablePadding={disablePadding}>{children}</Container>
  }
}

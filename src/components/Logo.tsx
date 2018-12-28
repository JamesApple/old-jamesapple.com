import * as React from 'react'
import styled from '../styled-components'
import { Link } from 'gatsby'
import { logo, tagline } from '../fontStyles';

const Container = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  display: inline-block;
`

const Name = styled.span`
  ${logo};
`
const Tagline = styled.span`
  ${tagline};
`

export default class Logo extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Container to={'/'}>
        <Name>James Apple</Name>
        <br/>
        <Tagline>Software Engineer</Tagline>
      </Container>
    )
  }
}

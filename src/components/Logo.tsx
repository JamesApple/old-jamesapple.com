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
interface ILogoProps {
  className?: string
}

export default class Logo extends React.PureComponent<ILogoProps, {}> {
  public render() {
    return (
      <Container className={this.props.className} to={'/'}>
        <Name>James Apple</Name>
        <br/>
        <Tagline>Software Engineer</Tagline>
      </Container>
    )
  }
}

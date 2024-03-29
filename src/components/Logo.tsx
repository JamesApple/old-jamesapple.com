import * as React from 'react'
import styled from 'utils/styled-components'
import { Link } from 'gatsby'
import { logoTextStyle, taglineTextStyle, hoverTextStyle } from 'fontStyles';

const Container = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  display: inline-block;
`

const Name = styled.span`
  ${logoTextStyle};
  ${hoverTextStyle}
`
const Tagline = styled.span`
  ${taglineTextStyle};
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

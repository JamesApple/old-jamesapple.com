import * as React from 'react'
import { Link } from 'gatsby'
import BaseLogo from 'components/Logo'
import styled from 'utils/styled-components'
import { systemTextStyle } from 'fontStyles'
import ContentWidth from './ContentWidth'

const NavItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 700px) {
    align-self: center;
    margin-left: auto;
  }
`

const NavBarContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5rem 0;
`

const navItemStyles = (props: any) => `
  ${systemTextStyle(props)}
  padding: 1rem;
  margin: 0 1rem;
  &:hover {
    color: black;
  }
`

const InternalLink = styled(Link)`
  ${navItemStyles}
`

const ExternalLink = styled.a`
  ${navItemStyles}
`

const Logo = styled(BaseLogo)``

export default class Header extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ContentWidth>
        <NavBarContainer>
          <Logo />
          <NavItems>
            <InternalLink to={'/'}>Home</InternalLink>
            <InternalLink to={'/posts'}>Posts</InternalLink>
            <ExternalLink href="https://twitter.com/jamesappledev">Twitter</ExternalLink>
          </NavItems>
        </NavBarContainer>
      </ContentWidth>
    )
  }
}

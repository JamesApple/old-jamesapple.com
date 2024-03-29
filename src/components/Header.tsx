import * as React from 'react'
import { Link } from 'gatsby'
import BaseLogo from 'components/Logo'
import styled from 'utils/styled-components'
import { systemTextStyle, hoverTextStyle } from 'fontStyles'
import ContentWidth from './ContentWidth'

const NavItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;

  @media (min-width: 60rem) {
    margin-left: auto;
  }
`

const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 0;

  @media (min-width: 60rem)  {
    flex-direction: row;
  }
`

export const navItemStyles = (props: any) => `
  ${systemTextStyle(props)}
  padding: 1rem;
  margin: 0 1rem;
`

const InternalLink = styled(Link)`
  ${navItemStyles}
  ${hoverTextStyle}
`

const Logo = styled(BaseLogo)`
  margin: 1.5rem 0;
`

export default class Header extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ContentWidth>
        <NavBarContainer>
          <Logo />
          <NavItems>
            <InternalLink to={'/'}>Home</InternalLink>
            <InternalLink to={'/posts'}>Posts</InternalLink>
          </NavItems>
        </NavBarContainer>
      </ContentWidth>
    )
  }
}

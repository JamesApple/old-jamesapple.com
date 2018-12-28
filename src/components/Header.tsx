import * as React from 'react'
import { Link } from 'gatsby'
import BaseLogo from 'components/Logo'
import styled from 'utils/styled-components'
import { systemTextStyle } from 'fontStyles'

interface INavItem {
  title: string
  path: string
}

interface IHeaderProps {
  navItems: INavItem[]
}

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
  padding: 8px 0;
  box-shadow: inset 0 -2px 0 0 #eeeeee;
`

const NavItem = styled(Link)`
  ${systemTextStyle}
  padding: 16px;
  margin: 0 16px;
`

const Logo = styled(BaseLogo)``

export default class Header extends React.PureComponent<IHeaderProps, {}> {
  public render() {
    const { navItems } = this.props

    return (
      <NavBarContainer>
        <Logo />
        <NavItems>
          {navItems.map(({ path, title }, index) => (
            <NavItem key={index} to={path}>
              {title}
            </NavItem>
          ))}
        </NavItems>
      </NavBarContainer>
    )
  }
}

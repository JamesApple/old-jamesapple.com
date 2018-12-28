import * as React from 'react'
import { navItem } from '../fontStyles'
import styled from '../styled-components'
import { Link } from 'gatsby'
import { ITheme } from '../theme'
import BaseLogo from './Logo'

interface INavItem {
  title: string
  path: string
}

interface IHeaderProps {
  navItems: INavItem[]
}

const NavItem = styled(Link)`
  ${navItem}
  text-decoration: none;
  text-transform: uppercase;
  padding: 12px;
  &:hover {
    color: orange;
  }
`

const NavBar = styled.nav`
  background-color: ${({ theme }: { theme: ITheme }) => theme.gray.dark};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Logo = styled(BaseLogo)`
  margin: 32px;
  display: block;
`

export default class Header extends React.PureComponent<IHeaderProps, {}> {
  public render() {
    const { navItems } = this.props
    return (
      <>
        <NavBar>
          {navItems.map(({ path, title }, index) => (
            <NavItem key={index} to={path}>
              {title}
            </NavItem>
          ))}
        </NavBar>
        <Logo />
      </>
    )
  }
}

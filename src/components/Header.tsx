import * as React from 'react'
import { Link } from 'gatsby'
import Logo from 'components/Logo'

interface INavItem {
  title: string
  path: string
}

interface IHeaderProps {
  navItems: INavItem[]
}

export default class Header extends React.PureComponent<IHeaderProps, {}> {
  public render() {
    const { navItems } = this.props
    return (
      <>
        <Logo />
        {navItems.map(({ path, title }, index) => (
          <Link key={index} to={path}>
            {title}
          </Link>
        ))}
      </>
    )
  }
}

import * as React from 'react'
import { Link as UnstyledLink } from 'gatsby'
import styled from 'utils/styled-components'
import { navItemStyles } from './Header'

const Container = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 6rem 0;
`
const Link = styled(UnstyledLink)`
  ${navItemStyles}
`
const A = styled.a`
  ${navItemStyles}
`

export default class Footer extends React.PureComponent {
  public render() {
    return (
      <Container>
        <Link to={'/'}>Home</Link>
        <Link to={'/posts'}>All Posts</Link>
        <Link to={'/rss.xml'}>RSS</Link>
        <A href="https://twitter.com/jamesappledev">Twitter</A>
        <A href="https://www.linkedin.com/in/jamesappledev">LinkedIn</A>
      </Container>
    )
  }
}

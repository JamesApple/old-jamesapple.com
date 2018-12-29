import * as React from 'react'
import styled from 'utils/styled-components'
import { Link } from 'gatsby'
import { systemTextStyle } from 'fontStyles'
import { ITheme } from 'theme'

interface PaginationProps {
  pageCount: number
  currentPage: number
  pathPrefix: string
  className?: string
}

const Container = styled.nav`
  display: flex;
`

const itemStyles = (props: any) => `
${systemTextStyle(props)}
font-size: 16px;
padding: 16px;
`

const Item = styled.span`
  ${itemStyles}
`

const PageLink = styled(Link)`
  ${itemStyles}
  user-drag: none;
  &:hover {
    color: ${({ theme }: { theme: ITheme }) => theme.gray.dark};
  }
`
export default class Pagination extends React.PureComponent<PaginationProps, {}> {
  public render() {
    const { className, pageCount, currentPage, pathPrefix } = this.props
    const isFirst = currentPage === 1
    const isLast = currentPage === pageCount
    const prevPage = currentPage - 1 === 1 ? pathPrefix : `${pathPrefix}${currentPage - 1}`
    const nextPage = `${pathPrefix}${currentPage + 1}`

    return (
      <>
        {pageCount !== 1 && (
          <Container className={className}>
            {!isFirst && <PageLink to={prevPage}>Previous Page</PageLink>}
            <Item>{currentPage}</Item>
            {!isLast && <PageLink to={nextPage}>Next Page</PageLink>}
          </Container>
        )}
      </>
    )
  }
}

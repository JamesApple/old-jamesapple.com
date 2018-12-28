import { ITheme } from './theme'

export const body = ({ theme }: { theme: ITheme }) => `
font-family: ${theme.bodyFamily};
color: ${theme.gray.dark};
font-size: 12px;
`

export const postTitle = ({ theme }: { theme: ITheme }) => `
font-family: ${theme.bodyFamily};
color: ${theme.gray.light};
font-size: 24px;
font-weight: 700;
line-height: 25px;
`

export const logo = ({ theme }: { theme: ITheme }) => `
font-family: ${theme.headerFamily};
color: ${theme.gray.dark};
font-weight: 700;
font-size: 32px;
letter-spacing: 5px;
text-align: center;
`

export const tagline = ({ theme }: { theme: ITheme }) => `
font-family: ${theme.bodyFamily};
color: ${theme.gray.mid};
font-size: 16px;
letter-spacing: 2.8px;
`

export const navItem = ({ theme }: { theme: ITheme }) => `
font-family: ${theme.headerFamily};
font-weight: 700;
font-size: 8px;
color: #FFFFFF;
letter-spacing: 1.25px;
`

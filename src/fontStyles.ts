import { ITheme } from 'theme'

export const systemTextStyle = ({ theme }: { theme: ITheme }) => `
font-family: ${theme.bodyFamily};
color: ${theme.gray.mid};

text-transform: uppercase;
text-decoration: none;

font-weight: 700;
letter-spacing: 2px;
font-size: 12px;
`

export const postTitleTextStyle = ({ theme }: { theme: ITheme }) => `
font-family: ${theme.bodyFamily};
color: ${theme.gray.mid};

font-size: 32px;
font-weight: 700;
`

export const contentTextStyle = ({ theme }: { theme: ITheme }) => `
font-family: ${theme.bodyFamily};
color: ${theme.gray.dark};

font-size: 16px;
font-weight: 400;
`

export const postSummaryTextStyle = ({ theme }: { theme: ITheme }) => `
font-family: ${theme.bodyFamily};
font-style: italic;
font-size: 16px;
color: ${theme.gray.light};
`

export const taglineTextStyle = ({ theme }: { theme: ITheme }) => `
font-family: ${theme.bodyFamily};
color: ${theme.gray.mid};
font-size: 16px;
letter-spacing: 2.8px;
`

export const logoTextStyle = ({ theme }: { theme: ITheme }) => `
font-family: ${theme.headerFamily};
color: ${theme.gray.dark};
font-weight: 700;
font-size: 32px;
letter-spacing: 5px;
`

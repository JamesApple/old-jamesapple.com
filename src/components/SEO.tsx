import * as React from 'react'
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string
  description: string
  pathname: string
  image?: string
  article?: boolean
}

const siteUrl = 'https://jamesapple.com'
const twitterUsername = '@jamesappledev'

export default class SEO extends React.PureComponent<SEOProps, {}> {
  public render() {
    const { title, description, image, pathname, article = false } = this.props
    const url = `${siteUrl}${pathname || '/'}`


    return (
      <>
        <Helmet title={title} titleTemplate={'%s - James Apple'}>
          <meta name="description" content={description} />
          <meta name="image" content={image} />

          {url && <meta property="og:url" content={url} />}
          {(article ? true : null) && <meta property="og:type" content="article" />}
          {title && <meta property="og:title" content={title} />}
          {description && <meta property="og:description" content={description} />}
          {image && <meta property="og:image" content={image} />}

          <meta name="twitter:card" content="summary_large_image" />
          {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
          {title && <meta name="twitter:title" content={title} />}
          {description && <meta name="twitter:description" content={description} />}
          {image && <meta name="twitter:image" content={image} />}
        </Helmet>
      </>
    )
  }
}

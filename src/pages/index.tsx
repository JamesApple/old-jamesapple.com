import * as React from 'react'
import IndexPage from 'components/IndexPage'
import SEO from 'components/SEO';

class IndexPageContainer extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <>
        <SEO
          title="Software Engineer"
          description="Software Engineering Blog of James Apple."
          pathname="/"
        />
        <IndexPage />
      </>
    )
  }
}

export default IndexPageContainer

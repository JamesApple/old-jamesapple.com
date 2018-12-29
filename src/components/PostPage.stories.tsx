import * as React from 'react'

import UnthemedPostPage from 'components/PostPage'
import { storiesOf } from '@storybook/react'
import withThemeProvider from 'utils/withThemeProvider'
import DisplayMarkdown from 'models/DisplayMarkdown'

const PostPage = withThemeProvider(UnthemedPostPage)

const displayMarkdown = DisplayMarkdown.fromFragment({
  html: `
    <p>
    When implementing a user interface in a browser, it’s good to minimize those
    differences and issues wherever you can, so that the UI is predictable. Keeping
    track of all of those differences is hard, so I’ve put together a list of
    common issues, with their solutions, as a handy reference guide for when you’re
      working on a new project.
      </p>

    <strong>
    Let’s begin.
      </strong>


    <p> 
    Reset The Backgrounds Of button And input Elements When adding a button,
    reset its background, or else it will look different across browsers.  In the
      example below, the same button is shown in Chrome and in Safari.  The latter
    adds a default gray background.  
      </p>

    <pre>
    console.log('Hello')
    </pre>`,
    tableOfContents: `<ul>\n<li>\n<p><a
    href=\"/My%20first%20blog%20post/#github-markdown-kitchen-sink\">GitHub
    Markdown Kitchen Sink</a></p>\n<ul>\n<li>\n<ul>\n<li>\n<ul>\n<li>\n<p><a
    href=\"/My%20first%20blog%20post/#resources\">Resources</a></p>\n<ul>\n<li><a
    href=\"/My%20first%20blog%20post/#this-repo\">This Repo</a></li>\n<li><a
    href=\"/My%20first%20blog%20post/#markdown\">Markdown</a></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<p><a
    href=\"/My%20first%20blog%20post/#code-examples-with-preview\">Code
    Examples with Preview</a></p>\n<ul>\n<li><a
    href=\"/My%20first%20blog%20post/#block-elements\">Block
    Elements</a></li>\n<li><a
    href=\"/My%20first%20blog%20post/#inline-elements\">Inline
    Elements</a></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>`,
  frontmatter: {
    title: 'Redefining JavaScript Dynamically at Runtime',
    date: 'December 2019',
    headerImage: null,
    path: '/posts/this-one'
  }
})

storiesOf('PostPage', module).add('Default', () => {
  return <PostPage displayMarkdown={displayMarkdown} />
})

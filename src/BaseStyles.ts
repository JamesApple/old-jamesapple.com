import { createGlobalStyle } from 'utils/styled-components'
import normalize from 'normalize'
import fluidType from 'utils/fluidType'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default createGlobalStyle`
 ${normalize}

html {
  ${fluidType({ minSize: 14, maxSize: 24 })}
}
  p {
    max-width: 70ch;
  }

  // Code highlighting
  .gatsby-highlight-code-line {
    background-color: #494949;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #D16B6B;
  }

  .gatsby-highlight {
    font-size: 1rem;
    background-color: #272822;
    border-radius: 4px;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }


/**
 * Remove the default PrismJS theme background-color, border-radius, margin,
 * padding and overflow.
 * 1. Make the element just wide enough to fit its content.
 * 2. Always fill the visible space in .gatsby-highlight.
 * 3. Adjust the position of the line numbers
 */
.gatsby-highlight pre[class*="language-"] {
  background-color: transparent;
  margin: 0;
  padding: 0;
  overflow: initial;
  float: left; /* 1 */
  min-width: 100%; /* 2 */
  }

/* Adjust the position of the line numbers */
.gatsby-highlight pre[class*="language-"].line-numbers {
  padding-left: 2.8em;
}


`

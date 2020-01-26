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

  html, body {
    height: 100%;
    width: 100%;
  }

  p {
    max-width: 70ch;
  }
`

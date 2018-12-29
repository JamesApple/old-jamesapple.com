import { createGlobalStyle } from 'utils/styled-components'
import normalize from 'normalize'
import fluidType from 'utils/fluidType'

export default createGlobalStyle`
${normalize}

html {
  ${fluidType({ minSize: 14, maxSize: 24 })}
  p {
    max-width: 70ch;
  }
}
`

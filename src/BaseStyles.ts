import { createGlobalStyle } from './styled-components'
import normalize from 'styled-normalize'

import { body } from './fontStyles';

export default createGlobalStyle`
${normalize}

body {
  ${body}
}
`


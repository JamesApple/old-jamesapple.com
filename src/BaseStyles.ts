import { createGlobalStyle } from './styled-components'
import normalize from './normalize';

import { body } from './fontStyles';

export default createGlobalStyle`
${normalize}

body {
  ${body}
}
`


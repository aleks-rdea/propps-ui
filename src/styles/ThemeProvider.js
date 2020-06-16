import { css, createGlobalStyle } from 'styled-components'

import { color } from './colors'
import { sanitize } from './sanitize'
import { globalTypography } from './typography'
import { forms } from './forms'
import { modern, classic } from './themes'

export const GlobalStyle = createGlobalStyle`
  ${sanitize}
  ${globalTypography}
  ${forms}

  ${props =>
    props.modern &&
    css`
      ${modern}
    `}
    
  ${props =>
    props.classic &&
    css`
      ${classic}
    `}

  html {
    background: ${color.black};
    overflow-y: scroll;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
`

export default GlobalStyle

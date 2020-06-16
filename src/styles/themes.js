import { css } from 'styled-components'
import { fontSize } from './typography'

export const modern = css`
  /* Modern – Futura */
  @import url('https://use.typekit.net/vuh8znw.css');

  h1,
  h2,
  h3,
  h4 {
    font-family: 'futura-pt-bold', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
  }

  h1 {
    letter-spacing: -0.15rem;
    line-height: ${fontSize.jumbo};
    line-height: ${fontSize.xxxl};
  }

  h2 {
    letter-spacing: -0.1rem;
    line-height: ${fontSize.xxxl};
    line-height: ${fontSize.xxl};
  }

  h3 {
    letter-spacing: -0.05rem;
    line-height: ${fontSize.xxl};
    line-height: ${fontSize.xxl};
  }

  h4 {
    line-height: ${fontSize.xl};
    line-height: ${fontSize.l};
  }
`

export const classic = css`
  /* DM Serif */
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap');

  h1,
  h2,
  h3,
  h4 {
    font-family: 'DM Serif Text', serif;
    font-weight: normal;
    text-transform: none;
    letter-spacing: 0;
  }

  h1 {
    font-size: ${fontSize.jumbo};
  }

  h2 {
    font-size: ${fontSize.xxxl};
  }

  h3 {
    font-size: ${fontSize.xxl};
  }

  h4 {
    font-size: ${fontSize.xl};
  }
`

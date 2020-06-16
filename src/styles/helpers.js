import { css } from 'styled-components'

/* Margins */
export const margin = {
  xxxs: css`
    margin-top: 8px;
    margin-bottom: 16px;
  `,
  xxs: css`
    margin-top: 12px;
    margin-bottom: 24px;
  `,
  xs: css`
    margin-top: 16px;
    margin-bottom: 32px;
  `,
  s: css`
    margin-top: 24px;
    margin-bottom: 48px;
  `,
  m: css`
    margin-top: 32px;
    margin-bottom: 64px;
  `,
  l: css`
    margin-top: 48px;
    margin-bottom: 96px;
  `,
  xl: css`
    margin-top: 64px;
    margin-bottom: 128px;
  `
}

/* Z-index values */
export const zIndex = {
  stackNotification: 7777,
  stackModal: 6666,
  stackDrawer: 5555,
  stackMenu: 4444,
  stackChat: 3333,
  stackMain: 2222,
  stackHero: 1111
}

/* Helper styles */
export const centerText = css`
  text-align: centered;
`

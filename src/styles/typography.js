import { css } from 'styled-components'
import { color } from './colors'
import { margin } from './helpers'

/* Fonts */
export const font = {
  modern: css`
    font-family: 'futura-pt-bold', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
  `,
  classic: css`
    font-family: 'DM Serif Text', serif;
    font-weight: normal;
    text-transform: none;
  `,
  default: css`
    /* font-family: 'Public Sans', sans-serif; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-weight: normal;
    text-transform: none;
  `
}

/* Sizes */
export const fontSize = {
  xs: '12px',
  s: '14px',
  m: '16px',
  l: '20px',
  xl: '24px',
  xxl: '32px',
  xxxl: '40px',
  jumbo: '48px',
  super: '64px'
}

/* Headings */
export const heading = {
  h1: css`
    font-size: ${fontSize.xxxl};
    ${margin.l}
    line-height: 1;
  `,
  h2: css`
    font-size: ${fontSize.xxl};
    ${margin.s}
    line-height: 1;
  `,
  h3: css`
    font-size: ${fontSize.xl};
    ${margin.s}
    line-height: 1;
  `,
  h4: css`
    font-size: ${fontSize.l};
    ${margin.s}
    line-height: 1;
  `
}

/* Body */
export const body = {
  label: css`
    ${font.default}
    font-size: ${fontSize.xs};
    line-height: 16px;
  `,
  xs: css`
    ${font.default}
    font-size: ${fontSize.xs};
    line-height: 16px;
  `,
  s: css`
    ${font.default}
    font-size: ${fontSize.s};
    line-height: 1.5;
  `,
  m: css`
    ${font.default}
    font-size: ${fontSize.m};
    line-height: 1.5;
  `,
  l: css`
    ${font.default}
    font-size: ${fontSize.l};
    line-height: 24px;
  `,
  xl: css`
    ${font.default}
    font-size: ${fontSize.xl};
    line-height: 32px;
  `
}

/* Global */
export const globalTypography = css`
  /* Default – Public Sans */
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap');

  *,
  ::before,
  ::after {
    /* font-family: 'Public Sans', sans-serif; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 16px;
  }

  h1:first-child,
  h2:first-child,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child {
    margin-top: 0;
  }

  h1 {
    ${heading.h1}
  }

  h2 {
    ${heading.h2}
  }

  h3 {
    ${heading.h3}
  }

  h4 {
    ${heading.h4}
  }

  p {
    ${body.m}

    & + p {
      margin-top: -24px;
    }
  }

  a {
    color: ${color.blue};
    text-decoration: none;
    border-bottom: 1px solid ${color.blue25};
    cursor: pointer;
    transition: 0.2s all ease-out;

    &:hover,
    &:active,
    &:focus {
      border-bottom-color: ${color.blue};
    }
  }
`

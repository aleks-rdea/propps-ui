import styled, { css, keyframes } from 'styled-components'

import { screen } from '../styles/breakpoints.js'
import { color } from '../styles/colors.js'

const highlightGreen = keyframes`
  0% {
    background: ${color.green25};
  }
  10% {
    background: transparent;
  }
  20% {
    background: ${color.green25};
  }
  30% {
    background: transparent;
  }
  40% {
    background: ${color.green25};
  }
  50% {
    background: transparent;
  }
  60% {
    background: ${color.green25};
  }
  90% {
    background: transparent;
  }
  100% {
    background: ${color.green25};
  }
`

const highlightRed = keyframes`
  0% {
    background: ${color.red25};
  }
  10% {
    background: transparent;
  }
  20% {
    background: ${color.red25};
  }
  30% {
    background: transparent;
  }
  40% {
    background: ${color.red25};
  }
  50% {
    background: transparent;
  }
  60% {
    background: ${color.red25};
  }
  90% {
    background: transparent;
  }
  100% {
    background: ${color.red25};
  }
`

const highlightYellow = keyframes`
  0% {
    background: ${color.yellow25};
  }
  10% {
    background: transparent;
  }
  20% {
    background: ${color.yellow25};
  }
  30% {
    background: transparent;
  }
  40% {
    background: ${color.yellow25};
  }
  50% {
    background: transparent;
  }
  60% {
    background: ${color.yellow25};
  }
  90% {
    background: transparent;
  }
  100% {
    background: ${color.yellow25};
  }
`

const highlightBlue = keyframes`
  0% {
    background: ${color.blue25};
  }
  10% {
    background: transparent;
  }
  20% {
    background: ${color.blue25};
  }
  30% {
    background: transparent;
  }
  40% {
    background: ${color.blue25};
  }
  50% {
    background: transparent;
  }
  60% {
    background: ${color.blue25};
  }
  90% {
    background: transparent;
  }
  100% {
    background: ${color.blue25};
  }
`

export const TimelineWrapper = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  overflow: scroll;
  padding: 80px 0 48px;

  @media ${screen.m.down} {
    display: none;
  }

  @media ${screen.l} {
    height: calc(100vh - 225px - 112px);
    width: 320px;
    margin-left: -16px;
  }

  @media ${screen.xl} {
    height: calc(100vh - 225px - 112px);
    width: 290px;
    margin-left: 30px;
  }

  ul {
    margin: 0;
    padding: 0 16px 0 0;
    list-style: none;
    min-height: 100%;
  }
`

export const Event = styled.li`
  padding-left: 24px;
  padding-bottom: 32px;
  margin: 0;

  &::before {
    content: '';
    width: 2px;
    height: 56px;
    background: ${color.black};
    position: absolute;
    z-index: 1;
    margin: 24px 0 0 -10px;
  }

  &:last-child::before {
    display: none;
  }
  
  ${props =>
    props.color === 'green' &&
    css`
      &:first-child dd {
        animation: ${highlightGreen} 2s linear forwards;
      }
    `}
  ${props =>
    props.color === 'red' &&
    css`
      &:first-child dd {
        animation: ${highlightRed} 2s linear forwards;
      }
    `}
  ${props =>
    props.color === 'yellow' &&
    css`
      &:first-child dd {
        animation: ${highlightYellow} 2s linear forwards;
      }
    `}
  ${props =>
    props.color === 'blue' &&
    css`
      &:first-child dd {
        animation: ${highlightBlue} 2s linear forwards;
      }
    `}

  dl {
    margin-top: -8px;

    dt {
      display: block;
      padding: 0;
      margin-left: 8px;
      color: ${color.grey};
      line-height: 24px;
      height: 24px;
    }

    dd {
      display: inline-block;
      margin: 0;
      font-size: 14px;
      padding: 4px 20px 4px 32px;
      border-radius: 24px;
      margin-left: -24px;
      line-height: 20px;

      &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${color.black};
        position: absolute;
        z-index: 1;
        margin: 6px 0 0 -21px;
      }
    }
  }
`

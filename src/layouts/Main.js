import React from 'react'
import styled, { css } from 'styled-components'

import { color } from '../styles/colors'
import { zIndex } from '../styles/helpers'
import { screen } from '../styles/breakpoints'

const StackMainWrapper = styled.div`
  z-index: ${zIndex.stackMain};
  background-color: ${color.white};
  padding-bottom: 128px;
  min-height: 100vh;

  @media ${screen.xs} {
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 48px;
  }

  @media ${screen.s.only} {
    padding-left: 15vw;
    padding-right: 15vw;
    padding-top: 64px;
  }

  @media ${screen.m.up} {
    padding-left: 20vw;
    padding-right: 20vw;
    padding-top: calc(45vw - 241px);
  }

  ${props =>
    props.duo &&
    css`
      @media ${screen.l.up} {
        margin-left: 432px;
        padding-left: 96px;
        padding-right: 128px;
        padding-top: 160px;
      }

      @media ${screen.xl.up} {
        width: 65%;
        margin-left: 35%;
        padding-left: 128px;
        padding-right: calc(65% - 640px);
      }
    `}

  ${props =>
    props.mono &&
    css`
      @media ${screen.l.up} {
        padding-left: calc((100vw - 640px) / 2);
        padding-right: calc((100vw - 640px) / 2);
        padding-top: 160px;
      }
    `}
`

const StackMain = ({ ...props }) => {
  return (
    <StackMainWrapper full={props.full} duo={props.duo} mono={props.mono}>
      {props.children}
    </StackMainWrapper>
  )
}

export default StackMain

import React from 'react'
import styled from 'styled-components'

import { zIndex } from '../styles/helpers'
import { color } from '../styles/colors'
import { screen } from '../styles/breakpoints'

const StackHeroWrapper = styled.div`
  position: relative;
  left: 0;
  top: 0;
  z-index: ${zIndex.stackHero};
  border-radius: 24px 24px 0 0;
  background-color: ${color.offWhite};
  background-size: 96px 96px;
  background-repeat: repeat;
  padding-top: 112px;
  padding-bottom: 128px;

  @media ${screen.xs} {
    padding-left: 10vw;
    padding-right: 10vw;
    width: 100vw;
    height: 56vw;
  }

  @media ${screen.s.only} {
    width: 100%;
    height: 384px;
    padding-left: 15vw;
    padding-right: 15vw;
  }

  @media ${screen.m.only} {
    width: 100%;
    height: 384px;
    padding-left: 20vw;
    padding-right: 20vw;
  }

  @media ${screen.m.down} {
    box-shadow: inset 0 -48px 48px 0 ${color.black5};
  }

  @media ${screen.l.up} {
    position: fixed;
    width: 432px;
    height: 100vh;
    padding-left: 128px;
    padding-right: 32px;
    border-radius: 0;
    box-shadow: inset -48px 0 48px 0 ${color.black5};
  }

  @media ${screen.xl.up} {
    width: 35%;
    padding-left: calc(35% - 320px);
    padding-right: 32px;
    background-position: calc(42vw + 24px) 0;
  }
`

const StackHero = ({ ...props }) => {
  return (
    <StackHeroWrapper style={{ backgroundImage: `url(${props.background})` }}>
      {props.children}
    </StackHeroWrapper>
  )
}

export default StackHero

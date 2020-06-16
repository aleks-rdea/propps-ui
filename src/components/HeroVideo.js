import React from 'react'
import styled from 'styled-components'

import { color } from '../styles/colors'
import { screen } from '../styles/breakpoints'

const HeroVideWrapper = styled.div`
  background-color: ${color.black};
  border-radius: 16px;
  box-shadow: 0 16px 32px 0 ${color.black20};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
  }

  @media ${screen.s.down} {
    position: absolute;
    width: 100vw;
    height: 56vw;
    left: 0;
    top: 72px;
    box-shadow: none;
    border-radius: 24px 24px 0 0;
    background-color: ${color.black};
  }

  @media ${screen.s.only} {
    width: 100vw;
    height: 56vw;
    max-width: 556px;
    max-height: 312px;
    margin-left: calc((100% - 556px) / 2);
  }

  @media ${screen.m.up} {
    width: 80vw;
    height: 45vw;
    margin-left: -10vw;
  }

  @media ${screen.l.up} {
    width: 400px;
    height: 225px;
    margin-left: -64px;
  }

  @media ${screen.xl.up} {
    width: 400px; /* 480 x 270 */
    height: 225px;
    margin-left: -16px;
  }
`

const HeroVideo = ({ stream }) => {
  return (
    <HeroVideWrapper>
      <iframe
        src={stream}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </HeroVideWrapper>
  )
}

export default HeroVideo

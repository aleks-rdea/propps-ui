import React, { useContext } from 'react'
import styled from 'styled-components'

import { StacksUI } from '../layouts/Stacks'

import { Cross } from './../elements/icons'

import { zIndex } from '../styles/helpers.js'
import { color } from '../styles/colors.js'
import { screen } from '../styles/breakpoints'

const StackMenuWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 418px;
  max-width: 100vw;
  padding: 96px 48px;
  height: 100vh;
  z-index: 5555;
  z-index: ${zIndex.StackMenu};
  background-color: ${color.xxxLightGrey80};
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translate3d(128px, 0, 0);
  animation: 0.2s fadeInMenu forwards;

  @keyframes fadeInMenu {
    from {
      opacity: 0;
      transform: translate3d(128px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @media ${screen.xs} {
    width: 100vw;
    border-radius: 24px 24px 0 0;
  }

  > h1 {
    margin-top: 0;
  }
`

const Links = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  right: 0;
  top: 0;
  font-weight: bold;
  width: 100%;
  height: 72px;

  @media ${screen.xs} {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media ${screen.s.up} {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media ${screen.m.up} {
    height: 112px;
    padding-left: 32px;
    padding-right: 32px;
  }

  label {
    display: block;
    height: 24px;
    overflow-y: hidden;
    line-height: 26px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.1rem;
    font-weight: bold;
    color: ${color.black};

    @media ${screen.xs} {
      display: none;
    }
  }

  img {
    width: 48px;
    height: 48px;
    border: 12px solid transparent;
    border-radius: 8px;
    transition: 0.2s all ease-out;

    &:hover {
      background: ${color.black10};
    }
  }
`

const Close = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  label {
    margin-right: 8px;
  }
`

const StackMenu = ({ menu, ...props }) => {
  const stacks = useContext(StacksUI)

  return (
    <StackMenuWrapper {...props}>
      <Links>
        <Close onClick={() => stacks.toggleMenu()}>
          <label>Close</label>
          <img src={Cross} />
        </Close>
      </Links>
      {props.children}
      {props.menu}
    </StackMenuWrapper>
  )
}

export default StackMenu

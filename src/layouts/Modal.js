import React, { Fragment, useState, useContext } from 'react'
import styled from 'styled-components'

import { StacksUI } from '../layouts/Stacks'

import { Cross } from './../elements/icons'

import { zIndex } from '../styles/helpers.js'
import { color } from '../styles/colors.js'
import { screen } from '../styles/breakpoints'

const StackModalWrapper = styled.div`
  position: fixed;
  left: calc(50vw - 256px);
  bottom: 0;
  width: 512px;
  max-width: 100vw;
  padding: 96px 48px;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 32px 64px 0 ${color.black20};
  min-height: 480px;
  max-height: 80vh;
  z-index: ${zIndex.stackModal};
  background-color: ${color.white};
  transform: translate3d(0, 128px, 0);
  animation: 0.2s fadeInModal forwards;

  @keyframes fadeInModal {
    from {
      opacity: 0;
      transform: translate3d(0, 128px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @media (max-width: 512px) {
    width: calc(100vw - 16px);
    left: 8px;
  }

  &.fadeOut {
    pointer-events: none;
    opacity: 1;
    animation: 0.2s fadeOutModal forwards;

    @keyframes fadeOutModal {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(0, 128px, 0);
      }
    }
  }
`

const Background = styled.div`
  display: block;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: ${zIndex.stackModal - 1};
  background: ${color.black20};
  opacity: 0;
  animation: 2s fadeInBackground forwards;

  @keyframes fadeInBackground {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &.fadeOut {
    pointer-events: none;
    opacity: 1;
    animation: 0.5s fadeOutBackground forwards;

    @keyframes fadeOutBackground {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
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

const StackModal = ({ name, ...props }) => {
  const [fadeOut, setFadeOut] = useState(false)
  const stacks = useContext(StacksUI)

  const toggleModalState = () => {
    if (stacks.showModal) {
      setFadeOut(true)
      setTimeout(() => stacks.toggleModal(), 500)
    } else {
      stacks.toggleModal()
    }
  }

  return (
    <Fragment>
      <Background
        className={fadeOut && 'fadeOut'}
        onClick={() => toggleModalState()}
      />
      <StackModalWrapper className={fadeOut && 'fadeOut'}>
        <Links>
          <Close onClick={() => toggleModalState()}>
            <label>Close</label>
            <img src={Cross} />
          </Close>
        </Links>
        {props.children}
      </StackModalWrapper>
    </Fragment>
  )
}

export default StackModal

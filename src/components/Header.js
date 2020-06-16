import React, { useContext } from 'react'
import styled from 'styled-components'
import Logo from './../elements/Logo'

import { ArrowLeft, Menu } from './../elements/icons'

import { color } from '../styles/colors'
import { zIndex } from '../styles/helpers'
import { screen } from '../styles/breakpoints'

import { StacksUI } from '../layouts/Stacks'

const LogoWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 128px;
  height: 48px;
  z-index: ${zIndex.stackChat - 2};

  @media ${screen.m.down} {
    margin-top: 12px;
    margin-left: calc(50vw - 64px);
  }

  @media ${screen.m.only} {
    margin-top: 32px;
  }

  @media ${screen.l.up} {
    position: fixed;
    margin-top: 32px;
    margin-left: 48px;
  }
`

const Links = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 0;
  top: 0;
  z-index: ${zIndex.stackChat - 2};
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

  @media ${screen.l.up} {
    width: calc(100% - 432px);
    padding-left: 96px;
    padding-right: 48px;
  }

  @media ${screen.xl.up} {
    width: 65%;
    padding-left: 128px;
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

const Left = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-right: 12px;

    @media ${screen.l.up} {
      position: fixed;
      margin-right: 32px;
      margin-left: -68px;
      margin-top: 0;
    }
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-left: 12px;
  }

  @media ${screen.l.up} {
    label {
      margin-right: 40px;
    }

    img {
      position: fixed;
      right: 32px;
      top: 32px;
    }
  }
`

const Header = ({ ...props }) => {
  const stacks = useContext(StacksUI)

  return (
    <header {...props}>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Links>
        <Left>
          <img src={ArrowLeft} />
          <label>Back</label>
        </Left>
        <Right onClick={() => stacks.toggleMenu()}>
          <label>Menu</label>
          <img src={Menu} />
        </Right>
      </Links>
    </header>
  )
}

export default Header

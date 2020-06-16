import React from 'react'
import styled from 'styled-components'

import { zIndex } from '../styles/helpers'
import { color } from '../styles/colors'
import { screen } from '../styles/breakpoints'

const StackChatWrapper = styled.div`
  position: fixed;
  bottom: 104px;
  border-radius: 16px;
  right: 32px;
  width: 418px;
  max-width: 100vw;
  padding: 96px 48px;
  height: 500px;
  z-index: ${zIndex.stackChat};
  background-color: ${color.white};
  box-shadow: 0 12px 24px 0 ${color.black10};
  opacity: 0;
  transform: translate3d(0, 128px, 0);
  animation: 0.2s fadeInChat forwards;

  @keyframes fadeInChat {
    from {
      opacity: 0;
      transform: translate3d(0, 128px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @media ${screen.xs} {
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
  }
`

const StackChat = ({ name, ...props }) => {
  return <StackChatWrapper>{props.children}</StackChatWrapper>
}

export default StackChat

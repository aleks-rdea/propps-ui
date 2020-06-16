import React, { useContext } from 'react'
import styled from 'styled-components'

import { StacksUI } from '../layouts/Stacks'

import { Cross, Messages } from './../elements/icons'

import { zIndex } from '../styles/helpers.js'
import { color } from './../styles/colors'

const ContactButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 56px;
  height: 56px;
  bottom: 32px;
  right: 32px;
  border-radius: 50%;
  background: ${color.black};
  z-index: ${zIndex.stackChat - 1};
  background: linear-gradient(0deg, ${color.xDarkGrey} 0%, ${color.black} 100%);
  border: 3px solid ${color.black};
  box-shadow: 0 12px 24px 0 ${color.black20};
  cursor: pointer;
  user-select: none;

  &:hover,
  &:active,
  &:focus {
    border-color: ${color.black};
    background: ${color.black};
    background: linear-gradient(
      0deg,
      ${color.darkGrey} 0%,
      ${color.black} 100%
    );
  }

  img {
    -webkit-filter: invert(1); /* safari 6.0 - 9.0 */
    filter: invert(1);
    width: 24px;
    height: 24px;
    transform: translate3d(0, 0, 0) rotate(-30deg);
    animation: 0.2s spinIn forwards;

    @keyframes spinIn {
      from {
        opacity: 0;
        transform: translate3d(0, 0, 0) rotate(-30deg);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0) rotate(0);
      }
    }
  }
`

const ContactButton = props => {
  const stacks = useContext(StacksUI)

  return (
    <ContactButtonWrapper {...props} onClick={() => stacks.toggleChat()}>
      {!stacks.showChat && <img src={Messages} />}
      {stacks.showChat && <img src={Cross} />}
    </ContactButtonWrapper>
  )
}

export default ContactButton

import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import pointer from '../images/pointer.svg'
import arrow from '../images/select-arrow.svg'

import { screen } from '../styles/breakpoints'
import { color } from '../styles/colors'

export const InputWrapper = styled.div`
  position: relative;

  select {
    box-sizing: border-box;
    width: 100%;
    text-overflow: ellipsis;
    padding: 10px 32px 10px 12px;
    border-left: 1px solid ${color.xxxLightGrey};

    &:disabled,
    &[disabled='disabled'] {
      color: ${color.grey};
    }

    @media ${screen.xs} {
      border-left: none;
      padding: 4px 32px 16px 0;
      border-radius: 4px 4px 0 0;

      &:focus,
      &:active,
      &:hover {
        padding: 10px 32px 10px 12px;
      }
    }

    > img {
      position: absolute;
      right: 0;
      top: 12px;
    }
  }

  .underline {
    display: block;
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 0;
    border-bottom: 2px solid ${color.blue};
    animation: drawIn 0.3s ease-in-out forwards;

    @keyframes drawIn {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
  }

  .arrow {
    position: absolute;
    right: ${props => (props.active ? '24px' : '12px')};
    top: 19px;
    transition: 0.2s all ease-out;
  }

  .pointer {
    position: absolute;
    right: -32px;
    top: 6px;
    animation: wingardium 4s ease-in-out infinite;

    @keyframes wingardium {
      0% {
        transform: rotate(0deg) translateX(8px) rotate(0deg);
      }
      50% {
        transform: rotate(360deg) translateX(8px) rotate(-360deg);
      }
      100% {
        transform: rotate(360deg) translateX(8px) rotate(-360deg);
      }
    }
  }
`

const Input = ({ type, ...props }) => {
  const [active, setActive] = useState(false)

  return (
    <InputWrapper active={active}>
      <select
        type={type}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        {...props}
      >
        {props.children}
      </select>
      <img className="arrow" src={arrow} />
      {active && <hr className="underline" />}
      {active && (
        <svg width="48px" height="32px" viewBox="0 0 48 32">
          <path
            d="M18.3137085,0 L44,0 C46.209139,-4.05812251e-16 48,1.790861 48,4 L48,28 C48,30.209139 46.209139,32 44,32 L18.3137085,32 C16.1919766,32 14.1571453,31.1571453 12.6568542,29.6568542 L1.82842712,18.8284271 C0.266329958,17.26633 0.266329958,14.73367 1.82842712,13.1715729 L12.6568542,2.34314575 C14.1571453,0.842854723 16.1919766,3.8975583e-16 18.3137085,0 Z"
            fill="#5992AE"
          ></path>
        </svg>
      )}
    </InputWrapper>
  )
}

export default Input

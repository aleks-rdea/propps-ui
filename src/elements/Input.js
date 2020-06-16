import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import pointer from '../images/pointer.svg'

import { screen } from '../styles/breakpoints'
import { color } from '../styles/colors'
import { fontSize } from '../styles/typography'

export const InputWrapper = styled.div`
  position: relative;
  border-left: 1px solid ${color.xxxLightGrey};

  input {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    padding: 10px 12px;
    background: ${props =>
      props.errors && !props.active ? color.red10 : 'none'};

    @media ${screen.xs} {
      border-left: none;
      padding: 8px 0 12px;
      border-radius: 4px 4px 0 0;

      &:focus,
      &:active,
      &:hover {
        padding: 10px 12px;
      }
    }

    &:focus,
    &:active,
    &:hover {
      outline: none;
      background: ${color.blue10};
    }

    ${props =>
      props.active &&
      css`
        background: ${color.blue10};

        &::placeholder {
          opacity: 0;
        }
      `}

    ${props =>
      props.centered &&
      css`
        @media ${screen.xs} {
          text-align: center;
        }
      `}
  }

  .underline {
    display: block;
    position: absolute;
    top: 43px;
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

  svg {
    position: absolute;
    right: -32px;
    top: 6px;

    ${props =>
      props.active &&
      css`
        animation: wingardium 4s ease-in-out infinite;
      `}

    ${props =>
      props.errors &&
      !props.active &&
      css`
        transform: translateX(8px);
      `}


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

  ${props =>
    props.large &&
    css`
      input {
        font-size: ${fontSize.l};
        font-weight: 300;
        padding-top: 16px;
        padding-bottom: 16px;
      }

      svg {
        top: 16px;
      }

      .underline {
        top: 55px;
      }
    `}

  ${props =>
    props.xlarge &&
    css`
      input {
        font-size: ${fontSize.xxl};
        font-weight: 300;
        padding-top: 24px;
        padding-bottom: 24px;
      }

      svg {
        top: 24px;
      }

      .underline {
        top: 85px;
      }
    `}
`

export const Errors = styled.ul`
  margin: 0;
  padding: 12px 0 4px;
  list-style: none;
`

export const Error = styled.li`
  position: relative;
  margin: 0 0 0 10px;
  padding: 0 10px 8px 12px;
  font-size: ${fontSize.s};
  line-height: ${fontSize.m};
  color: ${color.red};

  &:before {
    display: block;
    position: absolute;
    left: 0;
    top: -1px;
    content: '•';
  }
`

const Input = ({ errors, type, large, xlarge, centered, ...props }) => {
  const [active, setActive] = useState(false)

  return (
    <InputWrapper
      active={active}
      large={large}
      xlarge={xlarge}
      centered={centered}
      errors={errors}
      active={active}
    >
      <input
        type={type}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        {...props}
      />
      {active && <hr className="underline" />}
      {errors && (
        <Errors>
          {errors.map(error => (
            <Error>{error}</Error>
          ))}
        </Errors>
      )}
      {active && (
        <svg width="48px" height="32px" viewBox="0 0 48 32">
          <path
            d="M18.3137085,0 L44,0 C46.209139,-4.05812251e-16 48,1.790861 48,4 L48,28 C48,30.209139 46.209139,32 44,32 L18.3137085,32 C16.1919766,32 14.1571453,31.1571453 12.6568542,29.6568542 L1.82842712,18.8284271 C0.266329958,17.26633 0.266329958,14.73367 1.82842712,13.1715729 L12.6568542,2.34314575 C14.1571453,0.842854723 16.1919766,3.8975583e-16 18.3137085,0 Z"
            fill="#5992AE"
          ></path>
        </svg>
      )}
      {!active && errors && (
        <svg width="48px" height="32px" viewBox="0 0 48 32">
          <g stroke="none" fill="none" fill-rule="evenodd">
            <g transform="translate(-1182.000000, -1372.000000)" fill="#B42B4F">
              <path d="M1226,1372 C1228.20914,1372 1230,1373.79086 1230,1376 L1230,1400 C1230,1402.20914 1228.20914,1404 1226,1404 L1200.31371,1404 C1198.19198,1404 1196.15715,1403.15715 1194.65685,1401.65685 L1183.82843,1390.82843 C1182.26633,1389.26633 1182.26633,1386.73367 1183.82843,1385.17157 L1194.65685,1374.34315 C1196.15715,1372.84285 1198.19198,1372 1200.31371,1372 L1226,1372 Z M1217.8033,1383.13604 L1214,1386.93934 L1210.1967,1383.13604 L1209.13604,1384.1967 L1212.93934,1388 L1209.13604,1391.8033 L1210.1967,1392.86396 L1214,1389.06066 L1217.8033,1392.86396 L1218.86396,1391.8033 L1215.06066,1388 L1218.86396,1384.1967 L1217.8033,1383.13604 Z"></path>
            </g>
          </g>
        </svg>
      )}
    </InputWrapper>
  )
}

export default Input

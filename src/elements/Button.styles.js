import styled, { css } from 'styled-components'
import { color } from '../styles/colors'
import { font, body } from '../styles/typography'

export const ButtonWrapper = styled.a`
  ${body.m}
  display: inline-block;
  line-height: 24px;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  transition: 0.2s all ease-out;
  cursor: pointer;
  font-weight: normal;
  background: ${color.xxxLightGrey};
  color: ${color.black};
  outline: none;

  &:hover,
  &:active,
  &:focus {
    background: ${color.xxLightGrey};
  }

  &:active,
  &:focus {
    background: ${color.white};
    box-shadow: 0 0 0 4px ${color.blue};
    text-decoration: underline;
  }

  ${props =>
    props.primary &&
    css`
      background: ${color.black};
      color: ${color.white};

      &:hover,
      &:active,
      &:focus {
        background: ${color.xxxDarkGrey};
      }
    `}

  ${props =>
    props.cta &&
    css`
      box-sizing: border-box;
      padding: 14px 32px 12px;
      border-radius: 28px;
      border: 3px solid ${color.black};
      ${font.default}
      font-weight: bold;
      color: ${color.white};
      letter-spacing: 0.01rem;
      background: ${color.black};
      background: linear-gradient(
        0deg,
        ${color.xDarkGrey} 0%,
        ${color.black} 100%
      );

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
    `}

  ${props =>
    props.fixed &&
    css`
      position: fixed;
      bottom: 24px;
      box-shadow: 0 16px 32px 0 ${color.black20};
    `}

  ${props =>
    props.small &&
    css`
      ${body.label}
      display: inline-flex;
      padding: 4px 12px;
      line-height: 16px;
      border-radius: 12px;
    `}
`

export default ButtonWrapper

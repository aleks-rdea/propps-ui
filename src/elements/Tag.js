import React from 'react'
import styled, { css } from 'styled-components'

import { color } from '../styles/colors.js'
import { body } from '../styles/typography.js'

const TagWrapper = styled.div`
  ${body.label}
  color: ${color.black};
  display: inline-flex;
  background: ${color.xxxLightGrey};
  padding: 4px 12px;
  line-height: 16px;
  border-radius: 12px;

  ${props =>
    props.large &&
    css`
      ${body.s}
      line-height: 1;
      padding: 9px 18px;
      border-radius: 16px;
    `}

  ${props =>
    props.blue &&
    css`
      background: ${color.blue};
      color: ${color.white};
    `}

  ${props =>
    props.green &&
    css`
      background: ${color.blue};
      color: ${color.white};
    `}

  ${props =>
    props.red &&
    css`
      background: ${color.red};
      color: ${color.white};
    `}
`

const Tag = props => {
  return <TagWrapper {...props}>{props.label}</TagWrapper>
}

export default Tag

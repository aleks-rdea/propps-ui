import React from 'react'
import styled, { css } from 'styled-components'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import { body } from '../styles/typography.js'

const TimestampWrapper = styled.span`
  font-weight: normal;

  ${props =>
    props.small &&
    css`
      ${body.label}
      line-height: 24px;
    `}
`

const Timestamp = ({ small, timestamp }) => {
  return (
    <TimestampWrapper small={small}>
      {formatDistanceToNowStrict(timestamp, {
        addSuffix: true
      })}
    </TimestampWrapper>
  )
}

export default Timestamp

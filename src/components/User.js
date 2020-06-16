import React from 'react'
import styled, { css } from 'styled-components'

import Emoji from '../elements/Emoji'
import { body } from '../styles/typography.js'

const UserWrapper = styled.div`
  display: inline-flex;

  ${props =>
    props.small &&
    css`
      ${body.label}
      font-weight: bold;
      line-height: 24px;
    `}
`

const User = ({ character, username, small }) => {
  return (
    <UserWrapper small={small}>
      <Emoji character={character} />
      {username}
    </UserWrapper>
  )
}

export default User

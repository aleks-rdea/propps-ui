import React from 'react'
import styled from 'styled-components'

import { fontSize } from '../styles/typography'

const EmojiWrapper = styled.div`
  font-size: ${fontSize.l};
  line-height: 24px;
  margin-right: 4px;
`

const Emoji = ({ character }) => {
  return <EmojiWrapper>{character ? character : '😀'}</EmojiWrapper>
}

export default Emoji

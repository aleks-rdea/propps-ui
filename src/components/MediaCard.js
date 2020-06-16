import React from 'react'
import styled from 'styled-components'

import Tag from '../elements/Tag'
import { font, body } from '../styles/typography'
import { color } from '../styles/colors'

const MediaCardWrapper = styled.li`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  width: 128px;
  height: 128px;
  padding: 12px;
  border: 1px solid ${color.xxxLightGrey};
  text-align: center;
`

const MediaCard = ({ Media }) => {
  return <MediaCardWrapper></MediaCardWrapper>
}

export default MediaCard

import React from 'react'
import styled from 'styled-components'

import { zIndex } from '../styles/helpers.js'
import { color } from '../styles/colors.js'

const StackDrawerWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 418px;
  padding: 96px 48px;
  height: 100vh;
  z-index: ${zIndex.stackDrawer};
  background-color: ${color.offWhite};
`

const StackDrawer = ({ name, ...props }) => {
  return <StackDrawerWrapper>{props.children}</StackDrawerWrapper>
}

export default StackDrawer

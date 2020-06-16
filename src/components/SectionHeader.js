import React from 'react'
import styled from 'styled-components'

import { heading } from '../styles/typography'
import { color } from '../styles/colors'

const SectionHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 2px solid ${color.black};

  h4 {
    margin: 0;
  }
`

const SectionHeader = ({ title, ...props }) => {
  return (
    <SectionHeaderWrapper>
      <h4>{title}</h4>
      <div>{props.children}</div>
    </SectionHeaderWrapper>
  )
}

export default SectionHeader

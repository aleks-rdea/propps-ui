import React from 'react'
import styled from 'styled-components'

export const SectionWrapper = styled.section`
  margin: 64px 0 96px;
`

const Section = props => {
  return <SectionWrapper {...props}>{props.children}</SectionWrapper>
}

export default Section

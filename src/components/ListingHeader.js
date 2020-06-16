import React from 'react'
import styled from 'styled-components'

import Tag from '../elements/Tag'
import Button from '../elements/Button'
import { screen } from '../styles/breakpoints.js'
import { body, heading } from '../styles/typography.js'
import { margin } from '../styles/helpers'

const ListingHeaderWrapper = styled.div`
  ${margin.m}
  margin-top: 0;

  @media ${screen.m.down} {
    text-align: center;
  }

  h1 {
    ${heading.h1}
    margin-top: 0;
    margin-bottom: 0;

    @media ${screen.m.down} {
      ${heading.h2}
    }
  }

  p {
    ${body.l}
    ${margin.xxs}
  }
`

const Action = styled(Button)``

const ListingHeader = ({ status, title, subtitle }) => {
  return (
    <ListingHeaderWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <Tag green label={status} />
      <Action cta primary label="Make an offer" />
    </ListingHeaderWrapper>
  )
}

export default ListingHeader

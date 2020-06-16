import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

import User from './User'
import Timestamp from '../elements/Timestamp'
import { TickSmall } from '../elements/icons'

import { color } from '../styles/colors.js'
import { font, heading, body } from '../styles/typography.js'

const OfferCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${color.xxLightGrey};
  padding: 12px 0;
  margin-bottom: 48px;
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`

const Amount = styled.div`
  text-align: center;
  margin: 16px auto 24px;
  > span {
    ${font.default}
    ${heading.h2}
    letter-spacing: 0.02em;
  }
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 24px;
    height: 24px;
  }
`

const Metadata = styled.div`
  ${body.label}
  line-height: 24px;
  display: flex;
  margin-left: -8px;

  > img {
    margin-left: 4px;
  }
`

const OfferCard = ({ user, timestamp, amount, metadata }) => {
  return (
    <OfferCardWrapper>
      <Top>
        <User small character={user.emoji} username={user.handle} />
        <Timestamp small timestamp={timestamp} />
      </Top>
      <Amount>
        <NumberFormat
          value={amount}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$ '}
        />
      </Amount>
      <Bottom>
        <Metadata>
          {metadata.finance && <img src={TickSmall} />}
          Finance
          {metadata.deposit && <img src={TickSmall} />}
          Deposit
          {metadata.identity && <img src={TickSmall} />}
          Identity
        </Metadata>
      </Bottom>
    </OfferCardWrapper>
  )
}

export default OfferCard

import React from 'react'
import styled from 'styled-components'

import Tag from '../elements/Tag'
import { font, body } from '../styles/typography'
import { color } from '../styles/colors'

const StyledTag = styled(Tag)`
  position: absolute;
  bottom: 12px;
  align-self: center;
  text-align: center;
`

const ContactCardWrapper = styled.li`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  flex-shrink: 0;
  width: 128px;
  height: 160px;
  padding: 12px;
  border: 1px solid ${color.xxxLightGrey};
  border-radius: 12px;
  text-align: center;
  transition: 0.2s all ease-out;
  transition-property: border-color, box-shadow;
  cursor: pointer;

  &:hover {
    border-color: ${color.white};
    box-shadow: 0 12px 24px 0 ${color.black20};

    ${StyledTag} {
      color: ${color.white};
      background: ${color.black};
    }
  }

  > span {
    align-self: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: ${color.xxxLightGrey};
    color: ${color.xxLightGrey};
    font-size: 32px;
    text-align: center;
    line-height: 64px;
  }

  > p {
    ${body.s}
    margin-top: 4px;
    text-align: center;

    > span {
      ${body.xs}
      display: block;
      color: ${color.grey};
    }
  }
`

const ContactCard = ({ Contact }) => {
  return (
    <ContactCardWrapper>
      {/* <img src="asdf" /> */}
      <span>JS</span>
      <p>
        John Smith<span>Ray White</span>
      </p>
      <StyledTag label="Message" />
    </ContactCardWrapper>
  )
}

export default ContactCard

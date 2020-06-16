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

const DocumentCardWrapper = styled.li`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  width: 128px;
  height: 160px;
  padding: 16px 12px 12px;
  border: 1px solid ${color.xxxLightGrey};
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

  > h3 {
    ${font.default}
    ${body.m}
    font-weight: bold;
    margin: 0;
    width: 100%;
    text-align: left;
    letter-spacing: 0;
    white-space: normal;
    line-height: 1.2;
  }

  > p {
    align-self: flex-end;
    display: block;
    height: 48px;
    overflow: hidden;
    bottom: 0;
    text-align: left;
    color: ${color.xxxLightGrey};
    font-size: 8px;
    line-height: 10px;
    white-space: normal;
    margin: 0 0 12px;
  }
`

const DocumentCard = ({ document }) => {
  return (
    <DocumentCardWrapper>
      <h3>Contract of Sale</h3>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Fusce
        dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
        fermentum massa justo sit amet risus. Cras mattis consectetur purus sit
        amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Etiam
        porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis
        consectetur purus sit amet fermentum. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
      <StyledTag label="View" />
    </DocumentCardWrapper>
  )
}

export default DocumentCard

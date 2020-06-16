import React from 'react'
import styled from 'styled-components'

const ChecklistItemWrapper = styled.li``

const ChecklistItem = ({ item }) => {
  return (
    <ChecklistItemWrapper>
      <HelpHeader>
        <h4>{item.help.heading}</h4>
        <p>{item.help.description}</p>
      </HelpHeader>
      <Header>
        <Left>
          <Icon name="" />
          <Label></Label>
        </Left>
        <Right>
          <Icon name="" />
        </Right>
      </Header>
      <Description>{item.description}</Description>
    </ChecklistItemWrapper>
  )
}

export default ChecklistItem

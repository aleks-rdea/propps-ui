import React from 'react'
import styled, { css } from 'styled-components'

import { color } from '../styles/colors'
import { screen } from '../styles/breakpoints'

export const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: ${props => (props.help ? '96px' : '48px')};
  transition: 0.2s all ease-out;

  /* Use the 'inactive' prop to dim list items that aren't the focus when in a flow */
  opacity: ${props => (props.inactive ? '0.2' : '1')};
`

const ListItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  list-style: none;
  padding: 10px 0;
  line-height: 24px;
  border-bottom: 1px solid ${color.xxxLightGrey};

  @media ${screen.xs} {
    flex-direction: column;
  }

  > div:last-child {
    position: relative;
    width: 65%;
    margin: ${props => (props.column ? '4px 0 -10px' : '-10px 0')};

    @media ${screen.xs} {
      width: 100%;
      margin: 4px 0 -10px;
    }
  }
`

const ListItem = props => {
  return <ListItemWrapper {...props}>{props.children}</ListItemWrapper>
}

export default ListItem

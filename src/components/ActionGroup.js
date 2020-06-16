import React from 'react'
import styled, { css } from 'styled-components'

import { color } from '../styles/colors'
import { screen } from '../styles/breakpoints'
import { fontSize } from '../styles/typography'

export const ActionGroupWrapper = styled.div`
  display: flex;
  margin: 16px 0 24px;
  justify-content: left;
  align-items: center;

  @media ${screen.xs} {
    flex-direction: ${props => (props.centered ? 'column' : 'row')};
  }

  .cta + a {
    color: ${color.black};
    border-color: ${color.black20};
    margin: 11px 32px 9px;
    line-height: ${fontSize.xl};

    &:hover,
    &:active,
    &:focus {
      border-color: ${color.black};
    }

    @media ${screen.s.up} {
      & + a {
        margin-left: 0;
      }
    }

    @media ${screen.xs} {
      margin: 32px 0;

      & + a {
        margin-top: 0;
      }
    }
  }
`

const ActionGroup = ({ ...props }) => {
  return <ActionGroupWrapper {...props}>{props.children}</ActionGroupWrapper>
}

export default ActionGroup

import React from 'react'
import styled, { css } from 'styled-components'

import { body, font, fontSize } from '../styles/typography'
import { margin } from '../styles/helpers'
import { color } from '../styles/colors'

import ActionGroup from '../components/ActionGroup'
import Button from '../elements/Button'

const ListItemHelpWrapper = styled.div`
  margin: ${props => (props.help ? '128px 0 0' : '0')};
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${props =>
    props.help &&
    css`
      min-height: 100vh;
    `}

  ${props =>
    !props.help &&
    css`
      hr {
        display: none;
      }
    `}

  h2 {
    ${margin.xs}
    font-size: ${fontSize.xxl};
    ${font.default}
    letter-spacing: -0.01em;
    line-height: 40px;
  }

  p {
    ${margin.m}
    ${body.m}
    color: ${color.grey};
    margin-bottom: 32px;
  }

  hr {
    margin: 0;
    border: none;
    border-bottom: 1px solid ${color.xxxLightGrey};
  }
`

const ListItemHelp = ({
  help,
  href,
  action,
  actionLabel,
  question,
  helpBefore,
  helpAfter,
  ...props
}) => {
  return (
    <ListItemHelpWrapper help={help} {...props}>
      {help && question && <h2>{question}</h2>}
      {help && helpBefore && <p>{helpBefore}</p>}
      <hr />
      {props.children}
      {help && helpAfter && <p>{helpAfter}</p>}
      {help && (action || href) && (
        <ActionGroup>
          <Button
            primary
            label={actionLabel}
            href={href}
            onClick={action}
          ></Button>
        </ActionGroup>
      )}
    </ListItemHelpWrapper>
  )
}

export default ListItemHelp

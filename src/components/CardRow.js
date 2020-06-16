import React from 'react'
import styled from 'styled-components'

import { screen } from '../styles/breakpoints'

const CardRowWrapper = styled.div`
  display: block;
  overflow-x: scroll;
  max-height: 224px;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > ul {
    display: block;
    white-space: nowrap;
    padding: 24px 0 48px;
    margin: 0;
    max-height: 224px;

    > li {
      margin-right: 12px;
    }
  }

  @media ${screen.xs} {
    width: 100vw;
    margin-left: -10vw;

    > ul {
      padding-left: 10vw;

      > li:last-child {
        margin-right: 10vw;
      }
    }
  }

  @media ${screen.s.only} {
    width: 100vw;
    margin-left: -15vw;

    > ul {
      padding-left: 15vw;

      > li:last-child {
        margin-right: 15vw;
      }
    }
  }

  @media ${screen.m.only} {
    width: 100vw;
    margin-left: -20vw;

    > ul {
      padding-left: 20vw;

      > li:last-child {
        margin-right: 20vw;
      }
    }
  }

  @media ${screen.l.up} {
    width: calc(100vw - 432px);
    margin-left: -96px;

    > ul {
      padding-left: 96px;

      > li:last-child {
        margin-right: calc(60vw - 640px);
      }
    }
  }

  @media ${screen.xl.up} {
    width: 60vw;
    margin-left: -96px;

    > ul {
      padding-right: 96px;
    }
  }

  > li {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
`

const CardRow = props => {
  return (
    <CardRowWrapper>
      <ul>{props.children}</ul>
    </CardRowWrapper>
  )
}

export default CardRow

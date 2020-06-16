import { css } from 'styled-components'
import { color } from './colors'

export const forms = css`
  label {
    color: ${color.grey};
  }

  input[type='text'],
  input[type='number'],
  input[type='email'],
  input[type='url'],
  input[type='tel'],
  input[type='password'],
  textarea {
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    transition: 0.2s all ease-out;

    &::placeholder {
      color: ${color.black20};
    }

    &:focus,
    &:active,
    &:hover {
      outline: none;
      background: ${color.blue10};
    }
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: none;
    transition: 0.2s all ease-out;

    &::placeholder {
      color: ${color.black20};
    }

    &:focus,
    &:active,
    &:hover {
      outline: none;
      background: ${color.blue10};
    }
  }
`

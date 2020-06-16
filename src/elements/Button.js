import React from 'react'

import ButtonWrapper from './Button.styles.js'

const Button = ({ label, primary, cta, fixed, small, ...props }) => {
  return (
    <ButtonWrapper
      primary={primary}
      cta={cta}
      fixed={fixed}
      small={small}
      className={cta && 'cta'}
      {...props}
    >
      {label}
    </ButtonWrapper>
  )
}

export default Button

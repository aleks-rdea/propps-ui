import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.scss'

const Button = props => {
  return (
    <div className={styles.button + ' ' + styles.primary}>{props.label}</div>
  )
}

Button.propTypes = {
  label: PropTypes.string
}

export default Button

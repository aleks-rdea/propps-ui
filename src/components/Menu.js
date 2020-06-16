import React from 'react'

const Menu = ({ ...props }) => {
  return <nav {...props}>{props.children}</nav>
}

export default Menu

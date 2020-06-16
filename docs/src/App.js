import React, { Fragment, useContext } from 'react'

import { GlobalStyle } from 'propps-ui'

import Offer from './pages/Offer'

const App = props => {
  return (
    <Fragment>
      <GlobalStyle modern />
      <Offer />
    </Fragment>
  )
}

export default App

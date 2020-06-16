import React, { createContext, useState } from 'react'
// import StackModal from './../layouts/Modal'
// import StackMenu from './../layouts/Menu'
// import StackChat from './../layouts/Chat'
// import ContactButton from './../components/ContactButton'

export const StacksUI = createContext()

const Stacks = props => {
  const [stacks, setStacks] = useState({
    showMenu: false,
    showModal: false,
    showChat: false,
    showContactButton: true
  })

  return (
    <StacksUI.Provider
      value={{
        ...stacks,
        toggleMenu: () => {
          setStacks({ ...stacks, showMenu: !stacks.showMenu })
        },
        toggleModal: () => {
          setStacks({ ...stacks, showModal: !stacks.showModal })
        },
        toggleChat: () => {
          setStacks({ ...stacks, showChat: !stacks.showChat })
        },
        toggleContactButton: () => {
          setStacks({
            ...stacks,
            showContactButton: !stacks.showContactButton
          })
        }
      }}
    >
      {props.children}
    </StacksUI.Provider>
  )
}

export default Stacks

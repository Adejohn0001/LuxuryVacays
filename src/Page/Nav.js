import React from 'react'
import BookNow from '../components/BookNow'
import Hamburger from '../components/Hamburger'
import Logo from '../components/Logo'

const Nav = () => {
  return (
    <div className='navigation'>
        <Logo />
        <Hamburger />
        <BookNow />
    </div>
  )
}

export default Nav
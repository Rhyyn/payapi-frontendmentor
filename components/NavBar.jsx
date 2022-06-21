import React from 'react'
import styles from '../styles/Navbar.module.scss'

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </div>
  )
}

export default NavBar

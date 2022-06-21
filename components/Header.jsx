import React from 'react'
import styles from '../styles/Header.module.scss'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className = {styles.mainNavContainer}>
        <h1>payapi</h1>
        <NavBar></NavBar>
      </div>
    </header>
  )
}

export default Header

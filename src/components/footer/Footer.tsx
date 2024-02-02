import React from 'react'
import styles from './footer.module.css'

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        7879
      </div>
      <div className={styles.text}>
        Copyright © 2022 7879. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
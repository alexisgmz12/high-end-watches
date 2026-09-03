import React from 'react'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav} aria-label="Footer navigation">
        <ul className={styles.links}>
          <li><a href="/" className={styles.link}>Home</a></li>
          <li><a href="/about" className={styles.link}>About</a></li>
          <li><a href="/contact" className={styles.link}>Contact</a></li>
        </ul>
      </nav>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} High-End Watches. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
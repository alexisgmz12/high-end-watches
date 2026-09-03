import React from 'react';
import logo from '../assets/logo.svg';
import styles from './Header.module.scss';

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <img src={logo} alt="High‑End Watches logo" className={styles.logo} />
    </div>
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.navList}>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;

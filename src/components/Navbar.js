import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/category/business">Business</Link>
      <Link className={styles.link} to="/category/technology">Technology</Link>
      <Link className={styles.link} to="/category/sports">Sports</Link>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./NavBar.module.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarLogo} onClick={closeMobileMenu}>Daniel Haenelt</Link>
      <div className={styles.navbarMenuIcon} onClick={handleClick}>
        {click ? <AiOutlineClose className={styles.navbarIcon} /> : <AiOutlineMenu className={styles.navbarIcon} />}
      </div>
      <div className={click ? `${styles.navbarMenu} ${styles.active}` : styles.navbarMenu}>
        <Link to='/about' className={styles.navbarLink} onClick={handleClick}>About</Link>
        <Link to='/cv' className={styles.navbarLink} onClick={handleClick}>CV</Link>
        <Link to='/publications' className={styles.navbarLink} onClick={handleClick}>Publications</Link>
        <Link to='/contact' className={styles.navbarLink} onClick={handleClick}>Contact</Link>
      </div>
    </nav >
  );
};

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fc-top.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.mainNav}>
        <div className={styles.navLeft}>
          <div className={styles.logo}>
            <img src={logo} alt='logo' />
          </div>
          <div className={styles.menuList}>
            <Link>선수단</Link>
            <Link>일정</Link>
            <Link>기록</Link>
            <Link>출석</Link>
          </div>
        </div>
        <div className={styles.navRight}>
          <div className={styles.signUp}>
            <Link to='/signup'>회원가입</Link>
            <span className={styles.seperation}>/</span>
            <Link to='/login'>로그인</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

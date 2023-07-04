import React, { useState, useEffect, useContext } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/fc-top.png";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  //페이지 로드 시 로그인 상태를 확인
  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  if (isLoggedIn === null) {
    return null;
  }

  const handleLogout = () => {
    // 로그아웃 처리: 토큰을 제거하고 로그인 상태를 업데이트
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

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
          {!isLoggedIn ? (
            <div className={styles.signUp}>
              <Link to='/signup'>회원가입</Link>
              <span className={styles.seperation}>/</span>
              <Link to='/login'>로그인</Link>
            </div>
          ) : (
            <div className={styles.signUp}>
              <Link to='/' onClick={handleLogout}>
                로그아웃
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

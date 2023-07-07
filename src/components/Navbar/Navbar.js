import React, { useContext } from "react";
import logo from "../../assets/fc-top.png";
import { AuthContext } from "../../contexts/AuthContext";
import {
  Logo,
  LogoImg,
  MainNav,
  MenuList,
  NavLeft,
  NavRight,
  MenuLink,
  Auth,
  Seperation,
  AuthLink,
} from "./styled";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav>
      <MainNav>
        <NavLeft>
          <Logo>
            <LogoImg onClick={handleLogoClick} src={logo} alt='logo' />
          </Logo>
          <MenuList>
            <MenuLink to='/notice'>공지사항</MenuLink>
            <MenuLink to='/match'>경기</MenuLink>
            <MenuLink>선수단</MenuLink>
          </MenuList>
        </NavLeft>
        <NavRight>
          {!isLoggedIn ? (
            <Auth>
              <AuthLink to='/signup'>회원가입</AuthLink>
              <Seperation>/</Seperation>
              <AuthLink to='/login'>로그인</AuthLink>
            </Auth>
          ) : (
            <Auth>
              <AuthLink to='/mypage'>마이페이지</AuthLink>
              <AuthLink onClick={handleLogout}>로그아웃</AuthLink>
            </Auth>
          )}
        </NavRight>
      </MainNav>
    </nav>
  );
};

export default Navbar;

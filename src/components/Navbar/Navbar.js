import React, { useContext } from "react";
import logo from "../../assets/fc-top.png";
import { AuthContext } from "../../contexts/AuthContext";
import * as S from "./styled";
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
    <S.MainNav>
      <S.NavLeft>
        <S.Logo>
          <S.LogoImg onClick={handleLogoClick} src={logo} alt='logo' />
        </S.Logo>
        <S.MenuList>
          {/* <MenuLink to='/notice'>공지사항</MenuLink> */}
          <S.MenuLink to='/player'>선수단</S.MenuLink>
          <S.MenuLink to='/schedule'>일정/결과</S.MenuLink>
          <S.MenuLink to='/record'>기록/순위</S.MenuLink>
        </S.MenuList>
      </S.NavLeft>
      <S.NavRight>
        {!isLoggedIn ? (
          <S.Auth>
            <S.AuthLink to='/signup'>회원가입</S.AuthLink>
            <S.Seperation>/</S.Seperation>
            <S.AuthLink to='/login'>로그인</S.AuthLink>
          </S.Auth>
        ) : (
          <S.Auth>
            <S.AuthLink>실시간 출석</S.AuthLink>
            <S.AuthLink to='/mypage'>마이페이지</S.AuthLink>
            <S.AuthLink onClick={handleLogout}>로그아웃</S.AuthLink>
          </S.Auth>
        )}
      </S.NavRight>
    </S.MainNav>
  );
};

export default Navbar;

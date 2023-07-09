import React, { useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MyPageNav, NavList } from "./styled";

import { AuthContext } from "../../contexts/AuthContext";

import Navbar from "../../components/Navbar/Navbar";

const MyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const name = user ? user.KOR_LAST_NM + user.KOR_FIRST_NM : "Loading...";

  const navLists = [
    { path: "/mypage/myinfo", label: `${name}님의 TOP` },
    { path: "/mypage/myattendance", label: "출석" },
    { path: "/mypage/myrecord", label: "경기 기록" },
    { path: "/mypage/setting", label: "설정" },
  ];

  useEffect(() => {
    if (location.pathname === "/mypage" || location.pathname === "/mypage/") {
      navigate("/mypage/myinfo");
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Navbar />
      <MyPageNav>
        {navLists.map((list) => (
          <NavList
            key={list.path}
            to={list.path}
            selected={location.pathname === list.path}
          >
            {list.label}
          </NavList>
        ))}
      </MyPageNav>
      <Outlet />
    </>
  );
};

export default MyPage;

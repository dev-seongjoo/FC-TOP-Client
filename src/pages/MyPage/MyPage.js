import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MyPageNav, NavList, Section } from "./styled";

import { AuthContext } from "../../contexts/AuthContext";

import Navbar from "../../components/Navbar/Navbar";
import Info from "../../components/MyPage/Info/Info";
import Attendance from "../../components/MyPage/Attendance/Attendance";
import Record from "../../components/MyPage/Record/Record";
import Setting from "../../components/MyPage/Setting/Setting";

const MyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const name = user ? user.KOR_LAST_NM + user.KOR_FIRST_NM : "Loading...";

  const navLists = [
    { path: "/mypage/info", label: `${name}님의 TOP` },
    { path: "/mypage/attendance", label: "출석" },
    { path: "/mypage/record", label: "경기 기록" },
    { path: "/mypage/setting", label: "설정" },
  ];

  useEffect(() => {
    if (location.pathname === "/mypage" || location.pathname === "/mypage/") {
      navigate("/mypage/info");
    }
  }, [location.pathname, navigate]);

  const renderComponent = () => {
    switch (location.pathname) {
      case "/mypage/info":
        return <Info />;
      case "/mypage/attendance":
        return <Attendance />;
      case "/mypage/record":
        return <Record />;
      case "/mypage/setting":
        return <Setting />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <Section>
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
        {renderComponent()}
      </Section>
    </>
  );
};

export default MyPage;

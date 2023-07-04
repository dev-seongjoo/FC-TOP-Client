import React, { useContext } from "react";
import { MyPageNav, NavList, Section } from "./styled";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Info from "../../components/Info/Info";
import Attendance from "../../components/Attendance/Attendance";
import Record from "../../components/Record/Record";
import InfoSetting from "../../components/InfoSetting/InfoSetting";
import { AuthContext } from "../../contexts/AuthContext";

const MyPage = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const name = user ? user.KOR_LAST_NM + user.KOR_FIRST_NM : "Loading...";

  const renderComponent = () => {
    switch (location.pathname) {
      case "/mypage/info":
        return <Info name={name} />;
      case "/mypage/attendance":
        return <Attendance />;
      case "/mypage/record":
        return <Record />;
      case "/mypage/infosetting":
        return <InfoSetting />;
      default:
        return <Info name={name} />;
    }
  };

  return (
    <div>
      <Navbar />
      <Section>
        <MyPageNav>
          <NavList to='/mypage/info'>{name}님의 TOP</NavList>
          <NavList to='/mypage/attendance'>출석</NavList>
          <NavList to='/mypage/record'>경기 기록</NavList>
          <NavList to='/mypage/infosetting'>설정</NavList>
        </MyPageNav>
        {renderComponent()}
      </Section>
    </div>
  );
};

export default MyPage;

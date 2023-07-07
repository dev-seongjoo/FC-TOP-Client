import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavList, NoticePageNav } from "./styled";

import Navbar from "../../components/Navbar/Navbar";
import All from "../../components/Notice/All";
import Team from "../../components/Notice/Team";
import Coach from "../../components/Notice/Coach";
import Account from "../../components/Notice/Account";

const NoticePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLists = [
    { path: "/notice/all", label: "전체 공지" },
    { path: "/notice/team", label: "팀 공지" },
    { path: "/notice/coach", label: "감독 공지" },
    { path: "/notice/account", label: "회계 공지" },
  ];

  useEffect(() => {
    if (location.pathname === "/notice" || location.pathname === "/notice/") {
      navigate("/notice/all");
    }
  }, [location.pathname, navigate]);

  const renderComponent = () => {
    switch (location.pathname) {
      case "/notice/all":
        return <All />;
      case "/notice/team":
        return <Team />;
      case "/notice/coach":
        return <Coach />;
      case "/notice/account":
        return <Account />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <NoticePageNav>
        {navLists.map((list) => (
          <NavList
            key={list.path}
            to={list.path}
            selected={location.pathname === list.path}
          >
            {list.label}
          </NavList>
        ))}
      </NoticePageNav>
      {renderComponent()}
    </>
  );
};

export default NoticePage;

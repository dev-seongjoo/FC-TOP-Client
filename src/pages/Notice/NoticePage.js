import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavList, NoticePageNav } from "./styled";

import Navbar from "../../components/Navbar/Navbar";

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
      <Outlet />
    </>
  );
};

export default NoticePage;

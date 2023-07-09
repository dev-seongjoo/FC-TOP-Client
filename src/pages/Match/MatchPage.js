import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { MatchPageNav, NavList } from "./styled";

const MatchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLists = [
    { path: "/match/schedule", label: `경기 일정` },
    { path: "/match/matchrecord", label: "개인 순위" },
  ];

  useEffect(() => {
    if (location.pathname === "/match" || location.pathname === "/match/") {
      navigate("/match/schedule");
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Navbar />
      <MatchPageNav>
        {navLists.map((list) => (
          <NavList
            key={list.path}
            to={list.path}
            selected={location.pathname.startsWith(list.path)}
          >
            {list.label}
          </NavList>
        ))}
      </MatchPageNav>
      <Outlet />
    </>
  );
};

export default MatchPage;

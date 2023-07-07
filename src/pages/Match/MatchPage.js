import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { MatchPageNav, NavList } from "./styled";

import Schedule from "../../components/Match/Schedule/Schedule";
import MatchRecord from "../../components/Match/MatchRecord/MatchRecord";

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

  const renderComponent = () => {
    switch (location.pathname) {
      case "/match/schedule":
        return <Schedule />;
      case "/match/matchrecord":
        return <MatchRecord />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <MatchPageNav>
        {navLists.map((list) => (
          <NavList
            key={list.path}
            to={list.path}
            selected={location.pathname === list.path}
          >
            {list.label}
          </NavList>
        ))}
      </MatchPageNav>
      {renderComponent()}
    </>
  );
};

export default MatchPage;

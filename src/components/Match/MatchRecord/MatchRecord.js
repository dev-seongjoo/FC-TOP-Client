import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  AssisCategory,
  CategoryGroup,
  CategoryNav,
  GoalCategory,
  ParticipationCategory,
} from "./styled";
import { useEffect } from "react";

const MatchRecord = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname === "/match/matchrecord" ||
      location.pathname === "/match/matchrecord/"
    ) {
      navigate("/match/matchrecord/goal");
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <CategoryNav>
        <CategoryGroup>
          <GoalCategory
            to='/match/matchrecord/goal'
            selected={location.pathname === "/match/matchrecord/goal"}
          >
            득점순위
          </GoalCategory>
          <AssisCategory
            to='/match/matchrecord/assist'
            selected={location.pathname === "/match/matchrecord/assist"}
          >
            도움순위
          </AssisCategory>
          <ParticipationCategory
            to='/match/matchrecord/participation'
            selected={location.pathname === "/match/matchrecord/participation"}
          >
            선수별 출전기록
          </ParticipationCategory>
        </CategoryGroup>
      </CategoryNav>
      <Outlet />
    </>
  );
};

export default MatchRecord;

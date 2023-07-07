import {
  AssistRankBtn,
  CategoryBtnGroup,
  CategoryNav,
  GoalRankBtn,
  ParticipationRankBtn,
} from "./styled";

const MatchRecord = () => {
  return (
    <>
      <CategoryNav>
        <CategoryBtnGroup>
          <GoalRankBtn>득점순위</GoalRankBtn>
          <AssistRankBtn>도움순위</AssistRankBtn>
          <ParticipationRankBtn>선수별 출전기록</ParticipationRankBtn>
        </CategoryBtnGroup>
      </CategoryNav>
    </>
  );
};

export default MatchRecord;

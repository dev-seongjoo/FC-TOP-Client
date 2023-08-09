import { useEffect, useState } from "react";
import * as S from "./styled";
import axios from "axios";

const Goal = () => {
  // const [ranks, setRanks] = useState([]);
  const dummyData = [
    {
      rank: 1,
      name: "김성주",
      position: "ST",
      goal: 5,
      match: 5,
      goalPerMatch: 1,
    },
    {
      rank: 2,
      name: "박지성",
      position: "CDM",
      goal: 4,
      match: 6,
      goalPerMatch: 0.67,
    },
    {
      rank: 3,
      name: "황의조",
      position: "LW",
      goal: 4,
      match: 7,
      goalPerMatch: 0.57,
    },
    {
      rank: 4,
      name: "손흥민",
      position: "RW",
      goal: 3,
      match: 5,
      goalPerMatch: 0.6,
    },
    {
      rank: 5,
      name: "이승우",
      position: "LM",
      goal: 3,
      match: 6,
      goalPerMatch: 0.5,
    },
    {
      rank: 6,
      name: "이강인",
      position: "RM",
      goal: 2,
      match: 5,
      goalPerMatch: 0.4,
    },
    {
      rank: 7,
      name: "조현우",
      position: "GK",
      goal: 2,
      match: 6,
      goalPerMatch: 0.33,
    },
    {
      rank: 8,
      name: "기성용",
      position: "CAM",
      goal: 1,
      match: 5,
      goalPerMatch: 0.2,
    },
    {
      rank: 9,
      name: "김영권",
      position: "CB",
      goal: 1,
      match: 7,
      goalPerMatch: 0.14,
    },
    {
      rank: 10,
      name: "구자철",
      position: "RB",
      goal: 0,
      match: 6,
      goalPerMatch: 0,
    },
  ];

  // const fetchGoalData = async () => {
  //   const rank = await axios.get("http://localhost:4000/goalrank");
  //   setRanks(rank.data);
  // };

  // useEffect(() => {
  //   fetchGoalData();
  // }, []);

  return (
    <>
      <S.Title>득점순위</S.Title>
      <S.Container>
        <S.Select>
          <S.Option>2023</S.Option>
        </S.Select>
        <S.Table>
          <thead>
            <S.TheadTr>
              <S.RankTh>순위</S.RankTh>
              <S.NameTh>이름</S.NameTh>
              <S.PositionTh>포지션</S.PositionTh>
              <S.ScoreTh>득점</S.ScoreTh>
              <S.MatchTh>경기</S.MatchTh>
            </S.TheadTr>
          </thead>
          <tbody>
            {/* {ranks.map((rank, index) => (
              <S.TbodydTr key={index}>
                <S.RankTd>{index}</S.RankTd>
                <S.NameTd>{rank.Player.KOR_NM}</S.NameTd>
                <S.PositionTd>{rank.Player.POSITION_FIRST}</S.PositionTd>
                <S.ScoreTd>{rank.goal_count}골</S.ScoreTd>
                <S.MatchTd>{data.match}경기</S.MatchTd>
              </S.TbodydTr>
            ))} */}
          </tbody>
        </S.Table>
      </S.Container>
    </>
  );
};

export default Goal;

import * as S from "./styled";

const Participation = () => {
  const dummyData = [
    {
      name: "홍길동",
      position: "GK",
      matchNum: 10,
      subIn: 2,
      subOut: 1,
      goal: 0,
      assist: 0,
      lp: 8,
      og: 1,
    },
    {
      name: "김철수",
      position: "CB",
      matchNum: 8,
      subIn: 3,
      subOut: 4,
      goal: 1,
      assist: 2,
      lp: 0,
      og: 0,
    },
    {
      name: "박영희",
      position: "LM",
      matchNum: 9,
      subIn: 1,
      subOut: 2,
      goal: 2,
      assist: 3,
      lp: 0,
      og: 0,
    },
    {
      name: "이영호",
      position: "RM",
      matchNum: 7,
      subIn: 2,
      subOut: 3,
      goal: 0,
      assist: 1,
      lp: 0,
      og: 0,
    },
    {
      name: "김민지",
      position: "ST",
      matchNum: 6,
      subIn: 4,
      subOut: 2,
      goal: 4,
      assist: 1,
      lp: 0,
      og: 0,
    },
    {
      name: "정기철",
      position: "CDM",
      matchNum: 5,
      subIn: 3,
      subOut: 1,
      goal: 0,
      assist: 0,
      lp: 0,
      og: 0,
    },
    {
      name: "이승호",
      position: "LB",
      matchNum: 8,
      subIn: 0,
      subOut: 2,
      goal: 0,
      assist: 0,
      lp: 0,
      og: 0,
    },
    {
      name: "김지연",
      position: "RW",
      matchNum: 9,
      subIn: 1,
      subOut: 0,
      goal: 1,
      assist: 3,
      lp: 0,
      og: 0,
    },
    {
      name: "박성준",
      position: "CAM",
      matchNum: 7,
      subIn: 1,
      subOut: 3,
      goal: 3,
      assist: 0,
      lp: 0,
      og: 0,
    },
    {
      name: "이나라",
      position: "LW",
      matchNum: 6,
      subIn: 2,
      subOut: 1,
      goal: 1,
      assist: 1,
      lp: 0,
      og: 0,
    },
  ];

  return (
    <>
      <S.Title>선수별 출전기록</S.Title>
      <S.Container>
        <S.Select>
          <S.Option>2023</S.Option>
        </S.Select>
        <S.Table>
          <thead>
            <S.TheadTr>
              <S.NameTh>이름</S.NameTh>
              <S.PositionTh>포지션</S.PositionTh>
              <S.MatchNumTh>경기</S.MatchNumTh>
              <S.GoalTh>득점</S.GoalTh>
              <S.AssistTh>도움</S.AssistTh>
              <S.LpTh>실점</S.LpTh>
            </S.TheadTr>
          </thead>
          <tbody>
            {dummyData.map((data, index) => (
              <S.TbodyTr key={index}>
                <S.NameTd>
                  <S.ProfileGroup>
                    <S.ProfileName>{data.name}</S.ProfileName>
                  </S.ProfileGroup>
                </S.NameTd>
                <S.PositionTd>{data.position}</S.PositionTd>
                <S.MatchNumTd>{data.matchNum}경기</S.MatchNumTd>
                <S.GoalTd>{data.goal}득점</S.GoalTd>
                <S.AssistTd>{data.assist}도움</S.AssistTd>
                <S.LpTd>{data.lp}실점</S.LpTd>
              </S.TbodyTr>
            ))}
          </tbody>
        </S.Table>
      </S.Container>
    </>
  );
};

export default Participation;

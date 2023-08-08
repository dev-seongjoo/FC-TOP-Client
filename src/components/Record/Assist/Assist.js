import * as S from "./styled";

const Assist = () => {
  const dummyData = [
    {
      rank: 1,
      name: "김성주",
      position: "ST",
      assist: 5,
      match: 5,
      assistPerMatch: 1,
    },
    {
      rank: 2,
      name: "박지성",
      position: "CDM",
      assist: 4,
      match: 6,
      assistPerMatch: 0.67,
    },
    {
      rank: 3,
      name: "황의조",
      position: "LW",
      assist: 4,
      match: 7,
      assistPerMatch: 0.57,
    },
    {
      rank: 4,
      name: "손흥민",
      position: "RW",
      assist: 3,
      match: 5,
      assistPerMatch: 0.6,
    },
    {
      rank: 5,
      name: "이승우",
      position: "LM",
      assist: 3,
      match: 6,
      assistPerMatch: 0.5,
    },
    {
      rank: 6,
      name: "이강인",
      position: "RM",
      assist: 2,
      match: 5,
      assistPerMatch: 0.4,
    },
    {
      rank: 7,
      name: "조현우",
      position: "GK",
      assist: 2,
      match: 6,
      assistPerMatch: 0.33,
    },
    {
      rank: 8,
      name: "기성용",
      position: "CAM",
      assist: 1,
      match: 5,
      assistPerMatch: 0.2,
    },
    {
      rank: 9,
      name: "김영권",
      position: "CB",
      assist: 1,
      match: 7,
      assistPerMatch: 0.14,
    },
    {
      rank: 10,
      name: "구자철",
      position: "RB",
      assist: 0,
      match: 6,
      assistPerMatch: 0,
    },
  ];

  return (
    <>
      <S.Title>도움순위</S.Title>
      <S.Container>
        <S.Select>
          <S.Option>2023</S.Option>
        </S.Select>
        <S.Table>
          <thead>
            <S.TheadTr>
              <S.RankTh>순위</S.RankTh>
              <S.NameTh>선수 이름</S.NameTh>
              <S.PositionTh>포지션</S.PositionTh>
              <S.ScoreTh>도움</S.ScoreTh>
              <S.MatchTh>경기</S.MatchTh>
            </S.TheadTr>
          </thead>
          <tbody>
            {dummyData.map((data, index) => (
              <S.TbodydTr key={index}>
                <S.RankTd>{data.rank}</S.RankTd>
                <S.NameTd>
                  <S.ProfileGroup>
                    <S.ProfileName>{data.name}</S.ProfileName>
                  </S.ProfileGroup>
                </S.NameTd>
                <S.PositionTd>{data.position}</S.PositionTd>
                <S.ScoreTd>{data.assist}도움</S.ScoreTd>
                <S.MatchTd>{data.match}경기</S.MatchTd>
              </S.TbodydTr>
            ))}
          </tbody>
        </S.Table>
      </S.Container>
    </>
  );
};

export default Assist;

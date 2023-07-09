import {
  Title,
  Container,
  Option,
  Select,
  Table,
  TheadTr,
  RankTh,
  NameTh,
  ScoreTh,
  MatchTh,
  ScorePerMatchTh,
  TbodydTr,
  RankTd,
  NameTd,
  ScoreTd,
  MatchTd,
  ScorePerMatchTd,
  ProfileImg,
  ProfileName,
  ProfileGroup,
  PositionTd,
  PositionTh,
} from "./styled";

import ProfileBasicImg from "../../../../assets/basic-profile.jpg";

const Assist = () => {
  const dummyData = [
    {
      rank: 1,
      name: "김성주",
      position: "ST",
      assist: 5,
      match: 5,
      assistPerMatch: 1,
      img: ProfileBasicImg,
    },
    {
      rank: 2,
      name: "박지성",
      position: "CDM",
      assist: 4,
      match: 6,
      assistPerMatch: 0.67,
      img: ProfileBasicImg,
    },
    {
      rank: 3,
      name: "황의조",
      position: "LW",
      assist: 4,
      match: 7,
      assistPerMatch: 0.57,
      img: ProfileBasicImg,
    },
    {
      rank: 4,
      name: "손흥민",
      position: "RW",
      assist: 3,
      match: 5,
      assistPerMatch: 0.6,
      img: ProfileBasicImg,
    },
    {
      rank: 5,
      name: "이승우",
      position: "LM",
      assist: 3,
      match: 6,
      assistPerMatch: 0.5,
      img: ProfileBasicImg,
    },
    {
      rank: 6,
      name: "이강인",
      position: "RM",
      assist: 2,
      match: 5,
      assistPerMatch: 0.4,
      img: ProfileBasicImg,
    },
    {
      rank: 7,
      name: "조현우",
      position: "GK",
      assist: 2,
      match: 6,
      assistPerMatch: 0.33,
      img: ProfileBasicImg,
    },
    {
      rank: 8,
      name: "기성용",
      position: "CAM",
      assist: 1,
      match: 5,
      assistPerMatch: 0.2,
      img: ProfileBasicImg,
    },
    {
      rank: 9,
      name: "김영권",
      position: "CB",
      assist: 1,
      match: 7,
      assistPerMatch: 0.14,
      img: ProfileBasicImg,
    },
    {
      rank: 10,
      name: "구자철",
      position: "RB",
      assist: 0,
      match: 6,
      assistPerMatch: 0,
      img: ProfileBasicImg,
    },
  ];

  return (
    <>
      <Title>도움순위</Title>
      <Container>
        <Select>
          <Option>2023</Option>
        </Select>
        <Table>
          <thead>
            <TheadTr>
              <RankTh>순위</RankTh>
              <NameTh>선수 이름</NameTh>
              <PositionTh>포지션</PositionTh>
              <ScoreTh>득점</ScoreTh>
              <MatchTh>경기</MatchTh>
              <ScorePerMatchTh>경기당 득점</ScorePerMatchTh>
            </TheadTr>
          </thead>
          <tbody>
            {dummyData.map((data) => (
              <TbodydTr>
                <RankTd>{data.rank}</RankTd>
                <NameTd>
                  <ProfileGroup>
                    <ProfileImg src={data.img} />
                    <ProfileName>{data.name}</ProfileName>
                  </ProfileGroup>
                </NameTd>
                <PositionTd>{data.position}</PositionTd>
                <ScoreTd>{data.assist}도움</ScoreTd>
                <MatchTd>{data.match}경기</MatchTd>
                <ScorePerMatchTd>
                  경기당 {data.assistPerMatch} 도움
                </ScorePerMatchTd>
              </TbodydTr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Assist;

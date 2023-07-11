import {
  AssistTd,
  AssistTh,
  Container,
  GoalTd,
  GoalTh,
  LpTd,
  LpTh,
  MatchNumTd,
  MatchNumTh,
  NameTd,
  NameTh,
  OgTd,
  OgTh,
  Option,
  PositionTd,
  PositionTh,
  ProfileGroup,
  ProfileImg,
  ProfileName,
  Select,
  SubInTd,
  SubInTh,
  SubOutTd,
  SubOutTh,
  Table,
  TbodydTr,
  TheadTr,
  Title,
} from "./styled";

import ProfileBasicImg from "../../../../assets/basic-profile.jpg";

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
      <Title>선수별 출전기록</Title>
      <Container>
        <Select>
          <Option>2023</Option>
        </Select>
        <Table>
          <thead>
            <TheadTr>
              <NameTh>이름</NameTh>
              <PositionTh>포지션</PositionTh>
              <MatchNumTh>경기</MatchNumTh>
              <GoalTh>득점</GoalTh>
              <AssistTh>도움</AssistTh>
              <LpTh>실점</LpTh>
              <OgTh>자책</OgTh>
            </TheadTr>
          </thead>
          <tbody>
            {dummyData.map((data) => (
              <TbodydTr>
                <NameTd>
                  <ProfileGroup>
                    <ProfileImg src={ProfileBasicImg} />
                    <ProfileName>{data.name}</ProfileName>
                  </ProfileGroup>
                </NameTd>
                <PositionTd>{data.position}</PositionTd>
                <MatchNumTd>{data.matchNum}경기</MatchNumTd>
                <GoalTd>{data.goal}득점</GoalTd>
                <AssistTd>{data.assist}도움</AssistTd>
                <LpTd>{data.lp}실점</LpTd>
                <OgTd>{data.og}자책</OgTd>
              </TbodydTr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Participation;

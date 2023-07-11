import React, { useState } from "react";
import {
  Title,
  Container,
  Option,
  Select,
  TheadTr,
  MatchDateTh,
  OpponentTh,
  TbodyTr,
  MatchDateTd,
  OpponentTd,
  VotingTd,
  VotingTh,
  QuaterTh,
  QuaterTd,
  MainTable,
  SubTable,
  ExpandBtn,
  ParticipationTimeTd,
  ParticipationTimeTh,
  PersonalGoalTh,
  PersonalAssistTh,
  PersonalGoalTd,
  PersonalAssistTd,
  SubTheadTr,
  SubTbodyTr,
  LpTh,
  OgTh,
  LpTd,
  OgTd,
  PositionTh,
  PositionTd,
} from "./styled";

const MyRecord = () => {
  const [expandedRows, setExpandedRows] = useState([]);

  const handleExpandClick = (id) => {
    const currentIndex = expandedRows.indexOf(id);
    const newExpandedRows = [...expandedRows];

    if (currentIndex === -1) {
      newExpandedRows.push(id);
    } else {
      newExpandedRows.splice(currentIndex, 1);
    }

    setExpandedRows(newExpandedRows);
  };

  const dummyData = [
    {
      id: 1,
      matchDate: "2023/07/01",
      opponent: "FC AAA",
      voting: "참석",
      attendanceLimit: "06:30",
      attendanceTime: "06:27",
      attendanceStatus: "출석",
    },
    {
      id: 2,
      matchDate: "2023/07/08",
      opponent: "FC BBB",
      voting: "불참석",
      attendanceLimit: "06:30",
      attendanceTime: "정보 없음",
      attendanceStatus: "인정 결석",
    },
    {
      id: 3,
      matchDate: "2023/07/15",
      opponent: "FC CCC",
      voting: "참석",
      attendanceLimit: "06:30",
      attendanceTime: "06:33",
      attendanceStatus: "무단 지각",
    },
    {
      id: 4,
      matchDate: "2023/07/22",
      opponent: "FC DDD",
      voting: "참석",
      attendanceLimit: "06:30",
      attendanceTime: "정보 없음",
      attendanceStatus: "무단 결석",
    },
    {
      id: 5,
      matchDate: "2023/07/29",
      opponent: "FC EEE",
      voting: "참석",
      attendanceLimit: "06:30",
      attendanceTime: "07:00",
      attendanceStatus: "인정 지각",
    },
  ];

  return (
    <Container>
      <Title>경기 기록</Title>
      <Select>
        <Option>2023</Option>
      </Select>
      <MainTable>
        <thead>
          <TheadTr>
            <MatchDateTh>경기 일자</MatchDateTh>
            <OpponentTh>상대팀</OpponentTh>
            <VotingTh>자세히 보기</VotingTh>
          </TheadTr>
        </thead>
        <tbody>
          {dummyData.map((data) => (
            <>
              <TbodyTr key={data.id}>
                <MatchDateTd>{data.matchDate}</MatchDateTd>
                <OpponentTd>{data.opponent}</OpponentTd>
                <VotingTd>
                  <ExpandBtn
                    className='material-symbols-outlined'
                    onClick={() => handleExpandClick(data.id)}
                  >
                    {expandedRows.includes(data.id)
                      ? "expand_less"
                      : "expand_more"}
                  </ExpandBtn>
                </VotingTd>
              </TbodyTr>
              {expandedRows.includes(data.id) && (
                <TbodyTr>
                  <td colSpan={3}>
                    <SubTable>
                      <thead>
                        <SubTheadTr>
                          <QuaterTh>쿼터</QuaterTh>
                          <PositionTh>포지션</PositionTh>
                          <ParticipationTimeTh>출전 시간</ParticipationTimeTh>
                          <PersonalGoalTh>득점</PersonalGoalTh>
                          <PersonalAssistTh>도움</PersonalAssistTh>
                          <LpTh>실점</LpTh>
                          <OgTh>자책</OgTh>
                        </SubTheadTr>
                      </thead>
                      <tbody>
                        <SubTbodyTr>
                          <QuaterTd>1Q</QuaterTd>
                          <PositionTd>LW</PositionTd>
                          <ParticipationTimeTd>22분</ParticipationTimeTd>

                          <PersonalGoalTd>1득점</PersonalGoalTd>
                          <PersonalAssistTd>0도움</PersonalAssistTd>
                          <LpTd>0</LpTd>
                          <OgTd>0</OgTd>
                        </SubTbodyTr>
                        <SubTbodyTr>
                          <QuaterTd>2Q</QuaterTd>
                          <PositionTd>미출전</PositionTd>
                          <ParticipationTimeTd>미출전</ParticipationTimeTd>

                          <PersonalGoalTd>미출전</PersonalGoalTd>
                          <PersonalAssistTd>미출전</PersonalAssistTd>
                          <LpTd>미출전</LpTd>
                          <OgTd>미출전</OgTd>
                        </SubTbodyTr>
                        <SubTbodyTr>
                          <QuaterTd>3Q</QuaterTd>
                          <PositionTd>LW</PositionTd>
                          <ParticipationTimeTd>23분</ParticipationTimeTd>

                          <PersonalGoalTd>1득점</PersonalGoalTd>
                          <PersonalAssistTd>1도움</PersonalAssistTd>
                          <LpTd>0</LpTd>
                          <OgTd>0</OgTd>
                        </SubTbodyTr>
                        <SubTbodyTr>
                          <QuaterTd>4Q</QuaterTd>
                          <PositionTd>미출전</PositionTd>
                          <ParticipationTimeTd>미출전</ParticipationTimeTd>

                          <PersonalGoalTd>미출전</PersonalGoalTd>
                          <PersonalAssistTd>미출전</PersonalAssistTd>
                          <LpTd>미출전</LpTd>
                          <OgTd>미출전</OgTd>
                        </SubTbodyTr>
                        <SubTbodyTr>
                          <QuaterTd>5Q</QuaterTd>
                          <PositionTd>LW</PositionTd>
                          <ParticipationTimeTd>20분</ParticipationTimeTd>

                          <PersonalGoalTd>0득점</PersonalGoalTd>
                          <PersonalAssistTd>0도움</PersonalAssistTd>
                          <LpTd>0</LpTd>
                          <OgTd>0</OgTd>
                        </SubTbodyTr>
                        <SubTbodyTr>
                          <QuaterTd>6Q</QuaterTd>
                          <PositionTd>LW</PositionTd>
                          <ParticipationTimeTd>5분</ParticipationTimeTd>

                          <PersonalGoalTd>0득점</PersonalGoalTd>
                          <PersonalAssistTd>2도움</PersonalAssistTd>
                          <LpTd>0</LpTd>
                          <OgTd>0</OgTd>
                        </SubTbodyTr>
                      </tbody>
                    </SubTable>
                  </td>
                </TbodyTr>
              )}
            </>
          ))}
        </tbody>
      </MainTable>
    </Container>
  );
};

export default MyRecord;

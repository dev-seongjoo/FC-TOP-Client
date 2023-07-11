import React from "react";
import {
  Title,
  Container,
  Option,
  Select,
  Table,
  TheadTr,
  MatchDateTh,
  OpponentTh,
  AttendanceLimitTh,
  AttendanceTimeTh,
  AttendanceStatusTh,
  TbodydTr,
  MatchDateTd,
  OpponentTd,
  AttendanceLimitTd,
  AttendanceTimeTd,
  AttendanceStatusTd,
  VotingTd,
  VotingTh,
} from "./styled";

const MyAttendance = () => {
  const dummyData = [
    {
      matchDate: "2023/07/01",
      opponent: "FC AAA",
      voting: "참석",
      attendanceLimit: "06:30",
      attendanceTime: "06:27",
      attendanceStatus: "출석",
    },
    {
      matchDate: "2023/07/08",
      opponent: "FC BBB",
      voting: "불참석",
      attendanceLimit: "06:30",
      attendanceTime: "정보 없음",
      attendanceStatus: "인정 결석",
    },
    {
      matchDate: "2023/07/15",
      opponent: "FC CCC",
      voting: "참석",
      attendanceLimit: "06:30",
      attendanceTime: "06:33",
      attendanceStatus: "무단 지각",
    },
    {
      matchDate: "2023/07/22",
      opponent: "FC DDD",
      voting: "참석",
      attendanceLimit: "06:30",
      attendanceTime: "정보 없음",
      attendanceStatus: "무단 결석",
    },
    {
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
      <Title>출석</Title>
      <Select>
        <Option>2023</Option>
      </Select>
      <Table>
        <thead>
          <TheadTr>
            <MatchDateTh>경기 일자</MatchDateTh>
            <OpponentTh>상대팀</OpponentTh>
            <VotingTh>투표</VotingTh>
            <AttendanceLimitTh>출석 제한 시간</AttendanceLimitTh>
            <AttendanceTimeTh>출석 시간</AttendanceTimeTh>
            <AttendanceStatusTh>출석 상태</AttendanceStatusTh>
          </TheadTr>
        </thead>
        <tbody>
          {dummyData.map((data) => (
            <TbodydTr>
              <MatchDateTd>{data.matchDate}</MatchDateTd>
              <OpponentTd>{data.opponent}</OpponentTd>
              <VotingTd>{data.voting}</VotingTd>
              <AttendanceLimitTd>{data.attendanceLimit}</AttendanceLimitTd>
              <AttendanceTimeTd>{data.attendanceTime}</AttendanceTimeTd>
              <AttendanceStatusTd>{data.attendanceStatus}</AttendanceStatusTd>
            </TbodydTr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyAttendance;

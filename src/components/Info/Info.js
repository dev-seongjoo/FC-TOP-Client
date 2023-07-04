import React from "react";
import {
  Attendance,
  Year,
  TitleRow,
  CardRow,
  Card,
  CardGroup,
  CardTitle,
  Container,
  Title,
  CardSearch,
  AttendanceTitle,
  AttendanceDetail,
  AttendanceContent,
  AttendanceScore,
  AttendanceScoreDetail,
  AttendanceGroup,
  AttendanceDetailGroup,
  AttendanceDetailKey,
} from "./styled";

const Info = ({ name }) => {
  const attendance = {
    A: 18,
    UL: 2,
    UA: 0,
    OL: 1,
  };

  const score =
    attendance.A * 3 +
    attendance.UL * -1 +
    attendance.UA * -2 +
    attendance.OL * 0;

  return (
    <Container>
      <Title>{name}님의 TOP</Title>
      <CardRow>
        <CardGroup>
          <TitleRow>
            <CardTitle>{name}님의 출석</CardTitle>
            <CardSearch>자세히 보기</CardSearch>
          </TitleRow>
          <Card>
            <Attendance>
              <Year>2023 시즌</Year>
              <AttendanceGroup>
                <AttendanceContent>
                  <AttendanceTitle>나의 출석 현황</AttendanceTitle>
                  <AttendanceDetailGroup>
                    <AttendanceDetail>
                      <AttendanceDetailKey>참석:</AttendanceDetailKey>
                      {`${attendance.A}회`}
                    </AttendanceDetail>
                    <AttendanceDetail>
                      <AttendanceDetailKey>무단지각:</AttendanceDetailKey>
                      {`${attendance.UL}회`}
                    </AttendanceDetail>
                    <AttendanceDetail>
                      <AttendanceDetailKey>무단결석:</AttendanceDetailKey>
                      {`${attendance.UA}회`}
                    </AttendanceDetail>
                    <AttendanceDetail>
                      <AttendanceDetailKey>결석:</AttendanceDetailKey>
                      {`${attendance.OL}회`}
                    </AttendanceDetail>
                  </AttendanceDetailGroup>
                </AttendanceContent>
                <AttendanceScore>
                  <AttendanceTitle>나의 출석 점수</AttendanceTitle>
                  <AttendanceScoreDetail>{score}점</AttendanceScoreDetail>
                </AttendanceScore>
              </AttendanceGroup>
            </Attendance>
          </Card>
        </CardGroup>
        <CardGroup>
          <TitleRow>
            <CardTitle>{name}님의 경기 기록</CardTitle>
            <CardSearch>자세히 보기</CardSearch>
          </TitleRow>
          <Card>
            <Attendance>
              <Year>2023 시즌</Year>
            </Attendance>
          </Card>
        </CardGroup>
      </CardRow>
    </Container>
  );
};

export default Info;

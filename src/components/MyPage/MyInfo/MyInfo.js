import React from "react";
import {
  Year,
  TitleRow,
  CardRow,
  Card,
  CardGroup,
  CardTitle,
  Container,
  Title,
  CardSearch,
  Info,
  InfoTitle,
  InfoGroup,
  InfoContent,
  InfoDetailGroup,
  InfoDetail,
  InfoDetailKey,
  InfoBigChar,
} from "./styled";

const MyInfo = ({ name }) => {
  const attendance = {
    A: 18,
    UL: 2,
    UA: 0,
    AL: 1,
  };

  const score =
    attendance.A * 3 +
    attendance.UL * -1 +
    attendance.UA * -2 +
    attendance.AL * 0;

  return (
    <Container>
      <Title>김성주님의 TOP</Title>
      <CardRow>
        <CardGroup>
          <TitleRow>
            <CardTitle>김성주님의 출석</CardTitle>
            <CardSearch>자세히 보기</CardSearch>
          </TitleRow>
          <Card>
            <Info>
              <Year>2023 시즌</Year>
              <InfoGroup>
                <InfoContent>
                  <InfoTitle>출석 현황</InfoTitle>
                  <InfoDetailGroup>
                    <InfoDetail>
                      <InfoDetailKey>참석:</InfoDetailKey>
                      {`${attendance.A}회`}
                    </InfoDetail>
                    <InfoDetail>
                      <InfoDetailKey>무단지각:</InfoDetailKey>
                      {`${attendance.UL}회`}
                    </InfoDetail>
                    <InfoDetail>
                      <InfoDetailKey>무단결석:</InfoDetailKey>
                      {`${attendance.UA}회`}
                    </InfoDetail>
                    <InfoDetail>
                      <InfoDetailKey>결석:</InfoDetailKey>
                      {`${attendance.AL}회`}
                    </InfoDetail>
                  </InfoDetailGroup>
                </InfoContent>
                <InfoContent>
                  <InfoTitle>출석 점수</InfoTitle>
                  <InfoBigChar>{score}점</InfoBigChar>
                </InfoContent>
              </InfoGroup>
            </Info>
          </Card>
        </CardGroup>
        <CardGroup>
          <TitleRow>
            <CardTitle>김성주님의 경기 기록</CardTitle>
            <CardSearch>자세히 보기</CardSearch>
          </TitleRow>
          <Card>
            <Info>
              <Year>2023 시즌</Year>
              <InfoGroup>
                <InfoContent>
                  <InfoTitle>출전</InfoTitle>
                  <InfoBigChar>30경기</InfoBigChar>
                </InfoContent>
                <InfoContent>
                  <InfoTitle>득점</InfoTitle>
                  <InfoBigChar>5골</InfoBigChar>
                </InfoContent>
                <InfoContent>
                  <InfoTitle>도움</InfoTitle>
                  <InfoBigChar>5도움</InfoBigChar>
                </InfoContent>
              </InfoGroup>
            </Info>
          </Card>
        </CardGroup>
      </CardRow>
    </Container>
  );
};

export default MyInfo;

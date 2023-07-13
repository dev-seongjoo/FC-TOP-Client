import Navbar from "../../components/Navbar/Navbar";
import {
  AwayTeam,
  BtnGroup,
  Container,
  DateContainer,
  HomeTeam,
  HorizontalLine,
  MatchBox,
  MatchCalendar,
  MatchDate,
  MatchPlace,
  MatchTime,
  Month,
  Option,
  RecordBtn,
  Round,
  Select,
  TeamGroup,
  Title,
  Versus,
  VersusGroup,
  VideoBtn,
  VoteBtn,
  Year,
} from "./styled";

const SchedulePage = () => {
  const Matches = [
    {
      id: 1,
      time: "07:00",
      date: "2023.07.11",
      location: "운정체육공원",
      opponent: "AA",
    },
    {
      id: 2,
      time: "07:00",
      date: "2023.07.12",
      location: "운정건강공원",
      opponent: "BBBB",
    },
    {
      id: 3,
      time: "07:00",
      date: "2023.07.13",
      location: "교하체육공원",
      opponent: "CC",
    },
    {
      id: 4,
      time: "07:00",
      date: "2023.07.14",
      location: "금촌체육공원",
      opponent: "DDD",
    },
    {
      id: 5,
      time: "07:00",
      date: "2023.07.15",
      location: "고양 아람누리",
      opponent: "EEEEEEEE",
    },
    {
      id: 6,
      time: "07:00",
      date: "2023.07.16",
      location: "파주스타디움 보조구장",
      opponent: "FFFF",
    },
    {
      id: 7,
      time: "07:00",
      date: "2023.07.17",
      location: "운정체육공원",
      opponent: "GG",
      notYet: true,
    },
    {
      id: 8,
      time: "07:00",
      date: "2023.07.18",
      location: "금촌체육공원",
      opponent: "HHHHHHHHHH",
      notYet: true,
    },
    {
      id: 9,
      time: "07:00",
      date: "2023.07.19",
      location: "교하체육공원",
      opponent: "IIIIII",
      notYet: true,
    },
    {
      id: 10,
      time: "07:00",
      date: "2023.07.20",
      location: "운정건강공원",
      opponent: "JJJJ",
      notYet: true,
    },
  ];

  return (
    <>
      <Navbar />
      <Title>일정/결과</Title>
      <HorizontalLine />
      <Container>
        <DateContainer>
          <Select>
            <Option value='2023'>2023</Option>
          </Select>
          <Year>년</Year>
          <Select>
            <Option value='1'>1</Option>
            <Option value='2'>2</Option>
            <Option value='3'>3</Option>
            <Option value='4'>4</Option>
            <Option value='5'>5</Option>
            <Option value='6'>6</Option>
            <Option value='7'>7</Option>
            <Option value='8'>8</Option>
            <Option value='9'>9</Option>
            <Option value='10'>10</Option>
            <Option value='11'>11</Option>
            <Option value='12'>12</Option>
          </Select>
          <Month>월</Month>
        </DateContainer>
        {Matches.map((match) => (
          <MatchBox key={match.id}>
            <MatchCalendar>
              <MatchTime>{match.time}</MatchTime>
              <MatchDate>{match.date}</MatchDate>
              <MatchPlace>{match.location}</MatchPlace>
            </MatchCalendar>
            <TeamGroup>
              <HomeTeam>FC TOP</HomeTeam>
              <VersusGroup>
                <Versus>VS</Versus>
                <Round>{match.id}R</Round>
              </VersusGroup>
              <AwayTeam>{match.opponent}</AwayTeam>
            </TeamGroup>
            {match.notYet ? (
              <VoteBtn>투표</VoteBtn>
            ) : (
              <BtnGroup>
                <RecordBtn>경기 기록</RecordBtn>
                <VideoBtn>경기 영상</VideoBtn>
              </BtnGroup>
            )}
          </MatchBox>
        ))}
      </Container>
    </>
  );
};

export default SchedulePage;

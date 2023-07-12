import {
  AwayTeam,
  Container,
  Date,
  HomeTeam,
  Location,
  ScoreGroup,
  SearchBtn,
  Title,
  TitleRow,
  Versus,
} from "./styled";

const FutureMatch = () => {
  return (
    <Container>
      <TitleRow>
        <Title>다음 경기 일정</Title>
        <SearchBtn className='material-symbols-outlined'>
          arrow_circle_right
        </SearchBtn>
      </TitleRow>
      <Date>2023.07.15(토) 07:00</Date>
      <Location>운정체육공원</Location>
      <ScoreGroup>
        <HomeTeam>FC TOP</HomeTeam>
        <Versus>VS</Versus>
        <AwayTeam>R.egend FC</AwayTeam>
      </ScoreGroup>
    </Container>
  );
};

export default FutureMatch;

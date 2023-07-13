import {
  AwayTeam,
  Container,
  Date,
  HomeTeam,
  Location,
  ScoreGroup,
  SearachBtnGroup,
  SearchBtnLeft,
  SearchBtnRight,
  Title,
  TitleRow,
  Versus,
  VotingBtn,
} from "./styled";

const FutureMatch = () => {
  return (
    <Container>
      <TitleRow>
        <Title>다음 경기</Title>
        <SearachBtnGroup>
          <SearchBtnLeft className='material-symbols-outlined'>
            arrow_circle_left
          </SearchBtnLeft>
          <SearchBtnRight className='material-symbols-outlined'>
            arrow_circle_right
          </SearchBtnRight>
        </SearachBtnGroup>
      </TitleRow>
      <Date>2023.07.15(토) 07:00</Date>
      <Location>운정체육공원</Location>
      <ScoreGroup>
        <HomeTeam>FC TOP</HomeTeam>
        <Versus>VS</Versus>
        <AwayTeam>R.egend FC</AwayTeam>
        <VotingBtn>투표</VotingBtn>
      </ScoreGroup>
    </Container>
  );
};

export default FutureMatch;

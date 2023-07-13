import {
  AwayScore,
  AwayTeam,
  AwayTeamGroup,
  Container,
  Date,
  HomeScore,
  HomeTeam,
  HomeTeamGroup,
  ScoreGroup,
  SearchBtn,
  Title,
  TitleRow,
  Versus,
} from "./styled";

const PastMatch = () => {
  return (
    <Container>
      <TitleRow>
        <Title>지난 경기</Title>
        <SearchBtn>자세히 보기</SearchBtn>
      </TitleRow>
      <Date>2023.07.08(토)</Date>
      <ScoreGroup>
        <HomeTeamGroup>
          <HomeTeam>FC TOP</HomeTeam>
          <HomeScore>2</HomeScore>
        </HomeTeamGroup>
        <Versus>VS</Versus>
        <AwayTeamGroup>
          <AwayScore>0</AwayScore>
          <AwayTeam>R.egend FC</AwayTeam>
        </AwayTeamGroup>
      </ScoreGroup>
    </Container>
  );
};

export default PastMatch;

<span class='material-symbols-outlined'>arrow_circle_right</span>;

import {
  BlackTr,
  Container,
  NameTd,
  NameTh,
  PointTd,
  PointTh,
  RankTd,
  RankTh,
  SearachBtnGroup,
  SearchBtnLeft,
  SearchBtnRight,
  SubTitle,
  Table,
  Tbody,
  TbodyTr,
  Thead,
  TheadTr,
  Title,
  TitleRow,
} from "./styled";

const PersonalRank = () => {
  return (
    <Container>
      <TitleRow>
        <Title>개인 순위</Title>
        <SearachBtnGroup>
          <SearchBtnLeft className='material-symbols-outlined'>
            arrow_circle_left
          </SearchBtnLeft>
          <SearchBtnRight className='material-symbols-outlined'>
            arrow_circle_right
          </SearchBtnRight>
        </SearachBtnGroup>
      </TitleRow>
      <SubTitle>출석</SubTitle>
      <Table>
        <Thead>
          <TheadTr>
            <RankTh>순위</RankTh>
            <NameTh>이름</NameTh>
            <PointTh>점수</PointTh>
          </TheadTr>
        </Thead>
        <Tbody>
          <BlackTr />
          <TbodyTr>
            <RankTd>1위</RankTd>
            <NameTd>김성주</NameTd>
            <PointTd>99점</PointTd>
          </TbodyTr>
          <TbodyTr>
            <RankTd>2위</RankTd>
            <NameTd>이용혁</NameTd>
            <PointTd>88점</PointTd>
          </TbodyTr>
          <TbodyTr>
            <RankTd>3위</RankTd>
            <NameTd>최병관</NameTd>
            <PointTd>77점</PointTd>
          </TbodyTr>
          <TbodyTr>
            <RankTd>4위</RankTd>
            <NameTd>김준경</NameTd>
            <PointTd>66점</PointTd>
          </TbodyTr>
          <TbodyTr>
            <RankTd>5위</RankTd>
            <NameTd>홍철의</NameTd>
            <PointTd>55점</PointTd>
          </TbodyTr>
        </Tbody>
      </Table>
    </Container>
  );
};

export default PersonalRank;

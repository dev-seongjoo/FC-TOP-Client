import {
  Container,
  FooterDetailGroup,
  FooterInfoGroup,
  FooterContainer,
  FooterMapGroup,
  Info,
  Title,
  TeamName,
  Leader,
  CopyRight,
  FooterGroup,
  FooterInfo,
  Logo,
} from "./styled";

import logo from "../../../assets/fc-top.png";

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <FooterGroup>
          <FooterMapGroup>
            <FooterDetailGroup>
              <Title>공지사항</Title>
              <Info>전체 공지</Info>
              <Info>팀 공지</Info>
              <Info>감독 공지</Info>
              <Info>회계 공지</Info>
            </FooterDetailGroup>
            <FooterDetailGroup>
              <Title>경기</Title>
              <Info>경기 일정</Info>
              <Info>개인 순위</Info>
            </FooterDetailGroup>
            <FooterDetailGroup>
              <Title>선수단</Title>
              <Info>ALL</Info>
              <Info>FW</Info>
              <Info>MF</Info>
              <Info>DF</Info>
              <Info>GK</Info>
            </FooterDetailGroup>
          </FooterMapGroup>
          <FooterInfoGroup>
            <FooterInfo>
              <TeamName>FC TOP</TeamName>
              <Leader>클럽장: 이용혁</Leader>
              <CopyRight>Copyright ⓒ FC TOP All Rights Reserved.</CopyRight>
            </FooterInfo>
            <Logo src={logo} />
          </FooterInfoGroup>
        </FooterGroup>
      </FooterContainer>
    </Container>
  );
};

export default Footer;

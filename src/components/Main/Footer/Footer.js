import * as S from "./styled";
import logo from "../../../assets/fc-top.png";

const Footer = () => {
  return (
    <S.Container>
      <S.FooterContainer>
        <S.FooterGroup>
          <S.FooterMapGroup>
            <S.FooterDetailGroup>
              <S.Title>공지사항</S.Title>
              <S.Info>전체 공지</S.Info>
              <S.Info>팀 공지</S.Info>
              <S.Info>감독 공지</S.Info>
              <S.Info>회계 공지</S.Info>
            </S.FooterDetailGroup>
            <S.FooterDetailGroup>
              <S.Title>경기</S.Title>
              <S.Info>경기 일정</S.Info>
              <S.Info>개인 순위</S.Info>
            </S.FooterDetailGroup>
            <S.FooterDetailGroup>
              <S.Title>선수단</S.Title>
              <S.Info>ALL</S.Info>
              <S.Info>FW</S.Info>
              <S.Info>MF</S.Info>
              <S.Info>DF</S.Info>
              <S.Info>GK</S.Info>
            </S.FooterDetailGroup>
          </S.FooterMapGroup>
          <S.FooterInfoGroup>
            <S.FooterInfo>
              <S.TeamName>FC TOP</S.TeamName>
              <S.Leader>클럽장: 이용혁</S.Leader>
              <S.CopyRight>Copyright ⓒ FC TOP All Rights Reserved.</S.CopyRight>
            </S.FooterInfo>
            <S.Logo src={logo} />
          </S.FooterInfoGroup>
        </S.FooterGroup>
      </S.FooterContainer>
    </S.Container>
  );
};

export default Footer;

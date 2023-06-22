import React from "react";
import * as S from "./styled";

const Login = () => {
  return (
    <form>
      <S.Container>
        <S.Title>로그인</S.Title>
        <S.Content>
          <S.Label>핸드폰</S.Label>
          <S.CellPhoneInput
            type='text'
            placeholder="핸드폰 번호 입력 ('-' 제외 11자리 입력)"
          />
          <S.Label>비밀번호</S.Label>
          <S.PasswordInput type='password' placeholder='비밀번호 입력' />
        </S.Content>
        <S.LoginBtn>로그인</S.LoginBtn>
        <S.StyledLink to='/'>홈으로 돌아가기</S.StyledLink>
        <S.StyledLink to='/signUp'>아직 가입하지 않으셨나요?</S.StyledLink>
      </S.Container>
    </form>
  );
};

export default Login;

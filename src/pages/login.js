import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Content = styled.div``;

const Label = styled.label`
  display: block;
  margin: 10px 0;
  font-size: 0.9rem;
  font-weight: 600;
`;

const CellPhoneInput = styled.input`
  width: 400px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

const PasswordInput = styled.input`
  width: 400px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const LoginBtn = styled.button`
  width: 420px;
  height: 50px;
  color: white;
  background-color: #c70101;
  border-radius: 30px;
  border: none;
  margin-top: 10px;
`;

const LinkGroup = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 10px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
`;

// const ToSignUp = styled.span``;

const Login = () => {
  return (
    <form>
      <Container>
        <Title>로그인</Title>
        <Content>
          <Label>핸드폰</Label>
          <CellPhoneInput
            type='text'
            placeholder="핸드폰 번호 입력 ('-' 제외 11자리 입력)"
          />
          <Label>비밀번호</Label>
          <PasswordInput type='password' placeholder='비밀번호 입력' />
        </Content>
        <LoginBtn>로그인</LoginBtn>
        <StyledLink to='/'>홈으로 돌아가기</StyledLink>
        <StyledLink to='/signUp'>아직 가입하지 않으셨나요?</StyledLink>
      </Container>
    </form>
  );
};

export default Login;

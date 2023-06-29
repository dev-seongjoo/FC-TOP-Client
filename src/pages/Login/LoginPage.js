import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isNumber, setIsNumber] = useState(true);

  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  const numberRegex = /^[0-9]*$/;

  const handlePhoneChange = (event) => {
    const inputValue = event.target.value.trim();
    if (numberRegex.test(inputValue)) {
      setIsNumber(true);
      setPhone(inputValue);
    } else {
      setIsNumber(false);
    }
  };

  const handlePasswordChange = (event) => {
    const inputValue = event.target.value.trim();
    setPassword(inputValue);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (phone === "") {
      alert("핸드폰 번호를 입력해주세요.");
      phoneRef.current.focus();
      return;
    }

    if (phone.length !== 11) {
      setIsNumber(true);
      alert("핸드폰 번호는 '-'제외 11자리를 입력해야 합니다.");
      phoneRef.current.focus();
      return;
    }

    if (password === "") {
      alert("비밀번호를 입력해주세요.");
      passwordRef.current.focus();
      return;
    }

    setIsNumber(true);

    axios
      .post("http://localhost:4000/login", { phone, password })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("핸드폰 번호 또는 비밀번호가 옳지 않습니다.");
        return;
      });
  };

  return (
    <form>
      <S.Container>
        <S.Title>로그인</S.Title>
        <S.Content>
          <S.LabelGroup>
            <S.Label htmlFor='phone'>핸드폰</S.Label>
            {!isNumber && <S.ErrorMsg>숫자만 입력 가능합니다.</S.ErrorMsg>}
          </S.LabelGroup>
          <S.PhoneInput
            id='phone'
            type='text'
            value={phone}
            ref={phoneRef}
            placeholder="핸드폰 번호 입력 ('-' 제외 11자리 입력)"
            onChange={handlePhoneChange}
          />
          <S.Label htmlFor='password'>비밀번호</S.Label>
          <S.PasswordInput
            id='password'
            type='password'
            value={password}
            ref={passwordRef}
            placeholder='비밀번호 입력'
            onChange={handlePasswordChange}
          />
        </S.Content>
        <S.LoginBtn onClick={handleLogin}>로그인</S.LoginBtn>
        <S.StyledLink to='/'>홈으로 돌아가기</S.StyledLink>
        <S.StyledLink to='/signUp'>아직 가입하지 않으셨나요?</S.StyledLink>
      </S.Container>
    </form>
  );
};

export default LoginPage;

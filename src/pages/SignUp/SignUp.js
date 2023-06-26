import { useState } from "react";
import * as S from "./styled";
import axios from "axios";

const SignUp = () => {
  const [korLastName, setKorLastName] = useState("");
  const [korFirstName, setKorFirstName] = useState("");
  const [engLastName, setEngLastName] = useState("");
  const [engFirstName, setEngFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [cellPhoneAuth, setCellPhoneAuth] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [roadName, setRoadName] = useState("");
  const [year, setYear] = useState("출생 연도");
  const [month, setMonth] = useState("월");
  const [day, setDay] = useState("일");
  const [preferPositionFirst, setPreferPositionFirst] = useState("");
  const [preferPositionSecond, setPreferPositionSecond] = useState("");
  const [preferPositionThird, setPreferPositionThird] = useState("");
  const [preferFoot, setPreferFoot] = useState("선택");

  const handleKorLastNameChange = (event) => {
    const inputValue = event.target.value.trim();
    setKorLastName(inputValue);
    console.log(inputValue);
  };

  const handleKorFirstNameChange = (event) => {
    const inputValue = event.target.value.trim();
    setKorFirstName(inputValue);
    console.log(inputValue);
  };

  const handleEngLastNameChange = (event) => {
    const inputValue = event.target.value;
    setEngLastName(inputValue);
    console.log(inputValue);
  };

  const handleEngFirstNameChange = (event) => {
    const inputValue = event.target.value;
    setEngFirstName(inputValue);
    console.log(inputValue);
  };

  const handlePasswordChange = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
    console.log(inputValue);
  };

  const handlePasswordCheckChange = (event) => {
    const inputValue = event.target.value;
    setPasswordCheck(inputValue);
    console.log(inputValue);
  };

  const handleCellPhoneChange = (event) => {
    setCellPhone(event.target.value);
    console.log(event.target.value);
  };

  const handleCellPhoneAuthChange = (event) => {
    setCellPhoneAuth(event.target.value);
    console.log(event.target.value);
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
    console.log(event.target.value);
  };

  const handleRoadNameAddressChange = (event) => {
    setRoadName(event.target.value);
    console.log(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    console.log(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
    console.log(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
    console.log(event.target.value);
  };

  const handlePreferPositionFirstChange = (event) => {
    setPreferPositionFirst(event.target.value);
    console.log(event.target.value);
  };

  const handlePreferPositionSecondChange = (event) => {
    setPreferPositionSecond(event.target.value);
    console.log(event.target.value);
  };

  const handlePreferPositionThirdChange = (event) => {
    setPreferPositionThird(event.target.value);
    console.log(event.target.value);
  };

  const handlePreferFootChange = (event) => {
    setPreferFoot(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/signUp", option)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const option = {
    korLastName,
    korFirstName,
    engLastName,
    engFirstName,
    password,
    cellPhone,
    zipCode,
    address: roadName,
    year,
    month,
    day,
    preferPositionFirst,
    preferPositionSecond,
    preferPositionThird,
    preferFoot,
  };

  const today = new Date();
  const endYear = today.getFullYear();
  const startYear = endYear - 60;
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  const startMonth = 1;
  const endMonth = 12;
  const months = [];
  for (let month = startMonth; month <= endMonth; month++) {
    months.push(month);
  }

  const startDay = 1;
  const endDay = 31;
  const days = [];
  for (let day = startDay; day <= endDay; day++) {
    days.push(day);
  }

  const positions = [
    { value: "FW", label: "----------FW----------", disabled: true },
    { value: "ST", label: "ST" },
    { value: "LW", label: "LW" },
    { value: "RW", label: "RW" },
    { value: "MF", label: "----------MF----------", disabled: true },
    { value: "CAM", label: "CAM" },
    { value: "CDM", label: "CDM" },
    { value: "LM", label: "LM" },
    { value: "RM", label: "RM" },
    { value: "DF", label: "----------DF----------", disabled: true },
    { value: "CB", label: "CB" },
    { value: "LB", label: "LB" },
    { value: "RB", label: "RB" },
    { value: "GK", label: "----------GK----------", disabled: true },
    { value: "GK", label: "GK" },
  ];

  const isPasswordLengthValid = password.length >= 8;
  const isPasswordEngValid = /[a-zA-Z]/.test(password);
  const isPasswordNumValid = /\d/.test(password);
  const isPasswordSlValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isPasswordCheckValid = () => {
    return password === passwordCheck;
  };
  return (
    <form onSubmit={handleSubmit}>
      <S.Container>
        <S.Title>회원가입</S.Title>
        <S.Content>
          <S.Label htmlFor='KoreanLastName'>이름(한글)</S.Label>
          <S.LastNameInput
            onChange={handleKorLastNameChange}
            id='KoreanLastName'
            type='text'
            placeholder='성'
            required
          />
          <S.FirstNameInput
            onChange={handleKorFirstNameChange}
            id='KoreanFirstName'
            type='text'
            placeholder='이름'
            required
          />
          <S.Label htmlFor='EnglishLastName'>이름(영어)</S.Label>
          <S.LastNameInput
            onChange={handleEngLastNameChange}
            id='EnglishLastName'
            type='text'
            placeholder='last name'
            required
          />
          <S.FirstNameInput
            onChange={handleEngFirstNameChange}
            id='EnglishFirstName'
            type='text'
            placeholder='first name'
            required
          />
          <S.PasswordLabel>
            <S.Label htmlFor='Password'>비밀번호</S.Label>
            <S.PasswordCondition>
              조건:
              <span style={{ color: isPasswordLengthValid ? "blue" : "red" }}>
                8자리 이상
              </span>
              ,
              <span style={{ color: isPasswordEngValid ? "blue" : "red" }}>
                영문
              </span>
              ,
              <span style={{ color: isPasswordNumValid ? "blue" : "red" }}>
                숫자
              </span>
              ,
              <span style={{ color: isPasswordSlValid ? "blue" : "red" }}>
                특수문자
              </span>
              의 조합으로 구성
            </S.PasswordCondition>
          </S.PasswordLabel>
          <S.PasswordInput
            onChange={handlePasswordChange}
            id='Password'
            type='password'
            placeholder='비밀번호 입력'
            required
          />
          <S.PasswordLabel>
            <S.Label htmlFor='CheckPassword'>비밀번호 확인</S.Label>
            <S.PasswordCondition>
              {isPasswordCheckValid() ? (
                <span style={{ color: "blue" }}>비밀번호가 일치합니다.</span>
              ) : (
                <span style={{ color: "red" }}>
                  비밀번호가 일치하지 않습니다.
                </span>
              )}
            </S.PasswordCondition>
          </S.PasswordLabel>
          <S.PasswordInput
            onChange={handlePasswordCheckChange}
            id='CheckPassword'
            type='password'
            placeholder='비밀번호 재입력'
            required
          />
          <S.Label htmlFor='cellPhone'>핸드폰</S.Label>
          <S.CellPhone>
            <S.CellPhoneInput
              onChange={handleCellPhoneChange}
              id='cellPhone'
              type='text'
              placeholder="핸드폰 번호 입력 ('-' 제외 11자리 입력)"
              required
            />
            <S.CellPhoneBtn>인증번호 전송</S.CellPhoneBtn>
          </S.CellPhone>
          <S.CellPhoneAuth>
            <S.CellPhoneAuthInput
              onChange={handleCellPhoneAuthChange}
              type='text'
              placeholder='인증번호 입력'
            />
            <S.CellPhoneAuthBtn>인증번호 확인</S.CellPhoneAuthBtn>
          </S.CellPhoneAuth>
          <S.Label htmlFor='address'>주소</S.Label>
          <S.ZipCode>
            <S.ZipCodeInput
              type='text'
              placeholder='우편번호 입력'
              onChange={handleZipCodeChange}
            />
            <S.ZipCodeSearchBtn>우편번호 찾기</S.ZipCodeSearchBtn>
          </S.ZipCode>
          <S.RoadNameAddress
            type='text'
            placeholder='도로명주소 입력 (읍,면,동 까지만)'
            onChange={handleRoadNameAddressChange}
          />
          <S.Label>생년월일</S.Label>
          <S.Select onChange={handleYearChange}>
            <S.Option>출생 연도</S.Option>
            {years.map((year) => (
              <S.Option key={year} value={year}>
                {year}
              </S.Option>
            ))}
          </S.Select>
          <S.Select onChange={handleMonthChange}>
            <S.Option>월</S.Option>
            {months.map((month) => (
              <S.Option key={month} value={month}>
                {month}
              </S.Option>
            ))}
          </S.Select>
          <S.Select onChange={handleDayChange}>
            <S.Option>일</S.Option>
            {days.map((day) => (
              <S.Option key={day} value={day}>
                {day}
              </S.Option>
            ))}
          </S.Select>
          <S.Label>선호 포지션</S.Label>
          <S.Select onChange={handlePreferPositionFirstChange}>
            <S.Option>1순위</S.Option>
            {positions.map((position) => (
              <S.Option
                value={position.value}
                key={position.label}
                disabled={position.disabled}
              >
                {position.label}
              </S.Option>
            ))}
          </S.Select>
          <S.Select onChange={handlePreferPositionSecondChange}>
            <S.Option>2순위</S.Option>
            {positions.map((position) => (
              <S.Option
                value={position.value}
                key={position.label}
                disabled={position.disabled}
              >
                {position.label}
              </S.Option>
            ))}
          </S.Select>
          <S.Select onChange={handlePreferPositionThirdChange}>
            <S.Option>3순위</S.Option>
            {positions.map((position) => (
              <S.Option
                value={position.value}
                key={position.label}
                disabled={position.disabled}
              >
                {position.label}
              </S.Option>
            ))}
          </S.Select>
          <S.Label>주발</S.Label>
          <S.Select onChange={handlePreferFootChange}>
            <S.Option>선택</S.Option>
            <S.Option value='left'>왼발</S.Option>
            <S.Option value='right'>오른발</S.Option>
            <S.Option value='both'>양발</S.Option>
          </S.Select>
        </S.Content>
        <S.SignUpBtn type='submit'>회원가입</S.SignUpBtn>
        <S.StyledLink to='/'>홈으로 돌아가기</S.StyledLink>
        <S.StyledLink to='/login'>이미 가입하셨나요?</S.StyledLink>
      </S.Container>
    </form>
  );
};

export default SignUp;

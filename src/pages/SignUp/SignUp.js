import { useState } from "react";
import * as S from "./styled";

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

  const handleKorLastNameChange = (event) => {
    setKorLastName(event.target.value);
    console.log(event.target.value);
  };

  const handleKorFirstNameChange = (event) => {
    setKorFirstName(event.target.value);
    console.log(event.target.value);
  };

  const handleEngLastNameChange = (event) => {
    setEngLastName(event.target.value);
    console.log(event.target.value);
  };

  const handleEngFirstNameChange = (event) => {
    setEngFirstName(event.target.value);
    console.log(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const handlePasswordCheckChange = (event) => {
    setPasswordCheck(event.target.value);
    console.log(event.target.value);
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

  const handleSubmit = (event) => {
    event.preventDefault();
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
    { value: "FW", label: "FW", disabled: true },
    { value: "ST", label: "ST" },
    { value: "CF", label: "CF" },
    { value: "LW", label: "LW" },
    { value: "RW", label: "RW" },
    { value: "MF", label: "MF", disabled: true },
    { value: "CAM", label: "CAM" },
    { value: "CM", label: "CM" },
    { value: "CDM", label: "CDM" },
    { value: "LM", label: "LM" },
    { value: "RM", label: "RM" },
    { value: "DF", label: "DF", disabled: true },
    { value: "CB", label: "CB" },
    { value: "LB", label: "LB" },
    { value: "RB", label: "RB" },
    { value: "GK", label: "GK", disabled: true },
    { value: "GK", label: "GK" },
  ];

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
              조건: 최소 8자리 이상, 영문, 숫자, 특수문자의 조합으로 구성
            </S.PasswordCondition>
          </S.PasswordLabel>
          <S.PasswordInput
            onChange={handlePasswordChange}
            id='Password'
            type='password'
            placeholder='비밀번호 입력'
            required
          />
          <S.Label htmlFor='CheckPassword'>비밀번호 확인</S.Label>
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
          <S.Select>
            <S.Option value=''>출생 연도</S.Option>
            {years.map((year) => (
              <S.Option key={year} value={year}>
                {year}
              </S.Option>
            ))}
          </S.Select>
          <S.Select>
            <S.Option value=''>월</S.Option>
            {months.map((month) => (
              <S.Option key={month} value={month}>
                {month}
              </S.Option>
            ))}
          </S.Select>
          <S.Select>
            <S.Option value=''>일</S.Option>
            {days.map((day) => (
              <S.Option key={day} value={day}>
                {day}
              </S.Option>
            ))}
          </S.Select>

          <S.Label>선호 포지션</S.Label>
          {[1, 2, 3].map((rank) => (
            <S.Select key={rank}>
              <S.Option selected disabled>
                {rank}순위
              </S.Option>
              {positions.map((position) => (
                <S.Option
                  key={position.value}
                  value={position.value}
                  disabled={position.disabled}
                >
                  {position.label}
                </S.Option>
              ))}
            </S.Select>
          ))}
          {/* <S.Select>
            <S.Option disabled>1순위</S.Option>
            <S.Option disabled>FW</S.Option>
            <S.Option>ST</S.Option>
            <S.Option>CF</S.Option>
            <S.Option>LW</S.Option>
            <S.Option>RW</S.Option>
            <S.Option disabled>MF</S.Option>
            <S.Option>CAM</S.Option>
            <S.Option>CM</S.Option>
            <S.Option>CDM</S.Option>
            <S.Option>LM</S.Option>
            <S.Option>RM</S.Option>
            <S.Option disabled>DF</S.Option>
            <S.Option>CB</S.Option>
            <S.Option>LB</S.Option>
            <S.Option>RB</S.Option>
            <S.Option disabled>GK</S.Option>
            <S.Option>GK</S.Option>
          </S.Select>
          <S.Select>
            <S.Option value=''>2순위</S.Option>
            <S.Option disabled>FW</S.Option>
            <S.Option>ST</S.Option>
            <S.Option>CF</S.Option>
            <S.Option>LW</S.Option>
            <S.Option>RW</S.Option>
            <S.Option disabled>MF</S.Option>
            <S.Option>CAM</S.Option>
            <S.Option>CM</S.Option>
            <S.Option>CDM</S.Option>
            <S.Option>LM</S.Option>
            <S.Option>RM</S.Option>
            <S.Option disabled>DF</S.Option>
            <S.Option>CB</S.Option>
            <S.Option>LB</S.Option>
            <S.Option>RB</S.Option>
            <S.Option disabled>GK</S.Option>
            <S.Option>GK</S.Option>
          </S.Select>
          <S.Select>
            <S.Option value=''>3순위</S.Option>
            <S.Option disabled>FW</S.Option>
            <S.Option>ST</S.Option>
            <S.Option>CF</S.Option>
            <S.Option>LW</S.Option>
            <S.Option>RW</S.Option>
            <S.Option disabled>MF</S.Option>
            <S.Option>CAM</S.Option>
            <S.Option>CM</S.Option>
            <S.Option>CDM</S.Option>
            <S.Option>LM</S.Option>
            <S.Option>RM</S.Option>
            <S.Option disabled>DF</S.Option>
            <S.Option>CB</S.Option>
            <S.Option>LB</S.Option>
            <S.Option>RB</S.Option>
            <S.Option disabled>GK</S.Option>
            <S.Option>GK</S.Option>
          </S.Select> */}
          <S.Label>주발</S.Label>
          <S.Select>
            <S.Option value=''>선택</S.Option>
            <S.Option value=''>왼발</S.Option>
            <S.Option value=''>오른발</S.Option>
            <S.Option value=''>양발</S.Option>
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

import { useEffect, useState, useRef } from "react";
import * as S from "./styled";
import Modal from "../../components/Modal/Modal";
import DaumPostcode from "react-daum-postcode";

import axios from "axios";

const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [korLastName, setKorLastName] = useState("");
  const [korFirstName, setKorFirstName] = useState("");
  const [engLastName, setEngLastName] = useState("");
  const [engFirstName, setEngFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phone, setPhone] = useState("");
  const [inputAuthCode, setInputAuthCode] = useState("");
  const [sentAuthCode, setSentAuthCode] = useState("");
  const [authCodeVerification, setAuthCodeVerification] = useState(false);
  const [postCode, setPostCode] = useState("");
  const [address, setAddress] = useState("");
  const [year, setYear] = useState("출생 연도");
  const [month, setMonth] = useState("월");
  const [day, setDay] = useState("일");
  const [preferPositionFirst, setPreferPositionFirst] = useState("");
  const [preferPositionSecond, setPreferPositionSecond] = useState("");
  const [preferPositionThird, setPreferPositionThird] = useState("");
  const [preferFoot, setPreferFoot] = useState("선택");

  const [isSent, setIsSent] = useState(false);
  const [timer, setTimer] = useState(180);

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

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    console.log(event.target.value);
  };

  const handleInputAuthCodeChange = (event) => {
    setInputAuthCode(event.target.value);
    console.log(event.target.value);
  };

  const handlePostCodeChange = (event) => {
    setPostCode(event.target.value);
    console.log(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
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

  function generateRandomCode(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
      str += Math.floor(Math.random() * 10);
    }
    return str;
  }

  const handleSendPhoneAuthenticationNumber = (event) => {
    event.preventDefault();
    if (phone === "") {
      alert("핸드폰 번호를 입력해주세요.");
      return;
    } else if (phone.length !== 11) {
      alert("핸드폰 번호가 올바르지 않습니다.");
      return;
    }
    const authCode = generateRandomCode(4);
    axios
      .post(`http://localhost:4000/sms`, {
        phone,
        authCode,
      })
      .then((res) => {
        if (res.status === 200) {
          setIsSent(true);
          setTimer(180);
          setSentAuthCode(authCode);
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
    alert("인증 번호가 전송되었습니다.");
  };

  const handleVerifyPhoneAuthenticationNumber = (event) => {
    event.preventDefault();
    if (inputAuthCode === sentAuthCode) {
      alert("인증이 완료되었습니다.");
      setTimer(0);
      return setAuthCodeVerification(true);
    } else {
      alert("인증 번호가 일치하지 않습니다.");
    }
  };

  const handleAddressSearchClick = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleAddressSearchComplete = (data) => {
    setPostCode(data.zonecode);
    setAddress(data.address);
    setIsModalOpen(false);
  };

  const handleCloseModal = (event) => {
    event.preventDefault();
    setIsModalOpen(false);
  };

  useEffect(() => {
    let interval;
    if (isSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isSent, timer]);

  const option = {
    korLastName,
    korFirstName,
    engLastName,
    engFirstName,
    password,
    phone,
    postCode,
    address,
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
          <S.Label htmlFor='phone'>핸드폰</S.Label>
          <S.Phone>
            <S.PhoneInput
              onChange={handlePhoneChange}
              id='phone'
              type='text'
              placeholder="핸드폰 번호 입력 ('-' 제외 11자리 입력)"
              disabled={isSent}
            />
            <S.PhoneBtn
              onClick={handleSendPhoneAuthenticationNumber}
              disabled={authCodeVerification}
            >
              {isSent ? "인증번호 재전송" : "인증번호 전송"}
            </S.PhoneBtn>
          </S.Phone>
          <S.PhoneAuth>
            <S.PhoneInputTimer>
              <S.PhoneAuthInput
                onChange={handleInputAuthCodeChange}
                type='text'
                placeholder='인증번호 입력'
                disabled={!isSent || timer === 0 || authCodeVerification}
              />
              {isSent && timer > 0 && (
                <S.PhoneAuthTimer>
                  {`${Math.floor(timer / 60)}:${(timer % 60)
                    .toString()
                    .padStart(2, "0")}`}
                </S.PhoneAuthTimer>
              )}
            </S.PhoneInputTimer>
            <S.PhoneAuthBtn
              onClick={handleVerifyPhoneAuthenticationNumber}
              disabled={!isSent || timer === 0 || authCodeVerification}
            >
              인증번호 확인
            </S.PhoneAuthBtn>
          </S.PhoneAuth>
          <S.Label htmlFor='address'>주소</S.Label>
          <S.PostCode>
            <S.PostCodeInput
              type='text'
              placeholder='우편번호 입력'
              value={postCode}
              onChange={handlePostCodeChange}
            />
            <S.PostCodeSearchBtn onClick={handleAddressSearchClick}>
              우편번호 찾기
            </S.PostCodeSearchBtn>
          </S.PostCode>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <DaumPostcode onComplete={handleAddressSearchComplete} />
          </Modal>
          <S.Address
            type='text'
            placeholder='주소 입력'
            value={address}
            onChange={handleAddressChange}
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

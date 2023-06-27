import { useEffect, useState, useRef } from "react";
import * as S from "./styled";
import Modal from "../../components/Modal/Modal";
import DaumPostcode from "react-daum-postcode";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { generateRandomCode } from "../../utils/generateRandomCode";

const SignUp = () => {
  const navigate = useNavigate();

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
  const [preferPositionFirst, setPreferPositionFirst] = useState("1순위");
  const [preferPositionSecond, setPreferPositionSecond] = useState("2순위");
  const [preferPositionThird, setPreferPositionThird] = useState("3순위");
  const [preferFoot, setPreferFoot] = useState("선택");

  const [isSent, setIsSent] = useState(false);
  const [timer, setTimer] = useState(180);

  const korLastNameRef = useRef(null);
  const korFirstNameRef = useRef(null);
  const engLastNameRef = useRef(null);
  const engFirstNameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordCheckRef = useRef(null);
  const phoneRef = useRef(null);
  const yearRef = useRef(null);
  const monthRef = useRef(null);
  const dayRef = useRef(null);
  const positionFirstRef = useRef(null);
  const positionSecondRef = useRef(null);
  const positionThirdRef = useRef(null);
  const footRef = useRef(null);

  const isPasswordLengthValid = password.length >= 8;
  const isPasswordEngValid = /[a-zA-Z]/.test(password);
  const isPasswordNumValid = /\d/.test(password);
  const isPasswordSlValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isPasswordCheckValid = () => {
    return password === passwordCheck;
  };

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

  const handleKorLastNameChange = (event) => {
    const inputValue = event.target.value.trim();
    setKorLastName(inputValue);
  };

  const handleKorFirstNameChange = (event) => {
    const inputValue = event.target.value.trim();
    setKorFirstName(inputValue);
  };

  const handleEngLastNameChange = (event) => {
    const inputValue = event.target.value.trim();
    setEngLastName(inputValue);
  };

  const handleEngFirstNameChange = (event) => {
    const inputValue = event.target.value.trim();
    setEngFirstName(inputValue);
  };

  const handlePasswordChange = (event) => {
    const inputValue = event.target.value.trim();
    setPassword(inputValue);
  };

  const handlePasswordCheckChange = (event) => {
    const inputValue = event.target.value.trim();
    setPasswordCheck(inputValue);
  };

  const handlePhoneChange = (event) => {
    const inputValue = event.target.value.trim();
    setPhone(inputValue);
  };

  const handleInputAuthCodeChange = (event) => {
    const inputValue = event.target.value.trim();
    setInputAuthCode(inputValue);
  };

  const handleYearChange = (event) => {
    const inputValue = event.target.value.trim();
    setYear(inputValue);
  };

  const handleMonthChange = (event) => {
    const inputValue = event.target.value.trim();
    setMonth(inputValue);
  };

  const handleDayChange = (event) => {
    const inputValue = event.target.value.trim();
    setDay(inputValue);
  };

  const handlePreferPositionFirstChange = (event) => {
    const inputValue = event.target.value.trim();
    setPreferPositionFirst(inputValue);
  };

  const handlePreferPositionSecondChange = (event) => {
    const inputValue = event.target.value.trim();
    setPreferPositionSecond(inputValue);
  };

  const handlePreferPositionThirdChange = (event) => {
    const inputValue = event.target.value.trim();
    setPreferPositionThird(inputValue);
  };

  const handlePreferFootChange = (event) => {
    const inputValue = event.target.value.trim();
    setPreferFoot(inputValue);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    if (korLastName === "") {
      alert("성(한글)을 입력해 주세요.");
      korLastNameRef.current.focus();
      return;
    }

    if (korFirstName === "") {
      alert("이름(한글)을 입력해 주세요.");
      korFirstNameRef.current.focus();
      return;
    }

    if (engLastName === "") {
      alert("성(영문)을 입력해 주세요.");
      engLastNameRef.current.focus();
      return;
    }

    if (engFirstName === "") {
      alert("이름(영문)을 입력해 주세요.");
      engFirstNameRef.current.focus();
      return;
    }

    if (!isPasswordLengthValid) {
      alert("비밀번호는 8자리 이상이어야 합니다.");
      passwordRef.current.focus();
      return;
    } else if (!isPasswordEngValid) {
      alert("비밀번호는 영문이 포함되어야 합니다.");
      passwordRef.current.focus();
      return;
    } else if (!isPasswordNumValid) {
      alert("비밀번호는 숫자가 포함되어야 합니다.");
      passwordRef.current.focus();
      return;
    } else if (!isPasswordSlValid) {
      alert("비밀번호는 특수문자가 포함되어야 합니다.");
      passwordRef.current.focus();
      return;
    }

    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      passwordCheckRef.current.focus();
      return;
    }

    if (!authCodeVerification) {
      alert("핸드폰 인증을 완료해 주세요.");
      phoneRef.current.focus();
      return;
    }

    if (postCode === "" || address === "") {
      alert("우편번호 및 주소를 입력해 주세요.");

      const btn = document.querySelector(".addressSearchBtn");
      btn.classList.add("highlight-animation");

      setTimeout(() => {
        btn.classList.remove("highlight-animation");
      }, 1000);

      return;
    }

    if (year === "출생 연도") {
      alert("생년월일(출생 연도)을 선택해 주세요.");
      yearRef.current.focus();
      return;
    }

    if (month === "월") {
      alert("생년월일(월)을 선택해 주세요.");
      monthRef.current.focus();
      return;
    }

    if (day === "일") {
      alert("생년월일(일)을 선택해 주세요.");
      dayRef.current.focus();
      return;
    }

    if (preferPositionFirst === "1순위") {
      alert("선호 포지션 1순위를 선택해 주세요.");
      positionFirstRef.current.focus();
      return;
    }

    if (preferPositionSecond === "2순위") {
      alert("선호 포지션 2순위를 선택해 주세요.");
      positionSecondRef.current.focus();
      return;
    }

    if (preferPositionThird === "3순위") {
      alert("선호 포지션 3순위를 선택해 주세요.");
      positionThirdRef.current.focus();
      return;
    }

    if (preferPositionFirst === preferPositionSecond) {
      alert("선호 포지션은 중복 선택할 수 없습니다.");
      positionSecondRef.current.focus();
      return;
    }

    if (preferPositionFirst === preferPositionThird) {
      alert("선호 포지션은 중복 선택할 수 없습니다.");
      positionThirdRef.current.focus();
      return;
    }

    if (preferPositionSecond === preferPositionThird) {
      alert("선호 포지션은 중복 선택할 수 없습니다.");
      positionThirdRef.current.focus();
      return;
    }

    if (preferFoot === "선택") {
      alert("주발을 선택해주세요.");
      footRef.current.focus();
      return;
    }

    axios
      .post("http://localhost:4000/signUp", option)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    alert("회원가입이 완료되었습니다.");
    navigate("/");
  };

  const handlephoneInputResetClick = (event) => {
    event.preventDefault();
    setIsSent(false);
    setTimer(0);
    phoneRef.current.focus();
  };

  const handleSendPhoneAuthenticationNumber = (event) => {
    event.preventDefault();
    if (phone.length !== 11) {
      alert("핸드폰 번호가 올바르지 않습니다. ('-' 제외 11자리 입력)");
      phoneRef.current.focus();
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

  const today = new Date();
  const startYear = today.getFullYear();
  const endYear = startYear - 60;
  const years = [];
  for (let year = startYear; year >= endYear; year--) {
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

  return (
    <form onSubmit={handleSignUp}>
      <S.Container>
        <S.Title>회원가입</S.Title>
        <S.Content>
          <S.Label htmlFor='KorLastName'>이름(한글)</S.Label>
          <S.LastNameInput
            onChange={handleKorLastNameChange}
            id='KorLastName'
            type='text'
            placeholder='성'
            value={korLastName}
            ref={korLastNameRef}
          />
          <S.FirstNameInput
            onChange={handleKorFirstNameChange}
            id='KorFirstName'
            type='text'
            placeholder='이름'
            value={korFirstName}
            ref={korFirstNameRef}
          />
          <S.LabelGroup>
            <S.Label htmlFor='EnglishLastName'>이름(영문)</S.Label>
            <S.Msg>공백 없이 입력</S.Msg>
          </S.LabelGroup>
          <S.LastNameInput
            onChange={handleEngLastNameChange}
            id='EnglishLastName'
            type='text'
            placeholder='last name'
            value={engLastName}
            ref={engLastNameRef}
          />
          <S.FirstNameInput
            onChange={handleEngFirstNameChange}
            id='EnglishFirstName'
            type='text'
            placeholder='first name'
            value={engFirstName}
            ref={engFirstNameRef}
          />
          <S.LabelGroup>
            <S.Label htmlFor='Password'>비밀번호</S.Label>
            <S.Msg>
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
            </S.Msg>
          </S.LabelGroup>
          <S.PasswordInput
            onChange={handlePasswordChange}
            id='Password'
            type='password'
            placeholder='비밀번호 입력'
            value={password}
            ref={passwordRef}
          />
          <S.LabelGroup>
            <S.Label htmlFor='CheckPassword'>비밀번호 확인</S.Label>
            <S.Msg>
              {isPasswordCheckValid() ? (
                <span style={{ color: "blue" }}>비밀번호가 일치합니다.</span>
              ) : (
                <span style={{ color: "red" }}>
                  비밀번호가 일치하지 않습니다.
                </span>
              )}
            </S.Msg>
          </S.LabelGroup>
          <S.PasswordInput
            onChange={handlePasswordCheckChange}
            id='CheckPassword'
            type='password'
            placeholder='비밀번호 재입력'
            value={passwordCheck}
            ref={passwordCheckRef}
          />
          <S.LabelGroup>
            <S.Label htmlFor='phone'>핸드폰</S.Label>
            {isSent && !authCodeVerification && (
              <S.ResetMsg onClick={handlephoneInputResetClick}>
                핸드폰 번호 재입력
              </S.ResetMsg>
            )}
          </S.LabelGroup>
          <S.Phone>
            <S.PhoneInput
              onChange={handlePhoneChange}
              id='phone'
              type='text'
              placeholder="핸드폰 번호 입력 ('-' 제외 11자리 입력)"
              value={phone}
              ref={phoneRef}
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
            <S.PhoneInputWithTimer>
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
            </S.PhoneInputWithTimer>
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
              disabled
            />
            <S.PostCodeSearchBtn
              className='addressSearchBtn'
              onClick={handleAddressSearchClick}
            >
              우편번호 찾기
            </S.PostCodeSearchBtn>
          </S.PostCode>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <DaumPostcode onComplete={handleAddressSearchComplete} />
          </Modal>
          <S.Address
            type='text'
            placeholder='주소 입력 (상세 주소 제외)'
            value={address}
            disabled
          />
          <S.Label>생년월일</S.Label>
          <S.Select onChange={handleYearChange} ref={yearRef}>
            <S.Option>출생 연도</S.Option>
            {years.map((year) => (
              <S.Option key={year} value={year}>
                {year}
              </S.Option>
            ))}
          </S.Select>
          <S.Select onChange={handleMonthChange} ref={monthRef}>
            <S.Option>월</S.Option>
            {months.map((month) => (
              <S.Option key={month} value={month}>
                {month}
              </S.Option>
            ))}
          </S.Select>
          <S.Select onChange={handleDayChange} ref={dayRef}>
            <S.Option>일</S.Option>
            {days.map((day) => (
              <S.Option key={day} value={day}>
                {day}
              </S.Option>
            ))}
          </S.Select>
          <S.Label>선호 포지션</S.Label>
          <S.Select
            onChange={handlePreferPositionFirstChange}
            ref={positionFirstRef}
          >
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
          <S.Select
            onChange={handlePreferPositionSecondChange}
            ref={positionSecondRef}
          >
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
          <S.Select
            onChange={handlePreferPositionThirdChange}
            ref={positionThirdRef}
          >
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
          <S.Select onChange={handlePreferFootChange} ref={footRef}>
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

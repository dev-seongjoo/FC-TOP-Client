// export const handleSignUp = (event) => {
//   event.preventDefault();
//   if (korLastName === "") {
//     alert("성(한글)을 입력해 주세요.");
//     korLastNameRef.current.focus();
//     return;
//   }

//   if (korFirstName === "") {
//     alert("이름(한글)을 입력해 주세요.");
//     korFirstNameRef.current.focus();
//     return;
//   }

//   if (engLastName === "") {
//     alert("성(영문)을 입력해 주세요.");
//     engLastNameRef.current.focus();
//     return;
//   }

//   if (engFirstName === "") {
//     alert("이름(영문)을 입력해 주세요.");
//     engFirstNameRef.current.focus();
//     return;
//   }

//   if (!isPasswordLengthValid) {
//     alert("비밀번호는 8자리 이상이어야 합니다.");
//     passwordRef.current.focus();
//     return;
//   } else if (!isPasswordEngValid) {
//     alert("비밀번호는 영문이 포함되어야 합니다.");
//     passwordRef.current.focus();
//     return;
//   } else if (!isPasswordNumValid) {
//     alert("비밀번호는 숫자가 포함되어야 합니다.");
//     passwordRef.current.focus();
//     return;
//   } else if (!isPasswordSlValid) {
//     alert("비밀번호는 특수문자가 포함되어야 합니다.");
//     passwordRef.current.focus();
//     return;
//   }

//   if (password !== passwordCheck) {
//     alert("비밀번호가 일치하지 않습니다.");
//     passwordCheckRef.current.focus();
//     return;
//   }

//   if (!authCodeVerification) {
//     alert("핸드폰 인증을 완료해 주세요.");
//     phoneRef.current.focus();
//     return;
//   }

//   if (postCode === "" || address === "") {
//     alert("우편번호 및 주소를 입력해 주세요.");

//     const btn = document.querySelector(".addressSearchBtn");
//     btn.classList.add("highlight-animation");

//     setTimeout(() => {
//       btn.classList.remove("highlight-animation");
//     }, 1000);

//     return;
//   }

//   if (year === "출생 연도") {
//     alert("생년월일(출생 연도)을 선택해 주세요.");
//     yearRef.current.focus();
//     return;
//   }

//   if (month === "월") {
//     alert("생년월일(월)을 선택해 주세요.");
//     monthRef.current.focus();
//     return;
//   }

//   if (day === "일") {
//     alert("생년월일(일)을 선택해 주세요.");
//     dayRef.current.focus();
//     return;
//   }

//   if (preferPositionFirst === "1순위") {
//     alert("선호 포지션 1순위를 선택해 주세요.");
//     positionFirstRef.current.focus();
//     return;
//   }

//   if (preferPositionSecond === "2순위") {
//     alert("선호 포지션 2순위를 선택해 주세요.");
//     positionSecondRef.current.focus();
//     return;
//   }

//   if (preferPositionThird === "3순위") {
//     alert("선호 포지션 3순위를 선택해 주세요.");
//     positionThirdRef.current.focus();
//     return;
//   }

//   if (preferPositionFirst === preferPositionSecond) {
//     alert("선호 포지션은 중복 선택할 수 없습니다.");
//     positionSecondRef.current.focus();
//     return;
//   }

//   if (preferPositionFirst === preferPositionThird) {
//     alert("선호 포지션은 중복 선택할 수 없습니다.");
//     positionThirdRef.current.focus();
//     return;
//   }

//   if (preferPositionSecond === preferPositionThird) {
//     alert("선호 포지션은 중복 선택할 수 없습니다.");
//     positionThirdRef.current.focus();
//     return;
//   }

//   if (preferFoot === "선택") {
//     alert("주발을 선택해주세요.");
//     footRef.current.focus();
//     return;
//   }

//   axios
//     .post("http://localhost:4000/signUp", option)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

//   alert("회원가입이 완료되었습니다.");
//   navigate("/");
// };

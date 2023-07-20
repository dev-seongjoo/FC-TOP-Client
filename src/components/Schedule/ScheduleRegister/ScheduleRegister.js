import { useRef, useState } from "react";
import * as S from "./styled";
import {
  addHours,
  startOfMonth,
  addMonths,
  setDay,
  setHours,
  setMinutes,
  startOfWeek,
} from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ScheduleRegister = () => {
  const navigate = useNavigate();

  const opponentRef = useRef(null);
  const customLocationRef = useRef(null);

  const [customLocation, setCustomLocation] = useState(false);
  const [isFocused, setIsFocused] = useState({
    opponent: false,
    notes: false,
    customLocation: false,
  });

  const handleFocus = (field) => {
    setIsFocused((prevIsFocused) => ({
      ...prevIsFocused,
      [field]: true,
    }));
  };

  const handleBlur = (field) => {
    setIsFocused((prevIsFocused) => ({
      ...prevIsFocused,
      [field]: false,
    }));
  };

  const currentDate = new Date();
  const nextMonth = addMonths(startOfMonth(currentDate), 1);
  const firstWeek = startOfWeek(nextMonth, { weekStartsOn: 0 });
  const firstWeekSaturday = setDay(firstWeek, 6);
  const defaultTime = setMinutes(setHours(firstWeekSaturday, 7), 0);

  const [formData, setFormData] = useState({
    date: defaultTime,
    duration: "3시간",
    checkLate: "30분 전",
    location: "교하체육공원(1)",
    customLocation: "",
    opponent: "",
    notes: "",
  });

  const handleFormDataChange = (event) => {
    const { name, value } = event.target;

    if (name === "location") {
      if (value === "직접 입력") {
        setCustomLocation(true);
      } else {
        setCustomLocation(false);
      }
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (formData.opponent === "") {
      alert("상대팀 명을 입력해주세요.");
      opponentRef.current.focus();
      return;
    }

    if (formData.location === "직접 입력" && formData.customLocation === "") {
      alert("장소를 직접 입력해주세요.");
      customLocationRef.current.focus();
      return;
    }

    const adjustedDate = addHours(formData.date, -9);
    const adjustedFormData = { ...formData, date: adjustedDate };

    axios
      .post("http://localhost:4000/schedule/register", { adjustedFormData })
      .then((res) => {
        console.log(res.data);
      });

    console.log(formData);

    navigate("/schedule");
  };

  return (
    <form>
      <S.Title>일정 등록</S.Title>
      <S.HorizontalLine />
      <S.Container>
        <S.LabelWrapper>
          <S.Label htmlFor='date'>시작 일시</S.Label>
          <S.CustomDatePicker
            id='date'
            name='date'
            showTimeSelect
            dateFormat='yyyy/MM/dd h:mm aa'
            onChange={(selectedDate) =>
              setFormData((prevData) => ({
                ...prevData,
                date: selectedDate,
              }))
            }
            selected={formData.date}
          />
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label htmlFor='checkLate'>진행 시간</S.Label>
          <S.Select
            id='checkLate'
            name='checkLate'
            onChange={handleFormDataChange}
          >
            <S.Option>3시간</S.Option>
            <S.Option>2시간</S.Option>
          </S.Select>
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label htmlFor='checkLate'>지각 체크</S.Label>
          <S.Select
            id='checkLate'
            name='checkLate'
            onChange={handleFormDataChange}
          >
            <S.Option>30분 전</S.Option>
            <S.Option>20분 전</S.Option>
            <S.Option>10분 전</S.Option>
          </S.Select>
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label htmlFor='location'>장소</S.Label>
          <S.Select
            id='location'
            name='location'
            onChange={handleFormDataChange}
          >
            <S.Option>교하체육공원(1)</S.Option>
            <S.Option>금촌체육공원</S.Option>
            <S.Option>운정건강공원</S.Option>
            <S.Option>운정체육공원</S.Option>
            <S.Option>파주스타디움 보조구장</S.Option>
            <S.Option>씨엠지풋볼</S.Option>
            <S.Option>직접 입력</S.Option>
          </S.Select>
          {customLocation && (
            <>
              <S.Input
                name='customLocation'
                type='text'
                placeholder={isFocused.customLocation ? "" : "구장"}
                onFocus={() => handleFocus("customLocation")}
                onBlur={() => handleBlur("customLocation")}
                onChange={handleFormDataChange}
                style={{ marginTop: "10px" }}
                ref={customLocationRef}
              />
            </>
          )}
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label htmlFor='opponent'>상대</S.Label>
          <S.Input
            id='opponent'
            name='opponent'
            type='text'
            placeholder={isFocused.opponent ? "" : "상대팀 명을 입력해 주세요."}
            onFocus={() => handleFocus("opponent")}
            onBlur={() => handleBlur("opponent")}
            onChange={handleFormDataChange}
            ref={opponentRef}
          />
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label htmlFor='notes'>기타 사항</S.Label>
          <S.TextArea
            rows={10}
            id='notes'
            name='notes'
            placeholder={isFocused.notes ? "" : "기타 사항을 입력해 주세요."}
            onFocus={() => handleFocus("notes")}
            onBlur={() => handleBlur("notes")}
            onChange={handleFormDataChange}
          />
        </S.LabelWrapper>
        <S.RegisterBtn onClick={handleRegister}>일정 등록</S.RegisterBtn>
      </S.Container>
    </form>
  );
};

export default ScheduleRegister;

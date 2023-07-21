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
import KakaoMap from "../../KakaoMap/KakaoMap";

const ScheduleRegister = () => {
  const navigate = useNavigate();

  const opponentRef = useRef(null);
  const searchLocationRef = useRef(null);

  const [customLocation, setCustomLocation] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [isFocused, setIsFocused] = useState({
    opponent: false,
    notes: false,
    customLocation: false,
  });
  const [locationPosition, setLocationPosition] = useState(
    "37.761615734035495,126.74125327825291"
  ); // 위치 주소 상태 추가

  const currentDate = new Date();
  const nextMonth = addMonths(startOfMonth(currentDate), 1);
  const firstWeek = startOfWeek(nextMonth, { weekStartsOn: 0 });
  const firstWeekSaturday = setDay(firstWeek, 6);
  const defaultTime = setMinutes(setHours(firstWeekSaturday, 7), 0);

  const [formData, setFormData] = useState({
    date: defaultTime,
    duration: "3",
    checkLate: "30",
    location: "교하체육공원(1)",
    locationPosition: "",
    opponent: "",
    notes: "",
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

  const handleSearchLocationClick = (event) => {
    event.preventDefault();

    setSearchLocation(searchLocationRef.current.value);
    setFormData((prevData) => ({ ...prevData, location: "" }));
  };

  const handleFormDataChange = async (event) => {
    const { name, value } = event.target;

    if (name === "location") {
      if (value === "직접 입력") {
        setCustomLocation(true);
      } else {
        setCustomLocation(false);
        // 사용자가 선택한 위치의 좌표를 조회합니다.
        const response = await axios.post(
          `http://localhost:4000/location/position`,
          { value }
        );
        const position = response.data;

        // 조회한 좌표를 상태로 설정합니다.
        setLocationPosition(position);
        setFormData((prevData) => ({ ...prevData, locationPosition: "" }));
      }
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onPositionUpdate = (newPosition) => {
    const La = newPosition.La;
    const Ma = newPosition.Ma;

    setFormData((prevData) => ({
      ...prevData,
      locationPosition: `${Ma}, ${La}`,
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (formData.opponent === "") {
      alert("상대팀 명을 입력해주세요.");
      opponentRef.current.focus();
      return;
    }

    // if (formData.location === "직접 입력") {
    //   alert("장소를 직접 입력해주세요.");
    //   searchLocationRef.current.focus();
    //   return;
    // }

    if (formData.locationPosition.length === 0) {
      alert("지도에 모일 장소를 표시해주세요.");
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
          <S.Select name='checkLate' onChange={handleFormDataChange}>
            <S.Option value='3'>3시간</S.Option>
            <S.Option value='2'>2시간</S.Option>
          </S.Select>
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label htmlFor='checkLate'>지각 체크</S.Label>
          <S.Select name='checkLate' onChange={handleFormDataChange}>
            <S.Option value='30'>30분 전</S.Option>
            <S.Option value='20'>20분 전</S.Option>
            <S.Option value='20'>10분 전</S.Option>
          </S.Select>
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label htmlFor='location'>장소</S.Label>
          <S.Select name='location' onChange={handleFormDataChange}>
            <S.Option>교하체육공원(1)</S.Option>
            <S.Option>금촌체육공원</S.Option>
            <S.Option>운정건강공원</S.Option>
            <S.Option>운정체육공원</S.Option>
            <S.Option>파주스타디움 보조구장</S.Option>
            <S.Option>씨엠지풋볼</S.Option>
            <S.Option>직접 입력</S.Option>
          </S.Select>
          {customLocation && (
            <S.OtherLocation>
              <S.SearchInput
                type='text'
                placeholder={
                  isFocused.customLocation ? "" : "장소를 검색해주세요."
                }
                onFocus={() => handleFocus("customLocation")}
                onBlur={() => handleBlur("customLocation")}
                ref={searchLocationRef}
              />
              <S.SearchBtn onClick={handleSearchLocationClick}>
                검색
              </S.SearchBtn>
            </S.OtherLocation>
          )}
          <KakaoMap
            position={locationPosition}
            search={searchLocation}
            width={"300px"}
            height={"300px"}
            margin={"10px 0 0 0"}
            onPositionUpdate={onPositionUpdate} // 마커 찍은 좌표 업데이트
          />
          {formData.locationPosition.length === 0 ? (
            <S.MapNotice>지도에 모일 장소를 표시해주세요.</S.MapNotice>
          ) : (
            ""
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

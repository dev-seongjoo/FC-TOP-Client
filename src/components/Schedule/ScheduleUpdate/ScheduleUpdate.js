import { useEffect, useState } from "react";
import * as S from "./styled";
import axios from "axios";
import { useParams } from "react-router-dom";
import KakaoMap from "../../KakaoMap/KakaoMap";

const ScheduleUpdate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [customLocation, setCustomLocation] = useState(false);
  const [isFocused, setIsFocused] = useState({
    opponent: false,
    notes: false,
    customLocation: false,
  });
  const [formData, setFormData] = useState({
    date: "",
    duration: "",
    checkLate: "",
    location: "",
    locationPosition: "",
    customLocation: "",
    opponent: "",
    notes: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchDataDetail = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(`http://localhost:4000/schedule/${id}`);

        if (result === null) {
          console.log("데이터가 존재하지 않습니다.");
          return;
        }

        setFormData({
          date: result.schedule.DATE,
          duration: result.schedule.DURATION,
          checkLate: result.schedule.CHECK_LATE,
          location: result.location.LOCATION,
          locationPosition: result.schedule.LOCATION_POSITION,
          opponent: result.schedule.OPPONENT,
          notes: result.schedule.NOTES,
        });
      } catch (error) {
        console.error("Error fetching schedule data:", error);
      } finally {
        setIsLoading(false); // 데이터를 다 불러왔으므로 로딩 상태를 false로 설정
      }
    };

    fetchDataDetail();
  }, []);

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

  const handleUpdate = (event) => {};

  return (
    <form>
      <S.Title>일정 수정</S.Title>
      <S.HorizontalLine />
      <S.Container>
        <S.LabelWrapper>
          <S.Label htmlFor='date'>시작 일시</S.Label>
          <S.CustomDatePicker
            value={new Date(formData.DATE)}
            id='date'
            name='date'
            showTimeSelect
            dateFormat='yyyy/MM/dd h:mm aa'
            // onChange={(selectedDate) =>
            //   setSchedule((prevData) => ({
            //     ...prevData,
            //     DATE: selectedDate,
            //   }))
            // }
            // selected={new Date(schedule.DATE)}
          />
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label htmlFor='checkLate'>진행 시간</S.Label>
          <S.Select
            id='checkLate'
            name='checkLate'
            // onChange={handleFormDataChange}
            sel={formData.DURATION}
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
            // onChange={handleFormDataChange}
            value={formData.CHECK_LATE}
          >
            <S.Option value='30'>30분 전</S.Option>
            <S.Option value='20'>20분 전</S.Option>
            <S.Option value='10'>10분 전</S.Option>
          </S.Select>
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label htmlFor='location'>장소</S.Label>
          <S.Select
            id='location'
            name='location'
            // onChange={handleFormDataChange}
            value={formData.LOCATION}
          >
            <S.Option value='교하체육공원(1)'>교하체육공원(1)</S.Option>
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
                name='customLocation'
                type='text'
                placeholder={
                  isFocused.customLocation ? "" : "장소를 검색해주세요."
                }
                onFocus={() => handleFocus("customLocation")}
                onBlur={() => handleBlur("customLocation")}
                // onChange={handleFormDataChange}
                // ref={customLocationRef}
              />
              <S.SearchBtn>검색</S.SearchBtn>
            </S.OtherLocation>
          )}
          {/* <KakaoMap
            position={schedule.LOCATION_POSITION}
            width={"300px"}
            height={"300px"}
            margin={"10px 0 0 0"}
            onPositionUpdate={onPositionUpdate} // 마커 찍은 좌표 업데이트
          /> */}
          {/* {formData.locationPosition.length === 0 ? (
            <S.MapNotice>지도에 모일 장소를 표시해주세요.</S.MapNotice>
          ) : (
            ""
          )} */}
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label htmlFor='opponent'>상대</S.Label>
          <S.Input
            value={formData.OPPONENT}
            id='opponent'
            name='opponent'
            type='text'
            placeholder={isFocused.opponent ? "" : "상대팀 명을 입력해 주세요."}
            onFocus={() => handleFocus("opponent")}
            onBlur={() => handleBlur("opponent")}
            // onChange={handleFormDataChange}
            // ref={opponentRef}
          />
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label htmlFor='notes'>기타 사항</S.Label>
          <S.TextArea
            value={formData.NOTES}
            rows={10}
            id='notes'
            name='notes'
            placeholder={isFocused.notes ? "" : "기타 사항을 입력해 주세요."}
            onFocus={() => handleFocus("notes")}
            onBlur={() => handleBlur("notes")}
            // onChange={handleFormDataChange}
          />
        </S.LabelWrapper>
        <S.RegisterBtn onClick={handleUpdate}>일정 수정</S.RegisterBtn>
      </S.Container>
    </form>
  );
};

export default ScheduleUpdate;

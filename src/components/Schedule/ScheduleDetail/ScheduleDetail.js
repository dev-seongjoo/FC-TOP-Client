import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useParams } from "react-router-dom";

const ScheduleDetail = () => {
  const [schedule, setSchedule] = useState({});
  const [isLoading, setIsLoading] = useState(true); // 추가된 상태 변수

  const { id } = useParams();

  useEffect(() => {
    fetchDataDetail();
  }, []);

  const fetchDataDetail = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(`http://localhost:4000/schedule/${id}`);
      if (result === null) {
        console.log("데이터가 존재하지 않습니다.");
        return;
      }
      console.log(result.data);
      setSchedule(result.data);
    } catch (error) {
      console.error("Error fetching schedule data:", error);
    } finally {
      setIsLoading(false); // 데이터를 다 불러왔으므로 로딩 상태를 false로 설정
    }
  };

  const date = new Date(schedule.DATE);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // JavaScript의 월은 0부터 시작합니다.
  const day = date.getDate();
  const hour = date.getHours();
  const scheduleDate = schedule.DATE
    ? `${year}년 ${month}월 ${day}일 ${hour}시`
    : "로딩 중...";

  return (
    <>
      {/* 로딩 상태가 아니라면, 일반 컴포넌트를 보여줍니다. */}
      {!isLoading && (
        <>
          <S.Title>경기 일정</S.Title>
          <S.BtnWrapper>
            <S.UpdateBtn to='/schedule/update'>수정</S.UpdateBtn>
            <S.DeleteBtn to='/schedule/delete'>삭제</S.DeleteBtn>
          </S.BtnWrapper>
          <S.HorizontalLine />
          <S.Container>
            <S.LabelWrapper>
              <S.Label>일시</S.Label>
              <S.InfoBox>2023년 8월 5일 7시 - 10시</S.InfoBox>
              {/* <S.InfoBox>{scheduleDate}</S.InfoBox> */}
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>지각 체크</S.Label>
              <S.InfoBox>30분 전</S.InfoBox>
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>장소</S.Label>
              <S.InfoBox>교하체육공원(1)</S.InfoBox>
              {/* <S.InfoBox>{schedule.LOCATION}</S.InfoBox> */}
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>상대</S.Label>
              <S.InfoBox>FC AAA</S.InfoBox>
              {/* <S.InfoBox>{schedule.OPPONENT}</S.InfoBox> */}
            </S.LabelWrapper>
          </S.Container>
        </>
      )}
      {/* 로딩 상태라면, 로딩 중임을 알려주는 컴포넌트를 보여줍니다. */}
      {isLoading && <S.Title>로딩 중...</S.Title>}
    </>
  );
};

export default ScheduleDetail;

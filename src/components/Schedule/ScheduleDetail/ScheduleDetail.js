import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useParams } from "react-router-dom";
import KakaoMap from "../../KakaoMap/KakaoMap";
import Vote from "../../Vote/Vote";
import VoteResult from "../../Vote/VoteResult/VoteResult";

const ScheduleDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [schedule, setSchedule] = useState({});
  const [locationAddress, setLocationAddress] = useState([]); // 위치 주소 상태 추가
  const [voteResult, setVoteResult] = useState(false);

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
      setSchedule(result.data);
    } catch (error) {
      console.error("Error fetching schedule data:", error);
    } finally {
      setIsLoading(false); // 데이터를 다 불러왔으므로 로딩 상태를 false로 설정
    }
  };

  let date = new Date(schedule.DATE);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // JavaScript의 월은 0부터 시작합니다.
  const day = date.getDate();
  const hour = date.getHours();
  const duration = +schedule.DURATION;
  date = `${year}년 ${month}월 ${day}일 ${hour}시 - ${hour + duration}시`;

  const checkLate = `${hour - 1}시 ${60 - schedule.CHECK_LATE}분 이후`;

  const onAddressUpdate = (newAddress) => {
    setLocationAddress(newAddress);
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("주소가 클립보드에 복사되었습니다.");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleVoteResultClick = () => {
    setVoteResult(!voteResult);
  };

  return (
    <>
      {/* 로딩 상태가 아니라면, 일반 컴포넌트를 보여줍니다. */}
      {!isLoading && (
        <>
          <S.Title>경기 일정</S.Title>
          <S.BtnWrapper>
            <S.UpdateBtn to={`/schedule/update/${id}`}>수정</S.UpdateBtn>
            <S.DeleteBtn to={`/schedule/delete/${id}`}>삭제</S.DeleteBtn>
          </S.BtnWrapper>
          <S.HorizontalLine />
          <S.Container>
            <S.LabelWrapper>
              <S.Label>일시</S.Label>
              <S.InfoBox>{date}</S.InfoBox>
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>지각 체크</S.Label>
              <S.InfoBox>{checkLate}</S.InfoBox>
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>장소</S.Label>
              <S.InfoBox>{schedule.LOCATION}</S.InfoBox>
              <KakaoMap
                position={schedule.LOCATION_POSITION}
                onAddressUpdate={onAddressUpdate} // 주소 정보 업데이트
                width={"300px"}
                height={"300px"}
                margin={"10px 0 0 0"}
              />

              {locationAddress[0] === "" ? (
                ""
              ) : (
                <>
                  <S.AddrWrapper>
                    <S.AddrLabel>도로명 주소</S.AddrLabel>
                    <S.CopyBtn onClick={() => handleCopy(locationAddress[0])}>
                      복사하기
                    </S.CopyBtn>
                  </S.AddrWrapper>
                  <S.RoadAddr>{locationAddress[0]}</S.RoadAddr>
                </>
              )}
              <S.AddrWrapper>
                <S.AddrLabel>지번 주소</S.AddrLabel>
                <S.CopyBtn onClick={() => handleCopy(locationAddress[1])}>
                  복사하기
                </S.CopyBtn>
              </S.AddrWrapper>
              <S.LotAddr>{locationAddress[1]}</S.LotAddr>
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>상대</S.Label>
              <S.InfoBox>{schedule.OPPONENT}</S.InfoBox>
            </S.LabelWrapper>
            {schedule.NOTES && (
              <S.LabelWrapper>
                <S.Label>기타 사항</S.Label>
                <S.InfoBox>{schedule.NOTES}</S.InfoBox>
              </S.LabelWrapper>
            )}
            <S.LabelWrapper>
              <S.VoteWrapper>
                <S.Label>투표</S.Label>
                <S.VoteResult onClick={handleVoteResultClick}>
                  {voteResult ? "닫기" : "자세히 보기"}
                </S.VoteResult>
              </S.VoteWrapper>
              {voteResult ? <VoteResult /> : <Vote />}
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

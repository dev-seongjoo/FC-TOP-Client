import { useEffect, useState } from "react";
import * as S from "./styled";
import axios from "axios";

const ScheduleList = () => {
  const currentTime = Date.now();
  const currentMonth = new Date().getMonth() + 1;
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1);
  const [scheduleData, setScheduleData] = useState([]);

  // 선택된 월에 해당하는 데이터를 백엔드로부터 가져와서 상태로 저장

  useEffect(() => {
    fetchData(currentMonth);
  }, []);

  const fetchData = async (month) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/schedule?month=${month}`
      );

      if (response.data.length === 0) {
        console.log("데이터가 존재하지 않습니다.");
        return;
      }
      console.log(response.data);
      setScheduleData(response.data);
    } catch (error) {
      console.error("Error fetching schedule data:", error);
    }
  };

  const handleMonthSelect = (event) => {
    const month = event.target.value;
    console.log(month);
    setSelectedMonth(month); // 선택된 월을 업데이트
    fetchData(month); // 선택된 월에 맞는 데이터 요청
  };

  return (
    <>
      <S.Title>일정/결과</S.Title>
      <S.UploadBtnWrapper>
        <S.UploadBtn to='/schedule/register'>일정 등록</S.UploadBtn>
      </S.UploadBtnWrapper>
      <S.HorizontalLine />
      <S.Container>
        <S.DateContainer>
          <S.Select>
            <S.Option value='2023'>2023</S.Option>
          </S.Select>
          <S.Year>년</S.Year>
          <S.Select value={selectedMonth} onChange={handleMonthSelect}>
            {monthOptions.map((month) => (
              <S.Option key={month} value={month}>
                {month}
              </S.Option>
            ))}
          </S.Select>
          <S.Month>월</S.Month>
        </S.DateContainer>
        {scheduleData.map((data) => (
          <S.MatchBox key={data.ID}>
            <S.MatchCalendar>
              <S.MatchTime>
                {new Date(data.DATE).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </S.MatchTime>
              <S.MatchDate>
                {new Date(data.DATE).toLocaleDateString()}
              </S.MatchDate>
              <S.MatchPlace>{data.LOCATION}</S.MatchPlace>
            </S.MatchCalendar>
            <S.TeamGroup>
              <S.HomeTeam>FC TOP</S.HomeTeam>
              <S.VersusGroup>
                <S.Versus>VS</S.Versus>
                <S.Round>1R</S.Round>
              </S.VersusGroup>
              <S.AwayTeam>{data.OPPONENT}</S.AwayTeam>
            </S.TeamGroup>
            {new Date(data.DATE) > currentTime ? (
              <S.VoteBtn>투표</S.VoteBtn>
            ) : (
              <S.BtnGroup>
                <S.RecordBtn>경기 기록</S.RecordBtn>
                <S.VideoBtn>경기 영상</S.VideoBtn>
              </S.BtnGroup>
            )}
          </S.MatchBox>
        ))}

        {/* <S.MatchBox>
          <S.MatchCalendar>
            <S.MatchTime>07:00</S.MatchTime>
            <S.MatchDate>2023.07.22</S.MatchDate>
            <S.MatchPlace>교하체육공원(1)</S.MatchPlace>
          </S.MatchCalendar>
          <S.TeamGroup>
            <S.HomeTeam>FC TOP</S.HomeTeam>
            <S.VersusGroup>
              <S.Versus>VS</S.Versus>
              <S.Round>2R</S.Round>
            </S.VersusGroup>
            <S.AwayTeam>FC 킥스</S.AwayTeam>
          </S.TeamGroup>
          <S.VoteBtn>투표</S.VoteBtn>
        </S.MatchBox> */}
      </S.Container>
    </>
  );
};

export default ScheduleList;

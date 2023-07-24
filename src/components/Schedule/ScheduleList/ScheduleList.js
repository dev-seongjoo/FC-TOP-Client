import { useEffect, useState } from "react";
import * as S from "./styled";
import axios from "axios";

const ScheduleList = () => {
  const currentTime = Date.now();
  const currentMonth = new Date().getMonth() + 1;
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1);
  const [schedules, setSchedules] = useState([]);

  // 선택된 월에 해당하는 데이터를 백엔드로부터 가져와서 상태로 저장

  useEffect(() => {
    fetchData(currentMonth);
  }, []);

  const fetchData = async (month) => {
    try {
      const schedules = await axios.get(
        `http://localhost:4000/schedule?month=${month}`
      );

      if (schedules.data.length === 0) {
        console.log("데이터가 존재하지 않습니다.");
        return;
      }

      setSchedules(schedules.data);
    } catch (error) {
      console.error("Error fetching schedules data:", error);
    }
  };

  function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  }

  const handleMonthSelect = (event) => {
    const month = event.target.value;
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
        {schedules.map((schedule) => (
          <S.MatchBox key={schedule.ID} to={`/schedule/${schedule.ID}`}>
            <S.MatchCalendar>
              <S.MatchTime>
                {new Date(schedule.DATE).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </S.MatchTime>
              <S.MatchDate>
                {new Date(schedule.DATE).toLocaleDateString()}
              </S.MatchDate>
              <S.MatchPlace>{schedule.LOCATION}</S.MatchPlace>
            </S.MatchCalendar>
            <S.TeamGroup>
              <S.HomeTeam>FC TOP</S.HomeTeam>
              <S.VersusGroup>
                <S.Versus>VS</S.Versus>
                <S.Round>{getWeekNumber(new Date(schedule.DATE))}R</S.Round>
              </S.VersusGroup>
              <S.AwayTeam>{schedule.OPPONENT}</S.AwayTeam>
            </S.TeamGroup>
            {new Date(schedule.DATE) > currentTime ? (
              <S.VoteBtn>투표</S.VoteBtn>
            ) : (
              <S.BtnGroup>
                <S.RecordBtn>경기 기록</S.RecordBtn>
                <S.VideoBtn>경기 영상</S.VideoBtn>
              </S.BtnGroup>
            )}
          </S.MatchBox>
        ))}
      </S.Container>
    </>
  );
};

export default ScheduleList;

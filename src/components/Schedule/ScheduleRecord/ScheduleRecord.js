import { useEffect, useState } from "react";
import * as S from "./styled";
import axios from "axios";
import { useParams } from "react-router-dom";
import field from "../../../assets/field.png";
import {
  form442,
  form433,
  form4312,
  form4231,
  form4141,
  form352,
  form343,
} from "../../../utils/formations";

const ScheduleRecord = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [schedule, setSchedule] = useState({});
  const [quarter, setQuarter] = useState(1);
  const [currentFormation, setCurrentFormation] = useState(442);

  const { match } = useParams();

  const formations = {
    442: form442,
    433: form433,
    4312: form4312,
    4231: form4231,
    4141: form4141,
    352: form352,
    343: form343,
  };

  const fetchQuarter = async (quarter) => {
    try {
      const selectedQuarter = await axios.get(
        `http://localhost:4000/${match}/${quarter}`
      );
      setCurrentFormation(selectedQuarter.data.formation);
      setQuarter(quarter);
    } catch (err) {
      console.error(err);
      setCurrentFormation(null);
    }
  };

  useEffect(() => {
    fetchQuarter(quarter);
  }, [quarter]);

  const handleQuarterChange = (event) => {
    fetchQuarter(event.target.value);
  };

  useEffect(() => {
    const fetchDataDetail = async () => {
      try {
        setIsLoading(true);
        const selectedMatch = await axios.get(
          `http://localhost:4000/schedule/${match}`
        );
        if (selectedMatch === null) {
          console.log("데이터가 존재하지 않습니다.");
          return;
        }
        setSchedule(selectedMatch.data);
      } catch (error) {
        console.error("Error fetching schedule data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataDetail();
  }, []);

  let date = new Date(schedule.DATE);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const duration = +schedule.DURATION;
  date = `${year}년 ${month}월 ${day}일 오전 ${hour}시 - ${hour + duration}시`;

  return (
    <>
      <S.Title>일정 기록</S.Title>
      <S.HorizontalLine />
      <S.Container>
        <S.LabelWrapper>
          <S.Label>일시</S.Label>
          <S.InfoBox>{date}</S.InfoBox>
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label>상대</S.Label>
          <S.InfoBox>{schedule.OPPONENT}</S.InfoBox>
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label>쿼터</S.Label>
          <S.Select onChange={handleQuarterChange} defaultValue={quarter}>
            <S.Option value='1'>1Q</S.Option>
            <S.Option value='2'>2Q</S.Option>
            <S.Option value='3'>3Q</S.Option>
            <S.Option value='4'>4Q</S.Option>
            <S.Option value='5'>5Q</S.Option>
            <S.Option value='6'>6Q</S.Option>
          </S.Select>
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.StartingWrapper>
            <S.Label>선발 명단</S.Label>
            <S.StartingLineupSetup
              to={`/schedule/startingLineup/${match}/${quarter}`}
            >
              작성하기
            </S.StartingLineupSetup>
          </S.StartingWrapper>
          <S.StartingLineup>
            <S.Field src={field} onDragStart={(e) => e.preventDefault()} />
            {formations[currentFormation] &&
              Object.values(formations[currentFormation]).map(
                (player, index) => (
                  <S.Player
                    key={index}
                    top={player[0]}
                    left={player[1]}
                  ></S.Player>
                )
              )}
          </S.StartingLineup>
        </S.LabelWrapper>
        <S.RecordBtn>기록 시작</S.RecordBtn>
      </S.Container>
    </>
  );
};

export default ScheduleRecord;

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

const ScheduleRecordSetting = () => {
  const [schedule, setSchedule] = useState({});
  const [quarter, setQuarter] = useState(0);
  const [quarterRecord, setQuarterRecord] = useState({
    "1Q": null,
    "2Q": null,
    "3Q": null,
    "4Q": null,
    "5Q": null,
    "6Q": null,
  });
  const [currentFormation, setCurrentFormation] = useState(null);

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

  const fetchDataDetail = async () => {
    try {
      const selectedMatch = await axios.get(
        `http://localhost:4000/schedule/${match}`
      );
      const quarterRecord = await axios.get(
        `http://localhost:4000/record/check/${match}`
      );

      setSchedule(selectedMatch.data);
      setQuarterRecord({
        "1Q": quarterRecord.data[0].RECORD,
        "2Q": quarterRecord.data[1].RECORD,
        "3Q": quarterRecord.data[2].RECORD,
        "4Q": quarterRecord.data[3].RECORD,
        "5Q": quarterRecord.data[4].RECORD,
        "6Q": quarterRecord.data[5].RECORD,
      });

      const result = quarterRecord.data.find(
        (record) => record.RECORD === false
      );

      setQuarter(result.QUARTER);
    } catch (error) {
      console.error("Error fetching schedule data:", error);
      console.log("데이터가 존재하지 않습니다.");
    }
  };

  useEffect(() => {
    fetchDataDetail();
  }, []);

  const fetchQuarter = async () => {
    if (quarter !== 0) {
      try {
        const selectedQuarter = await axios.get(
          `http://localhost:4000/${match}/${quarter}`
        );
        setCurrentFormation(selectedQuarter.data.formation);
      } catch (err) {
        console.error(err);
        console.log("데이터가 존재하지 않습니다.");
        setCurrentFormation(null);
      }
    }
  };

  useEffect(() => {
    fetchQuarter(quarter);
  }, [quarter]);

  let date = new Date(schedule.DATE);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const duration = +schedule.DURATION;
  date = `${year}년 ${month}월 ${day}일 오전 ${hour}시 - ${hour + duration}시`;

  return (
    <>
      <S.Title>기록 설정</S.Title>
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
          <S.Select
            onChange={(e) => setQuarter(e.target.value)}
            value={quarter}
          >
            <S.Option value='1' disabled={quarterRecord["1Q"]}>
              1Q
            </S.Option>
            <S.Option value='2' disabled={quarterRecord["2Q"]}>
              2Q
            </S.Option>
            <S.Option value='3' disabled={quarterRecord["3Q"]}>
              3Q
            </S.Option>
            <S.Option value='4' disabled={quarterRecord["4Q"]}>
              4Q
            </S.Option>
            <S.Option value='5' disabled={quarterRecord["5Q"]}>
              5Q
            </S.Option>
            <S.Option value='6' disabled={quarterRecord["6Q"]}>
              6Q
            </S.Option>
          </S.Select>
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.StartingWrapper>
            <S.Label>선발 명단</S.Label>
            <S.StartingLineupSetupWrapper>
              <S.StartingLineupSetup
                to={`/schedule/startingLineup/${match}/${quarter}`}
              >
                작성하기
              </S.StartingLineupSetup>
              <S.StartingLineupSetupBtn className='material-symbols-outlined'>
                edit
              </S.StartingLineupSetupBtn>
            </S.StartingLineupSetupWrapper>
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
        <S.RecordBtn to={`/schedule/record/${match}/${quarter}`}>
          기록
        </S.RecordBtn>
      </S.Container>
    </>
  );
};

export default ScheduleRecordSetting;

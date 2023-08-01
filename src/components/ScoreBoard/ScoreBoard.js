import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styled";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const ScoreBoard = ({ score, lp }) => {
  const navigate = useNavigate();
  const { match } = useParams();

  const [time, setTime] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isRecorded, setIsRecorded] = useState(false);
  const intervalRef = useRef();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const displayMinutes = String(minutes).padStart(2, "0");
  const displaySeconds = String(seconds).padStart(2, "0");

  // useEffect(() => {
  //   axios.get();
  // });

  useEffect(() => {
    if (isRecording) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRecording]);

  const handleRecording = () => {
    if (isRecording) {
      const confirmEnd = window.confirm("기록을 종료하시겠습니까?");
      if (confirmEnd) {
        setIsRecorded(true);
        setIsRecording(false);
        navigate(`/schedule/recordsetting/${match}`);
      }
    } else {
      setIsRecording(true);
    }
  };

  return (
    <>
      <S.ScoreBoardContainer>
        <S.TeamContainer>
          <S.TeamWrapper>
            <S.TeamName>FC TOP</S.TeamName>
            <S.TeamScore>{score}</S.TeamScore>
          </S.TeamWrapper>
          <S.Versus>VS</S.Versus>
          <S.TeamWrapper>
            <S.TeamScore>{lp}</S.TeamScore>
            <S.TeamName>FC ZZZ</S.TeamName>
          </S.TeamWrapper>
        </S.TeamContainer>
        <S.TimeContainer>
          <S.TimeWrapper>
            {`${displayMinutes} : ${displaySeconds}`}
          </S.TimeWrapper>
          {isRecorded ? null : (
            <S.RecordingBtn onClick={handleRecording}>
              {!isRecording ? `기록 시작` : `기록 종료`}
            </S.RecordingBtn>
          )}
        </S.TimeContainer>
      </S.ScoreBoardContainer>
    </>
  );
};

export default ScoreBoard;

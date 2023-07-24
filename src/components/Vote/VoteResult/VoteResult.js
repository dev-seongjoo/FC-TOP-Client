import * as S from "./styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VoteResult = () => {
  const [List, setList] = useState({
    attendance: [],
    absence: [],
    noVote: [],
  });
  const { id } = useParams();
  const matchId = id;

  useEffect(() => {
    const fetchVote = async () => {
      try {
        const voteResult = await axios.get(
          `http://localhost:4000/voteresult/${matchId}`
        );

        // console.log(voteResult);

        setList((prevList) => ({
          ...prevList,
          attendance: voteResult.data.attendanceList,
          absence: voteResult.data.absenceList,
          noVote: voteResult.data.noVoteList,
        }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchVote();
  }, []);

  return (
    <>
      <S.ListWrapper>
        <S.ListLabel>참석 ({List.attendance.length}명)</S.ListLabel>
        {List.attendance.map((attendance, index) => (
          <S.List key={index}>{attendance}</S.List>
        ))}
      </S.ListWrapper>
      <S.ListWrapper>
        <S.ListLabel>불참석 ({List.absence.length}명)</S.ListLabel>
        {List.absence.map((absence, index) => (
          <S.List key={index}>{absence}</S.List>
        ))}
      </S.ListWrapper>
      <S.ListWrapper>
        <S.ListLabel>미투표인원 ({List.noVote.length}명)</S.ListLabel>
        {List.noVote.map((noVote, index) => (
          <S.List key={index}>{noVote}</S.List>
        ))}
      </S.ListWrapper>
    </>
  );
};

export default VoteResult;

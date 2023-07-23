import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styled";
import axios from "axios";

const Vote = () => {
  const [vote, setVote] = useState(null);
  const { id } = useParams();
  const matchId = id;

  useEffect(() => {
    const fetchVote = async () => {
      try {
        const playerId = JSON.parse(localStorage.getItem("player"));
        const response = await axios.get(
          `http://localhost:4000/vote/${matchId}/${playerId}`
        );
        if (response.data) {
          setVote(response.data.ATTENDANCE);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchVote();
  }, []);

  const handleVote = async (attendance) => {
    const playerId = JSON.parse(localStorage.getItem("player"));
    if (!playerId) {
      alert("로그인이 필요합니다.");
    }
    try {
      await axios.post("http://localhost:4000/vote", {
        matchId,
        playerId,
        attendance,
      });
      setVote(attendance);
    } catch (err) {
      console.error("에러 발생", err);
    }
  };

  return (
    <>
      <S.VoteBox onClick={() => handleVote("참석")} selected={vote === "참석"}>
        참석
      </S.VoteBox>
      <S.VoteBox
        onClick={() => handleVote("불참석")}
        selected={vote === "불참석"}
      >
        불참석
      </S.VoteBox>
    </>
  );
};

export default Vote;

import * as S from "./styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import field from "../../../assets/field.png";
import ScoreBoard from "../../ScoreBoard/ScoreBoard";
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
  const { match, quarter } = useParams();

  const [currentFormation, setCurrentFormation] = useState(442);
  const [sideOpen, setSideOpen] = useState(false);
  const [startingPlayers, setStartingPlayers] = useState({
    player1: ["", ""],
    player2: ["", ""],
    player3: ["", ""],
    player4: ["", ""],
    player5: ["", ""],
    player6: ["", ""],
    player7: ["", ""],
    player8: ["", ""],
    player9: ["", ""],
    player10: ["", ""],
    player11: ["", ""],
  });
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [time, setTime] = useState(0);
  const [clickTime, setClickTime] = useState(0);
  const [isScore, setIsScore] = useState(false);
  const [isSub, setIsSub] = useState(false);
  const [list, setList] = useState({});
  const [score, setScore] = useState(0);
  const [lp, setLp] = useState(0);
  const [results, setResults] = useState([]);

  const formations = {
    442: form442,
    433: form433,
    4312: form4312,
    4231: form4231,
    4141: form4141,
    352: form352,
    343: form343,
  };

  const handlePlayerClick = (index) => {
    if (!sideOpen) {
      setSideOpen(true);
      setSelectedPlayer(startingPlayers[`player${index + 1}`][0]);
      setClickTime(time + 1);
    } else {
      setSideOpen(false);
      setIsScore(false);
      setIsSub(false);
    }
  };

  const handleScoreClick = () => {
    setIsScore(true);
  };

  const handleAssistClick = (player) => {
    setSideOpen(false);
    setIsScore(false);
    setScore(score + 1);
    recordEvent(clickTime, "득점", selectedPlayer, player);
  };

  const handleSubClick = () => {
    setIsSub(true);
  };

  const handleSubListClick = (player) => {
    setSideOpen(false);
    setIsSub(false);

    const updatedStartingPlayers = { ...startingPlayers };
    const subOutPlayer = Object.keys(updatedStartingPlayers).find(
      (key) => updatedStartingPlayers[key][0] === selectedPlayer
    );

    updatedStartingPlayers[subOutPlayer] = [
      player.KOR_NM,
      updatedStartingPlayers[subOutPlayer][1],
    ];

    setStartingPlayers(updatedStartingPlayers);
    recordEvent(clickTime, "교체", selectedPlayer, player.KOR_NM);
  };

  const handleFieldClick = () => {
    setSideOpen(false);
    setIsScore(false);
    setIsSub(false);
  };

  const recordEvent = (time, event, player1, player2) => {
    setResults((prevData) => [
      ...prevData,
      { time: time, event: event, player1: player1, player2: player2 },
    ]);
  };

  useEffect(() => {
    const fetchQuarter = async (quarter) => {
      try {
        const selectedQuarter = await axios.get(
          `http://localhost:4000/${match}/${quarter}`
        );
        setCurrentFormation(selectedQuarter.data.formation);

        let newStartingPlayers = {
          player1: ["", ""],
          player2: ["", ""],
          player3: ["", ""],
          player4: ["", ""],
          player5: ["", ""],
          player6: ["", ""],
          player7: ["", ""],
          player8: ["", ""],
          player9: ["", ""],
          player10: ["", ""],
          player11: ["", ""],
        };

        for (let member of selectedQuarter.data.selectedStartings) {
          for (let key in formations[selectedQuarter.data.formation]) {
            if (
              formations[selectedQuarter.data.formation][key][2] ===
              member.POSITION
            ) {
              newStartingPlayers[key] = [member.PLAYER, member.POSITION];
            }
          }
        }

        setStartingPlayers(newStartingPlayers);
      } catch (err) {
        console.error(err);
        setCurrentFormation(null);
      }
    };

    fetchQuarter(quarter);
  }, []);

  useEffect(() => {
    const fetchVote = async () => {
      try {
        const voteResult = await axios.get(
          `http://localhost:4000/voteresult/${match}`
        );
        const playerName = voteResult.data.attendanceList.sort((a, b) =>
          a.localeCompare(b)
        );
        const playerInfoPromises = playerName.map((player) =>
          axios.post("http://localhost:4000/playerInfo", { player })
        );

        const playerInfos = await Promise.all(playerInfoPromises);

        const newList = playerName.reduce((prevData, player, index) => {
          return { ...prevData, [player]: playerInfos[index].data };
        }, {});

        setList(newList);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVote();
  }, []);

  return (
    <>
      <S.Title>{quarter}Q</S.Title>
      <S.HorizontalLine />
      <S.Container>
        <ScoreBoard score={score} lp={lp} recordEvent={setTime} />
        <S.Notice>
          {results.length !== 0 &&
            results.map((result, index) => {
              if (result.event === "득점") {
                return (
                  <div key={index}>
                    {`${Math.floor(result.time / 60)}분, 득점: ${
                      result.player1
                    }, 도움: ${result.player2}`}
                  </div>
                );
              } else if (result.event === "교체") {
                return (
                  <div key={index}>
                    {`${Math.floor(result.time / 60)}분, 교체IN: ${
                      result.player2
                    }, 교체 OUT: ${result.player1}`}
                  </div>
                );
              }
              return null;
            })}
        </S.Notice>
        <S.StartingLineup>
          <S.SideBar sideOpen={sideOpen}>
            <S.SideBarHead>
              {!isScore && !isSub ? (
                <S.SideBarHeadContent>{selectedPlayer}</S.SideBarHeadContent>
              ) : isScore ? (
                <S.SideBarHeadContent>도움</S.SideBarHeadContent>
              ) : isSub ? (
                <>
                  <S.SideBarHeadContent
                    style={{ width: "50%", fontSize: "1rem" }}
                  >
                    교체IN
                  </S.SideBarHeadContent>
                  <S.SideBarHeadContent
                    style={{ width: "50%", fontSize: "1rem" }}
                  >
                    선호 포지션
                  </S.SideBarHeadContent>
                </>
              ) : null}
            </S.SideBarHead>
            {!isScore && !isSub ? (
              <>
                <S.SideBarBody>
                  <S.SideBarBodyContent onClick={handleScoreClick}>
                    득점
                  </S.SideBarBodyContent>
                </S.SideBarBody>
                <S.SideBarBody>
                  <S.SideBarBodyContent onClick={handleSubClick}>
                    교체
                  </S.SideBarBodyContent>
                </S.SideBarBody>
              </>
            ) : isScore ? (
              <>
                <S.SideBarBody>
                  <S.SideBarBodyContent
                    onClick={() => handleAssistClick("없음")}
                  >
                    없음
                  </S.SideBarBodyContent>
                </S.SideBarBody>
                {Object.values(startingPlayers).map(
                  (player, index) =>
                    player[0] !== selectedPlayer && (
                      <S.SideBarBody key={index}>
                        <S.SideBarBodyContent
                          onClick={() => handleAssistClick(player[0])}
                        >
                          {player[0]}
                        </S.SideBarBodyContent>
                      </S.SideBarBody>
                    )
                )}
              </>
            ) : isSub ? (
              <>
                {Object.keys(list).map((playerName, index) => {
                  if (
                    !Object.values(startingPlayers).some(
                      (player) => player[0] === playerName
                    )
                  ) {
                    const player = list[playerName];
                    return (
                      <S.SideBarBody
                        key={index}
                        onClick={() => handleSubListClick(player)}
                      >
                        <S.SideBarBodyContent>
                          {player.KOR_NM}
                        </S.SideBarBodyContent>
                        <S.SideBarBodyContent>
                          {player.POSITION_FIRST}
                        </S.SideBarBodyContent>
                      </S.SideBarBody>
                    );
                  }
                })}
              </>
            ) : null}
          </S.SideBar>
          <S.Field
            src={field}
            onDragStart={(e) => e.preventDefault()}
            onClick={handleFieldClick}
          />
          {Object.values(formations[currentFormation]).map((player, index) => (
            <S.Player
              key={index}
              top={player[0]}
              left={player[1]}
              onClick={() => handlePlayerClick(index)}
            >
              <S.PlayerInfoWrapper>
                <S.PlayerInfo>
                  {startingPlayers[`player${index + 1}`][0]}
                </S.PlayerInfo>
                <S.PlayerInfo>{player[2]}</S.PlayerInfo>
              </S.PlayerInfoWrapper>
            </S.Player>
          ))}
        </S.StartingLineup>
      </S.Container>
    </>
  );
};

export default ScheduleRecord;

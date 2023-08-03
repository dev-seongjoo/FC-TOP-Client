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
  const [list, setList] = useState({});
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
  const [isScore, setIsScore] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreInfo, setScoreInfo] = useState(null);
  const [isAssist, setIsAssist] = useState(false);
  const [assistInfo, setAssistInfo] = useState(null);
  const [isSub, setIsSub] = useState(false);
  const [lp, setLp] = useState(0);

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

  const handlePlayerClick = (index) => {
    if (!sideOpen) {
      setSideOpen(true);
      setSelectedPlayer(startingPlayers[`player${index + 1}`][0]);
    } else {
      setSideOpen(false);
      setIsScore(false);
    }
  };

  const handleScoreClick = () => {
    setIsScore(true);
  };

  const handleAssistClick = (player) => {
    setSideOpen(false);
    setAssistInfo(player);
    setScore(score + 1);
    setIsScore(false);
  };

  const handleSubClick = () => {
    setIsSub(true);
    console.log("교체");
  };

  const handlePlayerListClick = () => {
    setSideOpen(false);
  };

  const handleFieldClick = () => {
    setSideOpen(false);
    setIsScore(false);
  };

  useEffect(() => {
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
        <ScoreBoard score={score} lp={lp} />

        <S.Notice></S.Notice>
        <S.StartingLineup>
          <S.SideBar sideOpen={sideOpen}>
            <S.SideBarHead>
              <S.SideBarHeadContent>
                {isScore ? "도움 선수" : selectedPlayer ? selectedPlayer : null}
              </S.SideBarHeadContent>
            </S.SideBarHead>
            {!isScore ? (
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
            ) : (
              <>
                <S.SideBarBody>
                  <S.SideBarBodyContent onClick={() => handleAssistClick(null)}>
                    도움 선수 없음
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
            )}
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

{
  /* {Object.values(list).map((player, index) => (
              <S.PlayerList key={index} onClick={handlePlayerListClick}>
                <S.PlayerListContent>{player.KOR_NM}</S.PlayerListContent>
                <S.PlayerListContent>
                  {player.POSITION_FIRST}
                </S.PlayerListContent>
              </S.PlayerList>
            ))} */
}

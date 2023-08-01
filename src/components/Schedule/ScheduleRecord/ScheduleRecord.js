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
  const [score, setScore] = useState(0);
  const [lp, setLp] = useState(0);
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isAssist, setIsAssist] = useState(false);

  const [selectedPlayer, setSelectedPlayer] = useState({
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

      let newSelectedPlayers = {
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
            newSelectedPlayers[key] = [member.PLAYER, member.POSITION];
          }
        }
      }

      setSelectedPlayer(newSelectedPlayers);
    } catch (err) {
      console.error(err);
      setCurrentFormation(null);
    }
  };

  const handlePlayerListClick = () => {
    setSideOpen(false);
  };

  const handlePlayerClick = (index) => {
    setSelectedPlayerIndex(index);
    setShowPopup(true);
  };

  const handleScoreClick = () => {};

  const handleSubClick = () => {
    setSideOpen(true);
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
        <S.StartingLineup>
          <S.SideBar sideOpen={sideOpen}>
            <S.SideBarHead>
              <S.SideBarHeadContent>이름</S.SideBarHeadContent>
              <S.SideBarHeadContent>선호 포지션</S.SideBarHeadContent>
            </S.SideBarHead>
            {Object.values(list).map((player, index) => (
              <S.PlayerList key={index} onClick={handlePlayerListClick}>
                <S.PlayerListContent>{player.KOR_NM}</S.PlayerListContent>
                <S.PlayerListContent>
                  {player.POSITION_FIRST}
                </S.PlayerListContent>
              </S.PlayerList>
            ))}
          </S.SideBar>
          <S.Field
            src={field}
            onDragStart={(e) => e.preventDefault()}
            onClick={() => setSideOpen(false)}
          />
          {Object.values(formations[currentFormation]).map((player, index) => (
            <S.Player
              key={index}
              top={player[0]}
              left={player[1]}
              onClick={() => handlePlayerClick(index)}
            >
              <S.PlayerName>
                {selectedPlayer[`player${index + 1}`][0]}
              </S.PlayerName>
              <S.PlayerPosition>{player[2]}</S.PlayerPosition>
              {showPopup && selectedPlayerIndex === index && (
                <S.Popup>
                  <S.PopupOption onClick={handleScoreClick}>득점</S.PopupOption>
                  <S.PopupOption onClick={handleSubClick}>교체</S.PopupOption>
                </S.Popup>
              )}
            </S.Player>
          ))}
        </S.StartingLineup>
      </S.Container>
    </>
  );
};

export default ScheduleRecord;

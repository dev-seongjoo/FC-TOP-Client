import * as S from "./styled";
import field from "../../../assets/field.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const StartingLineup = () => {
  const form442 = {
    player1: [25, 40, "LS"],
    player2: [25, 60, "RS"],
    player3: [50, 20, "LM"],
    player4: [50, 40, "LCM"],
    player5: [50, 60, "RCM"],
    player6: [50, 80, "RM"],
    player7: [75, 20, "LB"],
    player8: [75, 40, "LCB"],
    player9: [75, 60, "RCB"],
    player10: [75, 80, "RB"],
    player11: [90, 50, "GK"],
  };

  const form433 = {
    player1: [25, 50, "ST"],
    player2: [35, 20, "LW"],
    player3: [35, 80, "RW"],
    player4: [50, 30, "LCM"],
    player5: [50, 70, "RCM"],
    player6: [60, 50, "CDM"],
    player7: [75, 20, "LB"],
    player8: [75, 40, "LCB"],
    player9: [75, 60, "RCB"],
    player10: [75, 80, "RB"],
    player11: [90, 50, "GK"],
  };

  const form4312 = {
    player1: [25, 30, "LS"],
    player2: [25, 70, "RS"],
    player3: [40, 50, "CAM"],
    player4: [50, 30, "LCM"],
    player5: [50, 70, "RCM"],
    player6: [60, 50, "CDM"],
    player7: [75, 20, "LB"],
    player8: [75, 40, "LCB"],
    player9: [75, 60, "RCB"],
    player10: [75, 80, "RB"],
    player11: [90, 50, "GK"],
  };

  const form4231 = {
    player1: [25, 50, "ST"],
    player2: [35, 20, "LW"],
    player3: [35, 80, "RW"],
    player4: [40, 50, "CAM"],
    player5: [60, 40, "LCDM"],
    player6: [60, 60, "RCDM"],
    player7: [75, 20, "LB"],
    player8: [75, 40, "LCB"],
    player9: [75, 60, "RCB"],
    player10: [75, 80, "RB"],
    player11: [90, 50, "GK"],
  };

  const form4141 = {
    player1: [25, 50, "ST"],
    player2: [50, 20, "LM"],
    player3: [50, 40, "LCM"],
    player4: [50, 60, "RCM"],
    player5: [50, 80, "RM"],
    player6: [60, 50, "CDM"],
    player7: [75, 20, "LB"],
    player8: [75, 40, "LCB"],
    player9: [75, 60, "RCB"],
    player10: [75, 80, "RB"],
    player11: [90, 50, "GK"],
  };

  const form352 = {
    player1: [25, 40, "LS"],
    player2: [25, 60, "RS"],
    player3: [50, 10, "LWB"],
    player4: [50, 30, "LCM"],
    player5: [50, 50, "CM"],
    player6: [50, 70, "RCM"],
    player7: [50, 90, "RWB"],
    player8: [75, 30, "LCB"],
    player9: [75, 50, "CB"],
    player10: [75, 70, "RCB"],
    player11: [90, 50, "GK"],
  };

  const form343 = {
    player1: [25, 50, "ST"],
    player2: [35, 20, "LW"],
    player3: [35, 80, "RW"],
    player4: [50, 20, "LM"],
    player5: [50, 40, "LCM"],
    player6: [50, 60, "RCM"],
    player7: [50, 80, "RM"],
    player8: [75, 30, "LCB"],
    player9: [75, 50, "CB"],
    player10: [75, 70, "RCB"],
    player11: [90, 50, "GK"],
  };

  const formations = {
    442: form442,
    433: form433,
    4312: form4312,
    4231: form4231,
    4141: form4141,
    352: form352,
    343: form343,
  };

  const [currentFormation, setCurrentFormation] = useState(442);
  const [sideOpen, setSideOpen] = useState(false);
  const [list, setList] = useState({});
  const [selectedInfo, setSelectedInfo] = useState(["", ""]);
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

  const { match, quarter } = useParams();

  const handlePlayerClick = (num, pos) => {
    setSideOpen(true);
    setSelectedInfo([num, pos]);
  };

  const handlePlayerListClick = (player) => {
    setSideOpen(false);

    const existingPlayer = Object.entries(selectedPlayer).find(
      ([key, value]) => value[0] === player.KOR_NM
    );

    setSelectedPlayer((prevData) => {
      // If the player has already been selected, we need to remove him from his old position
      if (existingPlayer) {
        const existingPlayerKey = existingPlayer[0];
        prevData[existingPlayerKey] = ["", ""];
      }

      // And add him to the new position
      prevData[`player${selectedInfo[0]}`] = [player.KOR_NM, selectedInfo[1]];

      // Return the modified state
      return { ...prevData };
    });
  };

  const handleFormationChange = (e) => {
    setCurrentFormation(e.target.value);

    setSelectedPlayer({
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
  };

  const handleSaveClick = async () => {
    let emptyPositions = [];

    for (let key in selectedPlayer) {
      if (selectedPlayer[key][0] === "") {
        emptyPositions.push(formations[currentFormation][key][2]);
      }
    }

    if (emptyPositions.length > 0) {
      alert(
        `${emptyPositions.join(", ")} 포지션에 선수가 입력되지 않았습니다.`
      );
      return;
    }

    alert("저장 완료되었습니다.");

    await axios.post(
      `http://localhost:4000/startinglineup/${match}/${quarter}`,
      {
        match,
        quarter,
        selectedPlayer,
        currentFormation,
      }
    );
  };

  const findPlayerPosition = (playerName) => {
    const selectedPlayersArray = Object.values(selectedPlayer);
    for (let i = 0; i < selectedPlayersArray.length; i++) {
      if (selectedPlayersArray[i][0] === playerName) {
        return selectedPlayersArray[i][1];
      }
    }
    return "";
  };

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
      } catch (error) {
        console.error(error);
      }
    };

    fetchVote();
  }, []);

  return (
    <>
      <S.Title>{quarter}Q 선발 명단</S.Title>
      <S.HorizontalLine />
      <S.Container>
        <S.FormationWrapper>
          <S.LabelWrapper>
            <S.Label>포메이션</S.Label>
            <S.Select onChange={handleFormationChange}>
              <S.Option value='442'>4-4-2</S.Option>
              <S.Option value='433'>4-3-3</S.Option>
              <S.Option value='4312'>4-3-1-2</S.Option>
              <S.Option value='4231'>4-2-3-1</S.Option>
              <S.Option value='4141'>4-1-4-1</S.Option>
              <S.Option value='352'>3-5-2</S.Option>
              <S.Option value='343'>3-4-3</S.Option>
            </S.Select>
          </S.LabelWrapper>
        </S.FormationWrapper>
        <S.StartingLineup>
          <S.SideBar sideOpen={sideOpen}>
            <S.SideBarHead>
              <S.SideBarHeadContent>현재 포지션</S.SideBarHeadContent>
              <S.SideBarHeadContent>이름</S.SideBarHeadContent>
              <S.SideBarHeadContent>선호 포지션</S.SideBarHeadContent>
            </S.SideBarHead>
            {Object.values(list).map((player, index) => (
              <S.PlayerList
                key={index}
                onClick={() => handlePlayerListClick(player)}
              >
                <S.PlayerListContent>
                  {findPlayerPosition(player.KOR_NM)}
                </S.PlayerListContent>
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
              onClick={() => {
                if (!sideOpen) {
                  handlePlayerClick(index + 1, player[2]);
                } else {
                  setSideOpen(false);
                }
              }}
            >
              <S.PlayerName>
                {selectedPlayer[`player${index + 1}`][0]}
              </S.PlayerName>
              <S.PlayerPosition>{player[2]}</S.PlayerPosition>
            </S.Player>
          ))}
        </S.StartingLineup>
        <S.SaveBtn onClick={handleSaveClick}>저장하기</S.SaveBtn>
      </S.Container>
    </>
  );
};

export default StartingLineup;

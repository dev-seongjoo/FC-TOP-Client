import * as S from "./styled";
import field from "../../../assets/field.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const StartingLineup = () => {
  const form442 = {
    player1: [30, 40],
    player2: [30, 60],
    player3: [50, 20],
    player4: [50, 40],
    player5: [50, 60],
    player6: [50, 80],
    player7: [70, 20],
    player8: [70, 40],
    player9: [70, 60],
    player10: [70, 80],
    player11: [90, 50],
  };

  const form433 = {
    player1: [30, 20],
    player2: [30, 50],
    player3: [30, 80],
    player4: [50, 30],
    player5: [50, 50],
    player6: [50, 70],
    player7: [70, 20],
    player8: [70, 40],
    player9: [70, 60],
    player10: [70, 80],
    player11: [90, 50],
  };

  const form4312 = {
    player1: [25, 30],
    player2: [40, 50],
    player3: [25, 70],
    player4: [55, 30],
    player5: [55, 50],
    player6: [55, 70],
    player7: [70, 20],
    player8: [70, 40],
    player9: [70, 60],
    player10: [70, 80],
    player11: [90, 50],
  };

  const form4231 = {
    player1: [25, 50],
    player2: [40, 20],
    player3: [40, 50],
    player4: [40, 80],
    player5: [55, 40],
    player6: [55, 60],
    player7: [70, 20],
    player8: [70, 40],
    player9: [70, 60],
    player10: [70, 80],
    player11: [90, 50],
  };

  const form4141 = {
    player1: [25, 50],
    player2: [40, 20],
    player3: [40, 40],
    player4: [40, 60],
    player5: [40, 80],
    player6: [55, 50],
    player7: [70, 20],
    player8: [70, 40],
    player9: [70, 60],
    player10: [70, 80],
    player11: [90, 50],
  };

  const form352 = {
    player1: [30, 40],
    player2: [30, 60],
    player3: [50, 10],
    player4: [50, 30],
    player5: [50, 50],
    player6: [50, 70],
    player7: [50, 90],
    player8: [70, 30],
    player9: [70, 50],
    player10: [70, 70],
    player11: [90, 50],
  };

  const form343 = {
    player1: [30, 30],
    player2: [30, 50],
    player3: [30, 70],
    player4: [50, 20],
    player5: [50, 40],
    player6: [50, 60],
    player7: [50, 80],
    player8: [70, 30],
    player9: [70, 50],
    player10: [70, 70],
    player11: [90, 50],
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

  const [currentFormation, setCurrentFormation] = useState(formations["442"]);
  const [sideOpen, setSideOpen] = useState(false);
  const [list, setList] = useState([]);

  const { id } = useParams();

  const handlePlayerClick = () => {
    setSideOpen(true);
  };

  const handleFormationChange = (e) => {
    setCurrentFormation(formations[e.target.value]);
    console.log(e.target.value);
  };

  useEffect(() => {
    const fetchVote = async () => {
      try {
        const voteResult = await axios.get(
          `http://localhost:4000/voteresult/${id}`
        );

        setList(
          voteResult.data.attendanceList.sort((a, b) => a.localeCompare(b))
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchVote();
  }, []);

  console.log(list);

  return (
    <>
      <S.Title>선발 명단</S.Title>
      <S.HorizontalLine />
      <S.SideBackground sideOpen={sideOpen}>
        {list.map((player, index) => (
          <S.PlayerCard key={index}>{player}</S.PlayerCard>
        ))}
      </S.SideBackground>
      <S.Container>
        <S.FormationWrapper>
          <S.LabelWrapper>
            <S.Label>포메이션</S.Label>
            <S.Select onChange={handleFormationChange}>
              <S.Option value='442'>4-4-2</S.Option>
              <S.Option value='433'>4-3-3</S.Option>
              <S.Option value='4312'>4-3-1-2</S.Option>x
              <S.Option value='4231'>4-2-3-1</S.Option>
              <S.Option value='4141'>4-1-4-1</S.Option>
              <S.Option value='352'>3-5-2</S.Option>
              <S.Option value='343'>3-4-3</S.Option>
            </S.Select>
          </S.LabelWrapper>
        </S.FormationWrapper>
        <S.StartingLineup>
          <S.Field src={field} onDragStart={(e) => e.preventDefault()} />
          {Object.values(currentFormation).map((player, index) => (
            <S.Player
              key={index}
              top={player[0]}
              left={player[1]}
              onClick={handlePlayerClick}
            />
          ))}
        </S.StartingLineup>
      </S.Container>
    </>
  );
};

export default StartingLineup;

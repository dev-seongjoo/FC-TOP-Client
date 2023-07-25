import styled from "styled-components";
import uniform from "../../../assets/uniform.png";

export const Title = styled.div`
  margin: 50px;
  font-family: "Noto Sans Display", sans-serif;
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
`;

export const HorizontalLine = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const FormationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Select = styled.select`
  width: 300px;
  height: 50px;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  border: 3px solid black;

  &:hover {
    cursor: pointer;
  }
`;

export const Option = styled.option``;

export const StartingLineup = styled.div`
  position: relative;
  width: 900px;
  height: 1200px;
  margin-top: 5px;
`;

export const Field = styled.img`
  width: 100%;
  height: 100%;
`;

export const Player = styled.div`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: url(${uniform}) no-repeat center center/cover;

  &:hover {
    cursor: pointer;
  }
`;

export const SideBackground = styled.div`
  display: flex; // flexbox를 이용하도록 설정
  flex-direction: column; // 요소들이 세로방향으로 배열되도록 설정
  position: fixed;
  width: 450px;
  height: 100vh;
  background-color: black;
  opacity: 0.2;
  z-index: 1;
  transform: translateX(${(props) => (props.sideOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
`;

export const PlayerCard = styled.div`
  flex: 1; // 자동으로 공간을 분할하도록 설정
  width: 100%;
  border-bottom: 1px solid white;
  color: white;
  display: flex; // 텍스트를 중앙에 위치시키기 위해 flex 사용
  justify-content: center; // 텍스트를 가로 방향 중앙에 위치
  align-items: center; // 텍스트를 세로 방향 중앙에 위치
`;

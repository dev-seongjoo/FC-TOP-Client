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
  margin-bottom: 50px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StartingLineup = styled.div`
  position: relative;
  width: 900px;
  height: 1200px;
  overflow: hidden;
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

export const PlayerName = styled.div`
  position: absolute;
  bottom: -20%;
  width: 100px;
  height: 22px;
  padding-top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const PlayerPosition = styled.div`
  position: absolute;
  bottom: -42%;
  width: 100px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const SideBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  transform: translateX(${(props) => (props.sideOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  overflow: auto;
`;

export const SideBarHead = styled.div`
  width: 100%;
  display: flex;
  padding: 25px 0;
  border-bottom: 1px solid white;
`;

export const SideBarHeadContent = styled.div`
  width: 50%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
`;

export const PlayerList = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid white;
  display: flex;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
  }

  &:active {
    background-color: transparent;
  }
`;

export const PlayerListContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
  font-weight: 400;
`;

export const Popup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  z-index: 10;
`;

export const PopupOption = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:last-child {
    border-bottom: none; // 마지막 옵션의 하단 보더 제거
  }

  &:hover {
    background-color: #f2f2f2; // 옵션에 마우스를 올리면 배경색 변경
  }
`;

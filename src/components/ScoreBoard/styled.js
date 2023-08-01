import styled from "styled-components";

export const ScoreBoardContainer = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 5px solid black;
  background-color: transparent;
  margin-bottom: 30px;
`;
export const ScoreBoardWrapper = styled.div`
  display: flex;
`;

export const TeamContainer = styled.div`
  display: flex;
`;
export const TeamWrapper = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-around;
`;
export const TeamName = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;
export const TeamScore = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;

export const Versus = styled.span`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const TimeWrapper = styled.div`
  display: flex;
  font-size: 3rem;
  font-weight: 700;
`;

export const RecordingBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border: 3px solid black;
  border-radius: 5px;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: transparent;
  }
`;

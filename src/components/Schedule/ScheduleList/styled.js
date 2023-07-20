import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.div`
  margin: 60px 0px;
  font-family: "Noto Sans Display", sans-serif;
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
`;

export const UploadBtnWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;

export const UploadBtn = styled(Link)`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  color: black;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  padding: 5px;
`;

export const HorizontalLine = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 15px 0 50px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  gap: 10px;
`;

export const Select = styled.select`
  padding: 10px;
  border: none;
  font-size: 1rem;
`;

export const Option = styled.option``;

export const Year = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;
export const Month = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

export const MatchBox = styled(Link)`
  width: 1200px;
  height: 200px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  color: black;
  text-decoration: none;
`;

export const MatchCalendar = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MatchTime = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const MatchDate = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.8rem;
  font-weight: 700;
`;

export const MatchPlace = styled.div`
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.9rem;
  font-weight: 900;

  &:hover {
    cursor: pointer;
  }
`;

export const TeamGroup = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeTeam = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const AwayTeam = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const VersusGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px 0 20px;
`;

export const Versus = styled.span`
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.1rem;
  font-weight: 900;
  margin-bottom: 5px;
`;

export const Round = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.8rem;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 1px;
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoBtn = styled.button`
  width: 150px;
  height: 50px;
  padding: 10px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  background-color: #c70101;
  border: none;
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &:active {
    opacity: 1;
  }
`;

export const RecordBtn = styled.button`
  width: 150px;
  height: 50px;
  padding: 10px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &:active {
    opacity: 1;
  }
`;

export const VoteBtn = styled.button`
  width: 150px;
  height: 50px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  background-color: black;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &:active {
    opacity: 1;
  }
`;

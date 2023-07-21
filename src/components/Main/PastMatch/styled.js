import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px 20px 0 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  background-color: black;
`;

export const TitleRow = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const SearchBtn = styled(Link)`
  color: white;
  font-size: 0.8rem;
  text-decoration: none;
`;

export const Date = styled.div`
  margin-bottom: 50px;
  color: white;
  text-align: center;
`;

export const ScoreGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeTeamGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const HomeTeam = styled.div`
  margin-bottom: 10px;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

export const HomeScore = styled.div`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
`;

export const Versus = styled.div`
  color: rgba(255, 255, 255, 0.3);
  font-size: 1.2rem;
  font-weight: 900;
  margin: 20px 0;
`;

export const AwayTeamGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AwayScore = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 2.5rem;
  font-weight: 700;
`;

export const AwayTeam = styled.div`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

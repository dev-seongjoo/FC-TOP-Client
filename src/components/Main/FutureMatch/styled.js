import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 500px;
  padding: 40px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  background-color: black;
  opacity: 0.7;
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

export const SearachBtnGroup = styled.div``;

export const SearchBtnLeft = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 5px;
`;
export const SearchBtnRight = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const Date = styled.div`
  margin-bottom: 10px;
  color: white;
  text-align: center;
`;

export const Location = styled.div`
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

export const HomeTeam = styled.div`
  margin-bottom: 10px;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

export const Versus = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  font-weight: 900;
  margin: 10px 0;
`;

export const AwayTeam = styled.div`
  margin-top: 10px;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

export const VotingBtn = styled(Link)`
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  color: black;
  background-color: white;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
`;

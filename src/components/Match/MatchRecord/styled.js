import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryNav = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
`;

export const CategoryBtnGroup = styled.div`
  display: flex;
`;

export const GoalRankBtn = styled.button`
  width: 120px;
  height: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  border: none;
  border-radius: 5px 0 0 5px;
  color: black;
  background-color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const AssistRankBtn = styled.button`
  width: 120px;
  height: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  border: none;

  color: black;
  background-color: white;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
  }
`;

export const ParticipationRankBtn = styled(Link)`
  width: 120px;
  height: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border: none;
  border-radius: 0 5px 5px 0;
  color: black;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  margin: 60px 0px;
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

import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryNav = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
`;

export const CategoryGroup = styled.div`
  display: flex;
`;

export const GoalCategory = styled(Link)`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border: none;
  border-radius: 5px 0 0 5px;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "#C70101" : "white")};
`;

export const AssisCategory = styled(Link)`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border: none;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "#C70101" : "white")};
`;

export const ParticipationCategory = styled(Link)`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border: none;
  border-radius: 0 5px 5px 0;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "#C70101" : "white")};
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

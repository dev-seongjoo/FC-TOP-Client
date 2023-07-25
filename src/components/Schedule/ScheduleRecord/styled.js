import { Link } from "react-router-dom";
import styled from "styled-components";

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
  margin: 0 auto 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const InfoBox = styled.div`
  width: 300px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  border: 3px solid black;
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

export const Option = styled.option`
  font-size: 1rem;
  font-weight: 700;
`;

export const StartingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StartingLineupSetup = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1rem;
  font-weight: 700;
`;

export const StartingLineup = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin-top: 5px;
`;

export const Field = styled.img`
  width: 100%;
  height: 100%;
`;

export const RecordBtn = styled.button`
  width: 300px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  border: 3px solid black;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: transparent;
  }
`;

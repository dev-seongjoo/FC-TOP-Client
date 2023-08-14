import styled from "styled-components";

export const Title = styled.div`
  font-family: "Noto Sans Display", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin: 30px 0;
`;

export const HorizontalLine = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Notice = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const MyLocationBtn = styled.button`
  width: 300px;
  height: 50px;
  background-color: transparent;
  border: 3px solid black;
  margin-top: 10px;
`;

export const DistanceNotice = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

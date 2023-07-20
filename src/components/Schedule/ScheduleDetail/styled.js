import styled from "styled-components";
import { Link } from "react-router-dom";

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
  margin: 15px 0 50px 0;
`;

export const BtnWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;

export const UpdateBtn = styled(Link)`
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
  margin-right: 5px;
`;

export const DeleteBtn = styled(Link)`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid red;
  color: red;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  padding: 5px;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const Label = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const InfoBox = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  border: 3px solid black;
`;

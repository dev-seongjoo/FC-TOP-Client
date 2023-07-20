import styled from "styled-components";
import DatePicker from "react-datepicker";

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

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const CustomDatePicker = styled(DatePicker)`
  width: 300px;
  height: 50px;
  font-size: 1rem;
  text-align: center;
  border: 3px solid black;
`;

export const Select = styled.select`
  width: 300px;
  height: 50px;
  font-size: 1rem;
  text-align: center;
  border: 3px solid black;

  &:hover {
    cursor: pointer;
  }
`;

export const Option = styled.option``;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  font-size: 1rem;
  text-align: center;
  border: 3px solid black;
`;

export const TextArea = styled.textarea`
  width: 300px;
  font-size: 1rem;
  border: 3px solid black;
  padding: 10px;
`;

export const RegisterBtn = styled.button`
  width: 300px;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 700;
  border: 3px solid black;
  border-radius: 5px;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }
`;

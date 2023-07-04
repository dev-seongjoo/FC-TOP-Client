import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  display: block;
  margin: 100px 0px;
  font-family: "Noto Sans Display", sans-serif;
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
`;

export const CardRow = styled.div`
  display: flex;
`;

export const CardGroup = styled.div`
  display; flex;
  flex-direction: column;
  margin: 50px 20px;
`;

export const CardTitle = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 5px;
  margin-bottom: 20px;
`;

export const CardSearch = styled.span`
  margin-right: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const Card = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

export const Attendance = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`;

export const Year = styled.div`
  margin-top: 50px;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 50px;
`;

export const AttendanceGroup = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const AttendanceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AttendanceTitle = styled.div`
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const AttendanceDetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AttendanceDetail = styled.div`
  margin-bottom: 12px;
  font-size: 1.2rem;
`;

export const AttendanceDetailKey = styled.span`
  margin-right: 5px;
  font-weight: 700;
`;

export const AttendanceScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AttendanceScoreDetail = styled.div`
  margin-top: 30px;
  font-size: 3rem;
  font-weight: 700;
`;

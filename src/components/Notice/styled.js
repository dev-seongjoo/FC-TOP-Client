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
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const NoticeLink = styled(Link)`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:hover {
    color: rgba(0, 0, 0, 0.6);
    background-color: rgba(255, 0, 0, 0.1);
  }
`;

export const NoticeMeta = styled.div`
  display: flex;
  font-size: 0.8rem;
  margin-top: 15px;
`;

export const NoticeDate = styled.span`
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
`;

export const NoticeAuthor = styled.span`
  display: inline-block;
  color: rgba(0, 0, 0, 0.5);
`;

export const NoticeViews = styled.span`
  color: rgba(0, 0, 0, 0.5);
`;

export const Seperation = styled.span`
  color: rgba(0, 0, 0, 0.5);
  margin: 0 10px;
`;

export const BtnWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const ExpandBtn = styled.button`
  width: 300px;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: transparent;
`;

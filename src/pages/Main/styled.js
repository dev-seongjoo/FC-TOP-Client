import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  /* Mobile - Portrait */
  @media (max-width: 575px) {
  }

  /* Mobile - Landscape */
  @media (max-width: 767px) {
  }

  /* Tablet */
  @media (max-width: 991px) {
  }

  /* Desktop */
  @media (max-width: 1199px) {
  }
`;

export const NoticeBoard = styled.div`
  height: 600px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f5f5f5;
`;

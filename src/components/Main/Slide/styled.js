import styled from "styled-components";

import slide1 from "../../../assets/Slide1.png";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 50%;
  background-image: url(${slide1});
  background-size: cover;

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

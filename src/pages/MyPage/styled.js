import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  height: 800px;
`;

export const MyPageNav = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

// export const NavList = styled.div`
//   color: black;
//   font-weight: 500;
//   text-decoration: none;
//   margin: 0 20px;

//   &:hover {
//     cursor: pointer;
//     opacity: 0.3;
//     transition: 0.2s;
//   }
// `;

export const NavList = styled(Link)`
  color: black;
  font-weight: 500;
  text-decoration: none;
  margin: 0 20px;

  &:hover {
    opacity: 0.3;
    transition: 0.2s;
  }
`;

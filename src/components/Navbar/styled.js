import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #c70101; */
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4);
  padding: 0 30px;
`;

export const Logo = styled.div`
  display: inline-block;
  padding: 10px;
`;

export const LogoImg = styled.img`
  height: 60px;

  &:hover {
    cursor: pointer;
  }
`;
export const MenuList = styled.div`
  position: absolute;
  top: 100%;
  left: 0%;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Menu = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  background-color: #ccc;
  border-bottom: 1px solid black;

  &:last-child {
    border-bottom: none;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuLink = styled(Link)`
  color: white;
  margin-left: 10px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: black;
    transition: 0.2s;
  }
`;

export const NavRight = styled.div`
  display: flex;
`;

export const Auth = styled.div`
  display: flex;
`;

export const Seperation = styled.div`
  margin-left: 10px;
  color: white;
`;

export const AuthLink = styled(Link)`
  color: white;
  margin-left: 10px;
  font-size: 0.8rem;
  text-decoration: none;

  &:hover {
    color: black;
    transition: 0.2s;
  }
`;

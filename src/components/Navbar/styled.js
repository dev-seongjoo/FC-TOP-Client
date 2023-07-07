import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: #c70101;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4);
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  display: inline-block;
  padding: 10px;
`;

export const LogoImg = styled.img`
  height: 60px;

  &: hover {
    cursor: pointer;
  }
`;

export const MenuList = styled.div``;

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

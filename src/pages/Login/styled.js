import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Content = styled.div``;

export const Label = styled.label`
  display: block;
  margin: 10px 0;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const CellPhoneInput = styled.input`
  width: 400px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

export const PasswordInput = styled.input`
  width: 400px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const LoginBtn = styled.button`
  width: 420px;
  height: 50px;
  color: white;
  background-color: #c70101;
  border-radius: 30px;
  border: none;
  margin-top: 10px;
`;

export const LinkGroup = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  display: block;
  margin-top: 10px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
`;

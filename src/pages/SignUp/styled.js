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

export const LastNameInput = styled.input`
  width: 120px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 3px;
`;

export const FirstNameInput = styled.input`
  width: 255px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const PasswordLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PasswordCondition = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.8em;
`;

export const PasswordInput = styled.input`
  width: 400px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const CellPhone = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

export const CellPhoneInput = styled.input`
  width: 250px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

export const CellPhoneBtn = styled.button`
  width: 145px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: transparent;
`;

export const CellPhoneAuth = styled.div`
  display: flex;
`;

export const CellPhoneAuthInput = styled.input`
  width: 250px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

export const CellPhoneAuthBtn = styled.button`
  width: 145px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: transparent;
`;

export const ZipCode = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

export const ZipCodeInput = styled.input`
  display: inline;
  width: 250px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

export const ZipCodeSearchBtn = styled.button`
  width: 145px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: transparent;
`;

export const RoadNameAddress = styled.input`
  display: block;
  width: 400px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 139px;
  padding: 13px 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 3px;
  cursor: pointer;
`;

export const Option = styled.option`
  padding: 8px 16px;
`;

export const SignUpBtn = styled.button`
  width: 420px;
  height: 50px;
  color: white;
  background-color: #c70101;
  border-radius: 30px;
  border: none;
  margin-top: 10px;
`;

export const StyledLink = styled(Link)`
  display: block;
  margin-top: 10px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
`;

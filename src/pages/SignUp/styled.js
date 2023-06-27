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

export const Phone = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

export const PhoneInput = styled.input`
  width: 250px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

export const PhoneBtn = styled.button`
  width: 145px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &:active {
    background-color: transparent;
  }

  &:disabled:hover {
    background-color: transparent;
    cursor: default;
  }
`;

export const PhoneAuth = styled.div`
  display: flex;
`;

export const PhoneInputTimer = styled.div`
  position: relative;
`;

export const PhoneAuthTimer = styled.div`
  position: absolute;
  top: 19px;
  right: 20px;
  font-size: 12px;
  color: #888;
`;

export const PhoneAuthInput = styled.input`
  width: 250px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

export const PhoneAuthBtn = styled.button`
  width: 145px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &:active {
    background-color: transparent;
  }

  &:disabled:hover {
    background-color: transparent;
    cursor: default;
  }
`;

export const PostCode = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

export const PostCodeInput = styled.input`
  display: inline;
  width: 250px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

export const PostCodeSearchBtn = styled.button`
  width: 145px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: transparent;
  }
`;

export const Address = styled.input`
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

  &: hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &: active {
    opacity: 1;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  margin-top: 10px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
`;

export const kakaoMap = styled.div`
  width: 500px;
  height: 500px;
`;

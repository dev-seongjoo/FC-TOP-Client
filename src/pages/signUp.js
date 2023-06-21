import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Content = styled.div``;

const Label = styled.label`
  display: block;
  margin: 10px 0;
  font-size: 0.9rem;
  font-weight: 600;
`;

const LastNameInput = styled.input`
  width: 120px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 3px;
`;

const FirstNameInput = styled.input`
  width: 255px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const PasswordLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PasswordCondition = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.8em;
`;

const PasswordInput = styled.input`
  width: 400px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const CellPhone = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

const CellPhoneInput = styled.input`
  width: 250px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

const CellPhoneBtn = styled.button`
  width: 145px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: transparent;
`;

const CellPhoneAuth = styled.div`
  display: flex;
`;

const CellPhoneAuthInput = styled.input`
  width: 250px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

const CellPhoneAuthBtn = styled.button`
  width: 145px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: transparent;
`;

const Address = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

const AddressInput = styled.input`
  display: inline;
  width: 250px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 5px;
`;

const AddressBtn = styled.button`
  width: 145px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: transparent;
`;

const RoadAddress = styled.input`
  display: block;
  width: 400px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const Select = styled.select`
  width: 139px;
  padding: 13px 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 3px;
  cursor: pointer;
`;

const Option = styled.option`
  padding: 8px 16px;
`;

const SignUpBtn = styled.button`
  width: 420px;
  height: 50px;
  color: white;
  background-color: #c70101;
  border-radius: 30px;
  border: none;
  margin-top: 10px;
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 10px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
`;

const SignUp = () => {
  return (
    <form>
      <Container>
        <Title>회원가입</Title>
        <Content>
          <Label htmlFor='KoreanLastName'>이름(한글)</Label>
          <LastNameInput
            id='KoreanLastName'
            type='text'
            placeholder='성'
            required
          />
          <FirstNameInput
            id='KoreanFirstName'
            type='text'
            placeholder='이름'
            required
          />
          <Label htmlFor='EnglishLastName'>이름(영어)</Label>
          <LastNameInput
            id='EnglishLastName'
            type='text'
            placeholder='last name'
            required
          />
          <FirstNameInput
            id='EnglishFirstName'
            type='text'
            placeholder='first name'
            required
          />
          <PasswordLabel>
            <Label htmlFor='Password'>비밀번호</Label>
            <PasswordCondition>
              조건: 최소 8자리 이상, 영문, 숫자, 특수문자의 조합으로 구성
            </PasswordCondition>
          </PasswordLabel>
          <PasswordInput
            id='Password'
            type='password'
            placeholder='비밀번호 입력'
            required
          />
          <Label htmlFor='CheckPassword'>비밀번호 확인</Label>
          <PasswordInput
            id='CheckPassword'
            type='password'
            placeholder='비밀번호 재입력'
            required
          />
          <Label htmlFor='cellPhone'>핸드폰</Label>
          <CellPhone>
            <CellPhoneInput
              id='cellPhone'
              type='text'
              placeholder="핸드폰 번호 입력 ('-' 제외 11자리 입력)"
              required
            />
            <CellPhoneBtn>인증번호 전송</CellPhoneBtn>
          </CellPhone>
          <CellPhoneAuth>
            <CellPhoneAuthInput type='text' placeholder='인증번호 입력' />
            <CellPhoneAuthBtn>인증번호 확인</CellPhoneAuthBtn>
          </CellPhoneAuth>
          <Label htmlFor='address'>주소</Label>
          <Address>
            <AddressInput placeholder='우편번호 입력' />
            <AddressBtn>우편번호 찾기</AddressBtn>
          </Address>
          <RoadAddress placeholder='도로명주소 입력 (읍,면,동 까지만)' />
          <Label>생년월일</Label>
          <Select>
            <Option value=''>출생 연도</Option>
            <Option value=''>Test1</Option>
            <Option value=''>Test2</Option>
            <Option value=''>Test3</Option>
          </Select>
          <Select>
            <Option value=''>월</Option>
            <Option value=''>Test1</Option>
            <Option value=''>Test2</Option>
            <Option value=''>Test3</Option>
          </Select>
          <Select>
            <Option value=''>일</Option>
            <Option value=''>Test1</Option>
            <Option value=''>Test2</Option>
            <Option value=''>Test3</Option>
          </Select>

          <Label>선호 포지션</Label>
          <Select>
            <Option value=''>1순위</Option>
            <Option value=''>FW</Option>
            <Option value=''>MF</Option>
            <Option value=''>DF</Option>
            <Option value=''>GK</Option>
          </Select>
          <Select>
            <Option value=''>2순위</Option>
            <Option value=''>FW</Option>
            <Option value=''>MF</Option>
            <Option value=''>DF</Option>
            <Option value=''>GK</Option>
          </Select>
          <Select>
            <Option value=''>3순위</Option>
            <Option value=''>FW</Option>
            <Option value=''>MF</Option>
            <Option value=''>DF</Option>
            <Option value=''>GK</Option>
          </Select>

          <Label>주발</Label>
          <Select>
            <Option value=''>선택</Option>
            <Option value=''>왼발</Option>
            <Option value=''>오른발</Option>
            <Option value=''>양발</Option>
          </Select>
        </Content>
        <SignUpBtn>회원가입</SignUpBtn>
        <StyledLink to='/'>홈으로 돌아가기</StyledLink>
        <StyledLink to='/login'>이미 가입하셨나요?</StyledLink>
      </Container>
    </form>
  );
};

export default SignUp;

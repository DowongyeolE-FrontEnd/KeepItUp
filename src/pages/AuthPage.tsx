import { flexCenter } from "@/styles/flexCenter";
import AuthBody from "@components/auth/AuthBody";
import { useState } from "react";
import { styled } from "styled-components";

const AuthPage = () => {
  const [type, setType] = useState<authType>("login");

  return (
    <AuthPageContainer>
      <AuthPageWrapper>
        <ImgWrapper src="logo.png" width="80" />
        <IntroText>{type === "login" ? "로그인" : "회원가입"}해줘잉</IntroText>

        <AuthBody type={type} setType={setType} />
      </AuthPageWrapper>
    </AuthPageContainer>
  );
};

const AuthPageContainer = styled.div`
  ${flexCenter}
  width: 100vw;
  height: 100vh;
`;

const AuthPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 70%;
  height: 540px;
  max-width: 1000px;
  min-width: 600px;
  max-height: 600px;

  padding: 50px;
  border-radius: 30px;
  border: 20px solid ${({ theme }) => theme.backgroundColor["grey-4"]};
`;

const ImgWrapper = styled.img`
  margin-bottom: 20px;
`;

const IntroText = styled.p`
  margin-bottom: 20px;
`;

export default AuthPage;

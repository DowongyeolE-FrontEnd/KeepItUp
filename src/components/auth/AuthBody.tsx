import { styled } from "styled-components";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import { Dispatch, useRef } from "react";
import { SetStateAction } from "jotai";
import { flexCenter } from "@/styles/flexCenter";

interface AuthBodyProps {
  type: authType;
  setType: Dispatch<SetStateAction<authType>>;
}

const AuthBody = ({ type, setType }: AuthBodyProps) => {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const pw2Ref = useRef<HTMLInputElement>(null);

  const onLogin = () => {
    const id = idRef.current ? idRef.current.value : "";
    const pw = pwRef.current ? pwRef.current.value : "";
    console.log(idRef, pwRef);
    resetInputs();
  };

  const onRegister = () => {
    const id = idRef.current ? idRef.current.value : "";
    const pw = pwRef.current ? pwRef.current.value : "";
    const pw2 = pw2Ref.current ? pw2Ref.current.value : "";
    console.log(idRef, pwRef, pw2Ref);
    resetInputs();
  };

  const changeType = () => {
    setType(type === "login" ? "register" : "login");
    resetInputs();
  };

  const resetInputs = () => {
    if (idRef.current) idRef.current.value = "";
    if (pwRef.current) pwRef.current.value = "";
    if (pw2Ref.current) pw2Ref.current.value = "";
  };

  return (
    <InputContainer>
      <div>
        <AuthInput name="ID" ref={idRef} />
        <AuthInput name="PW" ref={pwRef} type="password" />
        {type === "register" && <AuthInput name="PW 확인" ref={pw2Ref} type="password" />}
        <LinkText onClick={changeType}>계정이 {type === "login" ? "아직 없으신가요?" : "있으신가요?"}</LinkText>
      </div>

      <ButtonContainer>
        <AuthButton text={type === "login" ? "로그인" : "회원가입"} onClick={type === "login" ? onLogin : onRegister} />
      </ButtonContainer>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  height: 100%;

  flex-direction: column;
  justify-content: space-between;
`;

const LinkText = styled.div`
  margin-left: 68px;

  color: #2d9aff;
  font-weight: bold;

  cursor: pointer;
`;

const ButtonContainer = styled.div`
  ${flexCenter}
`;

export default AuthBody;

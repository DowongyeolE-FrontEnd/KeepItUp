import { flexCenter } from "@/styles/flexCenter";
import { MouseEventHandler } from "react";
import { styled } from "styled-components";

interface AuthButtonProps {
  text: string;
  onClick: MouseEventHandler;
}

const AuthButton = ({ text, onClick }: AuthButtonProps) => {
  return <AuthButtonContainer onClick={onClick}>{text}</AuthButtonContainer>;
};

const AuthButtonContainer = styled.div`
  ${flexCenter}
  width: 140px;
  height: 40px;

  background-color: ${({ theme }) => theme.backgroundColor["grey-4"]};

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor["grey-3"]};
  }
`;

export default AuthButton;

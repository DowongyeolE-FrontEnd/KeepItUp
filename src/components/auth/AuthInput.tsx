import { forwardRef } from "react";
import { styled } from "styled-components";

interface AuthInputProps {
  name: string;
  type?: string;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(({ name, type = "text" }, ref) => {
  return (
    <AuthInputContainer>
      <p>{name}</p>
      <input ref={ref} type={type} />
    </AuthInputContainer>
  );
});

const AuthInputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  p {
    margin-right: 12px;
    width: 55px;
  }

  input {
    width: 350px;
    height: 32px;
    padding: 0 20px;

    background-color: ${({ theme }) => theme.backgroundColor["grey-4"]};
    border: none;
  }
`;

export default AuthInput;

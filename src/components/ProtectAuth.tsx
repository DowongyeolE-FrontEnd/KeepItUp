import AuthPage from "@/pages/AuthPage";
import userAtom from "@/store/useUserStore";
import { useAtomValue } from "jotai";
import { ReactElement } from "react";
import { Navigate, useMatch } from "react-router-dom";

interface ProtectAuthProps {
  children: ReactElement;
}

const ProtectAuth = ({ children }: ProtectAuthProps) => {
  const isMyPage = useMatch("/mypage");
  const user = useAtomValue(userAtom);
  const { accessToken } = user;

  if (!accessToken && isMyPage) {
    return <Navigate replace to="/" />;
  }

  return <>{accessToken ? children : <AuthPage />}</>;
};

export default ProtectAuth;

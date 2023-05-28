import MainPage from "@/pages/main";
import MyPage from "@/pages/myPage";
import ProtectAuth from "@components/ProtectAuth";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectAuth>
            <MainPage />
          </ProtectAuth>
        }
      />

      <Route
        path="/myPage"
        element={
          <ProtectAuth>
            <MyPage />
          </ProtectAuth>
        }
      />
    </Routes>
  );
};

export default Router;

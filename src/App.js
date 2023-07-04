import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import HomePage from "./pages/Home/HomePage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import LoginPage from "./pages/Login/LoginPage";
import MyPage from "./pages/MyPage/MyPage";
import Attendance from "./components/Attendance/Attendance";
import Record from "./components/Record/Record";
import Info from "./components/Info/Info";
import InfoSetting from "./components/InfoSetting/InfoSetting";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/mypage' element={<MyPage />}>
            <Route path='info' element={<Info />} />
            <Route path='attendance' element={<Attendance />} />
            <Route path='record' element={<Record />} />
            <Route path='infosetting' element={<InfoSetting />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;

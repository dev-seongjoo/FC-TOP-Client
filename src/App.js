import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import HomePage from "./pages/Home/HomePage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import LoginPage from "./pages/Login/LoginPage";
import MyPage from "./pages/MyPage/MyPage";

import NoticePage from "./pages/Notice/NoticePage";
import All from "./components/Notice/All";
import Team from "./components/Notice/Team";
import Coach from "./components/Notice/Coach";
import Account from "./components/Notice/Account";

import Record from "./components/MyPage/Record/Record";
import Setting from "./components/MyPage/Setting/Setting";
import Info from "./components/MyPage/Info/Info";
import Attendance from "./components/MyPage/Attendance/Attendance";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/notice' element={<NoticePage />}>
            <Route path='all' element={<All />} />
            <Route path='team' element={<Team />} />
            <Route path='coach' element={<Coach />} />
            <Route path='account' element={<Account />} />
          </Route>
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/mypage' element={<MyPage />}>
            <Route path='info' element={<Info />} />
            <Route path='attendance' element={<Attendance />} />
            <Route path='record' element={<Record />} />
            <Route path='setting' element={<Setting />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;

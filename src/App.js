import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import "./App.css";

import HomePage from "./pages/Home/HomePage";

import NoticePage from "./pages/Notice/NoticePage";
import All from "./components/Notice/All";
import Team from "./components/Notice/Team";
import Coach from "./components/Notice/Coach";
import Account from "./components/Notice/Account";

import MatchPage from "./pages/Match/MatchPage";
import Schedule from "./components/Match/Schedule/Schedule";
import MatchRecord from "./components/Match/MatchRecord/MatchRecord";
import Goal from "./components/Match/MatchRecord/Goal/Goal";
import Assist from "./components/Match/MatchRecord/Assist/Assist";
import Participation from "./components/Match/MatchRecord/Participation/Participation";

import PlayerPage from "./pages/Player/PlayerPage";
import PlayerAll from "./components/Player/PlayerAll/PlayerAll";
import Fw from "./components/Player/Fw/Fw";
import Mf from "./components/Player/Mf/Mf";
import Df from "./components/Player/Df/Df";
import Gk from "./components/Player/Gk/Gk";

import MyPage from "./pages/MyPage/MyPage";
import MyInfo from "./components/MyPage/MyInfo/MyInfo";
import MyAttendance from "./components/MyPage/MyAttendance/MyAttendance";
import MyRecord from "./components/MyPage/MyRecord/MyRecord";
import Setting from "./components/MyPage/Setting/Setting";

import SignUpPage from "./pages/SignUp/SignUpPage";
import LoginPage from "./pages/Login/LoginPage";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/notice/*' element={<NoticePage />}>
            <Route path='all' element={<All />} />
            <Route path='team' element={<Team />} />
            <Route path='coach' element={<Coach />} />
            <Route path='account' element={<Account />} />
          </Route>
          <Route path='/match/*' element={<MatchPage />}>
            <Route path='schedule' element={<Schedule />} />
            <Route path='matchrecord/*' element={<MatchRecord />}>
              <Route path='goal' element={<Goal />} />
              <Route path='assist' element={<Assist />} />
              <Route path='participation' element={<Participation />}></Route>
            </Route>
          </Route>
          <Route path='/player/*' element={<PlayerPage />}>
            <Route path='all' element={<PlayerAll />} />
            <Route path='fw' element={<Fw />} />
            <Route path='mf' element={<Mf />} />
            <Route path='df' element={<Df />} />
            <Route path='gk' element={<Gk />} />
          </Route>
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/mypage/*' element={<MyPage />}>
            <Route path='myinfo' element={<MyInfo />} />
            <Route path='myattendance' element={<MyAttendance />} />
            <Route path='myrecord' element={<MyRecord />} />
            <Route path='setting' element={<Setting />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;

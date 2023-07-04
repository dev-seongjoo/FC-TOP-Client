import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import LoginPage from "./pages/Login/LoginPage";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;

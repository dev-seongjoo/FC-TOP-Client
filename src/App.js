import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Login from "./pages/login";
import Main from "./pages/Main";
import SignUp from "./pages/signUp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

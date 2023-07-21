import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedPlayer = localStorage.getItem("player");

    if (token) {
      setIsLoggedIn(true);
    }
    if (storedPlayer) {
      setPlayer(JSON.parse(storedPlayer));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, player, setPlayer }}
    >
      {children}
    </AuthContext.Provider>
  );
};

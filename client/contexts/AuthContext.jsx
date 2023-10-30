import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [checkAuth, setCheckAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ checkAuth, setCheckAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

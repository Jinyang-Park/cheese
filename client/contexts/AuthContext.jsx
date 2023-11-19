import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [checkAuth, setCheckAuth] = useState(false);
  const [PaidTime, setPaidTime] = useState(null); // 결제한 시간의 정보를 저장할 상태

  return (
    <AuthContext.Provider
      value={{ checkAuth, setCheckAuth, PaidTime, setPaidTime }}
    >
      {children}
    </AuthContext.Provider>
  );
};

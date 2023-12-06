import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [checkAuth, setCheckAuth] = useState(false); // 로그인 체크
  const [PaidTime, setPaidTime] = useState(null); // 결제한 시간의 정보를 저장할 상태
  const [userId, setUsetId] = useState(null); // 현재 유저의 id 저장

  return (
    <AuthContext.Provider
      value={{
        checkAuth,
        setCheckAuth,
        PaidTime,
        setPaidTime,
        userId,
        setUsetId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

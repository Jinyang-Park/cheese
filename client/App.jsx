import React from 'react';
import GlobalStyle from './utils/globalStyles';
import Router from './shared/Router';
import { AuthProvider } from './contexts/AuthContext';

function app() {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <Router />
      </AuthProvider>
    </>
  );
}

export default app;

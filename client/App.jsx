import React from 'react';
import GlobalStyle from './utils/globalStyles';
import Router from './shared/Router';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <Router />
      </AuthProvider>
    </>
  );
}

export default App;

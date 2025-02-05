// AppProvider.js
import React, { createContext, useContext } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

// Context 생성
const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  return (
    <AppContext.Provider value={{}}>
      <div className="app">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

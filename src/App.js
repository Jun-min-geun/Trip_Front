import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import MainPage from "./Pages/MainPage/MainPage";
import LoginPage from "./Pages/LoginPages/LoginPage";


function App() {
  const [showInsertPage, setShowInsertPage] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInsertPage(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
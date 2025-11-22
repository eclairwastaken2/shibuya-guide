import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import HomePage from "./pages/HomePage.tsx";
import CenterGaiPage from "./pages/CenterGai/CenterGaiPage.tsx";
import MeijijinguPage from "./pages/MeijiJingu/MeijiJinguPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/center-gai" element={<CenterGaiPage />} />
        <Route path="/meiji-jingu" element={<MeijijinguPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

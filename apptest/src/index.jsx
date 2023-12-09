import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import nav from './nav';
import page1 from './page1';
import page2 from './page2';
import page3 from './page3';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<nav />}>
          <Route path="page1" element={<page1 />} />
          <Route path="page2" element={<page2 />} />
          <Route path="page3" element={<page3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

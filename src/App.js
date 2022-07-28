import "./App.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/review" element={<Page2 />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

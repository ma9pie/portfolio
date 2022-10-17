import About from "pages/About";
import Main from "pages/Main";
import Resume from "pages/Resume";
import React, { useEffect, useState } from "react";
import {
  HashRouter,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import "styles/App.scss";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

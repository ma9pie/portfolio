import styled from "@emotion/styled";
import Main from "pages/Main";
import Resume from "pages/Resume";
import { Route, Routes } from "react-router-dom";
import "styles/App.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;

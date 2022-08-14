import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import MainPage from "./containers/MainPage/MainPage";

import { AppPages } from "./types";

function App() {
  const navigate = useNavigate();
  const appRef = React.createRef<HTMLDivElement>();
  return (
    <div className="App">
      <Routes>
        <Route path={AppPages.All_FILMS} element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

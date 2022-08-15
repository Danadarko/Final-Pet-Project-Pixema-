import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import FilmPage from "./containers/FilmPage/FilmPage";
import MainPage from "./containers/MainPage/MainPage";
import NewPasswordPage from "./containers/NewPasswordPage/NewPasswordPage";
import ResetPasswordPage from "./containers/ResetPasswordPage/ResetPasswordPage";
import SignInPage from "./containers/SignInPage/SignInPage";
import SignUpPage from "./containers/SignUpPage/SignUpPage";

import { AppPages } from "./types";

function App() {
  const navigate = useNavigate();
  const appRef = React.createRef<HTMLDivElement>();
  return (
    <div className="App">
      <Routes>
        <Route path={AppPages.All_FILMS} element={<MainPage />}></Route>

        <Route path={`${AppPages.All_FILMS}/:filmId`} element={<FilmPage />} />

        <Route path={AppPages.LOGIN} element={<SignInPage />}></Route>

        <Route path={AppPages.REGISTRATION} element={<SignUpPage />}></Route>

        <Route
          path={AppPages.RESET_PASSWORD}
          element={<ResetPasswordPage />}
        ></Route>

        <Route
          path={AppPages.NEW_PASSWORD_PAGE}
          element={<NewPasswordPage />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

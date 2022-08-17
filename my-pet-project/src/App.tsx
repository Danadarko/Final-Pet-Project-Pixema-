import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppContext } from "./AppContext";
import FilmPage from "./containers/FilmPage/FilmPage";
import MainPage from "./containers/MainPage/MainPage";
import NewPasswordPage from "./containers/NewPasswordPage/NewPasswordPage";
import ResetPasswordPage from "./containers/ResetPasswordPage/ResetPasswordPage";
import SignInPage from "./containers/SignInPage/SignInPage";
import SignUpPage from "./containers/SignUpPage/SignUpPage";
import { useMediaQuery } from "react-responsive";
import { AppPages } from "./types";
import SignUpMobile from "./containers/SignUpPage/SignUpMobile";

function App() {
  const appRef = React.createRef<HTMLDivElement>();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 24px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="App" ref={appRef}>
      {isDesktopOrLaptop && (
        <AppContext.Provider value={appRef}>
          <Routes>
            <Route path={AppPages.All_FILMS} element={<MainPage />}></Route>

            <Route
              path={`${AppPages.All_FILMS}/:filmId`}
              element={<FilmPage />}
            />

            <Route path={AppPages.LOGIN} element={<SignInPage />}></Route>

            <Route
              path={AppPages.REGISTRATION}
              element={<SignUpPage />}
            ></Route>

            <Route
              path={AppPages.RESET_PASSWORD}
              element={<ResetPasswordPage />}
            ></Route>

            <Route
              path={AppPages.NEW_PASSWORD_PAGE}
              element={<NewPasswordPage />}
            ></Route>
          </Routes>
        </AppContext.Provider>
      )}
      {isMobile && (
        <AppContext.Provider value={appRef}>
          <Routes>
            <Route path={AppPages.All_FILMS} element={<SignUpMobile />} />
          </Routes>
        </AppContext.Provider>
      )}
    </div>
  );
}

export default App;

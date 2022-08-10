import React from "react";
import "./App.css";
import SignInPage from "./containers/SignInPage/SignInPage";
import SignUpPage from "./containers/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      <SignUpPage></SignUpPage>
      <SignInPage></SignInPage>
    </div>
  );
}

export default App;

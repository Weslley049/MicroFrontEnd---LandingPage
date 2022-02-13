import React from "react";
import GlobalStyle from "../src/styles/global";
import LandingPage from "./Pages/LandingPage";
export default function App(props) {
  return (
    <>
      <GlobalStyle />
      <LandingPage />
    </>
  );
}

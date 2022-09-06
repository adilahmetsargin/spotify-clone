import Content from "components/Content";
import Footer from "components/Footer";
import Sidebar from "components/Sidebar";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import {
  REACT_APP_SPOTIFY_CLIENT_ID,
  REACT_APP_SPOTIFY_REDIRECT_URI,
} from "./apiKeys.js";

const App = () => {
  const [token, setToken] = useState("");

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let token = window.localStorage.getItem("token");

  //   if (!token && hash) {
  //     token = hash
  //       .substring(1)
  //       .split("&")
  //       .find((elem) => elem.startsWith("access_token"))
  //       .split("=")[1];
  //   }
  //   window.location.href = "";
  //   window.localStorage.setItem("token", token);
  // }, []);
  //   setToken(token);

  // const logout = () => {
  //   setToken("");
  //   window.localStorage.removeItem("token");
  // };

  return (
    <BrowserRouter>
      {/* <div className="flex items-center justify-center h-full">
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login
        </a>
      </div>
      {token && ( */}
      <>
        <div className="wrapper">
          <Sidebar />
          <Content />
        </div>
        <Footer />
      </>
      {/* )} */}
    </BrowserRouter>
  );
};

export default App;

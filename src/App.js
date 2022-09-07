import Content from "components/Content";
import Footer from "components/Footer";
import Sidebar from "components/Sidebar";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

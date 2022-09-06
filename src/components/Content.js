import Collection from "pages/Collection";
import Home from "pages/Home";
import Search from "pages/Search";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const Content = () => {
  return (
    <main className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="collection" element={<Collection />} />
        </Routes>
      </div>
    </main>
  );
};

export default Content;

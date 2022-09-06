import { Icon } from "Icons";
import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  // const [searchText, setSearchText] = useState("");
  // let token = "";

  // const search = async (e) => {
  //   e.preventDefault();
  //   const { data } = await axios.get("https://api.spotify.com/v1/search", {
  //     headers: {
  //       Autherization: `Bearer ${token}}`,
  //     },
  //     params: {
  //       q: searchText,
  //       type: "",
  //     },
  //   });
  // };

  return (
    <div className="mr-auto ml-4 h-10 relative">
      <label
        htmlFor="search-input"
        className="w-12 h-10 text-black flex items-center justify-center absolute top-0 left-0"
        onClick={search}
      >
        <Icon size={24} name="search" />
      </label>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        autoFocus
        id="search-input"
        type="text"
        className="h-10 bg-white rounded-3xl pl-12 outline-none text-black font-medium placeholder-black/50 text-sm max-w-full w-[22.75rem]"
        placeholder="Sanatçılar, şarkılar veya podcast'ler"
      />
    </div>
  );
};

export default Search;

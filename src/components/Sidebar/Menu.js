import React, { useState } from "react";
import { Icon } from "Icons";
import { NavLink } from "react-router-dom";
const Menu = () => {
  const [activeTab, setActiveTab] = useState("");
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to="/"
            onClick={(e) => setActiveTab(e.target.innerText)}
            className={`
               h-10 flex gap-x-4 items-center font-semibold text-sm text-link hover:text-white px-4 ${
                 activeTab === "Ana sayfa"
                   ? "bg-activeItem text-white"
                   : "text-link"
               } rounded`}
          >
            <Icon name="home" />
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={(e) => setActiveTab(e.target.innerText)}
            to="/search"
            className={`h-10 flex gap-x-4 items-center font-semibold text-sm 
             hover:text-white px-4     ${
               activeTab === "Ara" ? "bg-activeItem text-white" : "text-link"
             } rounded`}
          >
            <Icon name="search" />
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={(e) => setActiveTab(e.target.innerText)}
            to="/collection"
            className={`h-10 flex gap-x-4 items-center font-semibold text-sm text-link 
            hover:text-white px-4  ${
              activeTab === "Kitaplığın"
                ? "bg-activeItem text-white"
                : "text-link"
            } rounded`}
          >
            <Icon name="library" />
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

import React from "react";
import Logo from "img/logo.svg";
import Menu from "./Sidebar/Menu";
import { Icon } from "Icons";
import Playlist from "./Sidebar/Playlist";
import DownloadApp from "./Sidebar/DownloadApp";
const Sidebar = () => {
  return (
    <aside className="w-60 pt-6 flex flex-col bg-black">
      <a href="/" className="mb-7 px-6">
        <img src={Logo} alt="logo" className="h-10" />
      </a>
      <Menu />

      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="/"
              className="py-2 px-6 flex items-center text-sm text-link group font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 group-hover:bg-opacity-100 bg-white bg-opacity-60 rounded-sm text-black">
                <Icon name="plus" size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href="/"
              className="py-2 px-6 flex items-center text-sm text-link group font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100">
                <Icon name="hearth" size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      <Playlist />
      <DownloadApp />
    </aside>
  );
};

export default Sidebar;

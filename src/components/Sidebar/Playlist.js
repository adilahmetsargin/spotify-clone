import React from "react";

const Playlist = () => {
  return (
    <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
      <ul>
        {new Array(40).fill(
          <li>
            <a
              href="/"
              className="text-[0.813rem] text-link hover:text-white flex h-8 items-center"
            >
              Çalma listesi
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Playlist;

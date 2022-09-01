import { Icon } from "Icons";
import React from "react";

const DownloadApp = () => {
  return (
    <a
      href="/"
      className="h-10 flex flex-shrink-0 items-center text-sm font-semibold text-link gap-x-4 hover:text-white px-6"
    >
      <Icon name="downArrow" size={20} />
      Uygulamayı Yükle
    </a>
  );
};

export default DownloadApp;

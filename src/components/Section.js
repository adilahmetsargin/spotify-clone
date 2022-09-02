import React from "react";
import { NavLink } from "react-router-dom";

const Section = ({ title, more = false, items }) => {
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-semibold text-white tracking-tight">
          {title}
        </h3>
        {more && (
          <NavLink
            className={
              "text-xs font-semibold uppercase text-link hover:underline"
            }
            to={more}
          >
            SEE ALL
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <NavLink key={item.id} to="/" className={"bg-footerBg p-4 rounded"}>
            <div className="pt-[100%] relative">
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>
            {item.title}
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Section;

import React from "react";
import Card from "./Card";
import Title from "./Title";

const Section = ({ title, more = false, items }) => {
  return (
    <section>
      <Title more={more} title={title} />
      <div className="grid grid-cols-5 gap-x-6">
        {items?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Section;

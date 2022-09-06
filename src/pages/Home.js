import Section from "components/Section";
import songs from "data/songs";
import React from "react";

const Home = () => {
  return (
    <div className="grid gap-y-8">
      <Section title="Recently Player" more={true} items={songs} />
      <Section title="Show to try" more={true} items={songs} />
      <Section title="Made for Ahmet Sargın" more={true} items={songs} />
    </div>
  );
};

export default Home;

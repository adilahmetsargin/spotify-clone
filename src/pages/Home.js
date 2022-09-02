import Section from "components/Section";
import React from "react";

const Home = () => {
  const items = [
    {
      id: 1,
      title: "Dizi 1",
      description: "Açıklaması",
      image: "https://i.scdn.co/image/ab67616d00001e0262a57823eced1cb4fd93b2c1",
    },
    {
      id: 2,
      title: "Dizi 2",
      description: "Açıklaması",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb597f9edd2cd1a892d4412b09/1/tr/default",
    },
    {
      id: 3,
      title: "Dizi 3",
      description: "Açıklaması",
      image:
        "https://images.unsplash.com/photo-1662013604846-84c9ec009755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "Dizi 4",
      description: "Açıklaması",
      image:
        "https://images.unsplash.com/photo-1662048597511-e2e19e0753c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      title: "Dizi 5",
      description: "Açıklaması",
      image:
        "https://images.unsplash.com/photo-1662013605666-6eea2e31e1b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div>
      <Section title="Recently Player" more={true} items={items} />
    </div>
  );
};

export default Home;

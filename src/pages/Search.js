/* eslint-disable react-hooks/exhaustive-deps */
import Category from "components/Category";
import FavoriteCategory from "components/FavoriteCategory";
import Title from "components/Title";
import categories from "data/categories";
import favorites from "data/favorites";
import { Icon } from "Icons";
import React, { useEffect, useRef, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const Search = () => {
  const favoritesRef = useRef();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (favoritesRef.current) {
      const handleScroll = () => {
        const isEnd =
          favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth ===
          favoritesRef.current.scrollWidth;
        const isBegin = favoritesRef.current.scrollLeft === 0;
        setPrev(!isBegin);
        setNext(!isEnd);
      };
      handleScroll();
      favoritesRef?.current?.addEventListener("scroll", handleScroll);

      return () => {
        favoritesRef?.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [favoritesRef]);

  const nextButton = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300;
  };

  const prevButton = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300;
  };

  return (
    <>
      <section className="mb-8">
        <Title title="En çok dinlediğin türler" />

        <div className="relative">
          {prev && (
            <button
              className="w-12 absolute -left-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center"
              onClick={prevButton}
            >
              <Icon name="prevArrow" size={24} />
            </button>
          )}
          {next && (
            <button
              className="w-12 absolute -right-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center"
              onClick={nextButton}
            >
              <Icon name="nextArrow" size={24} />
            </button>
          )}
        </div>
        <ScrollContainer
          innerRef={favoritesRef}
          className="flex scrollable overflow-x gap-x-6"
        >
          {favorites.map((item, index) => (
            <FavoriteCategory key={index} category={item} />
          ))}
        </ScrollContainer>
      </section>

      <section>
        <Title title="Hepsine göz at" />
        <div className="grid grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Search;
